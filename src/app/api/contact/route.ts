import { NextRequest, NextResponse } from 'next/server'
import { Client } from '@hubspot/api-client'

// Create HubSpot client
const hubspotClient = new Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN })

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    // Verify we have the credentials
    if (!process.env.HUBSPOT_ACCESS_TOKEN) {
      console.error('HUBSPOT_ACCESS_TOKEN is not configured')
      return NextResponse.json(
        { error: 'Missing HubSpot configuration' },
        { status: 500 }
      )
    }

    // Get form data
    const body: ContactFormData = await request.json()
    const { name, email, message } = body

    // Validate required data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate basic email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    console.log('Sending contact to HubSpot:', { name, email, message: message.substring(0, 50) + '...' })

    // Create contact in HubSpot
    const contactData = {
      properties: {
        firstname: name.split(' ')[0], // First name
        lastname: name.split(' ').slice(1).join(' ') || '', // Rest as last name
        email: email,
        message: message,
        // Additional fields you can use
        hs_lead_status: 'NEW',
        lead_source: 'Website Contact Form',
        website: 'projectxinnovation.com'
      }
    }

    // Try to create the contact
    const contact = await hubspotClient.crm.contacts.basicApi.create(contactData)

    console.log('Contact created successfully in HubSpot:', contact.id)

    // If you have a specific form in HubSpot, you can also send it there
    if (process.env.HUBSPOT_FORM_ID && process.env.HUBSPOT_PORTAL_ID) {
      try {
        const formSubmission = {
          portalId: process.env.HUBSPOT_PORTAL_ID,
          formId: process.env.HUBSPOT_FORM_ID,
          fields: [
            { name: 'firstname', value: name.split(' ')[0] },
            { name: 'lastname', value: name.split(' ').slice(1).join(' ') || '' },
            { name: 'email', value: email },
            { name: 'message', value: message }
          ]
        }

        const portalId = process.env.HUBSPOT_PORTAL_ID || '';
        const formId = process.env.HUBSPOT_FORM_ID || '';
        
        // Use the correct API method
        await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formSubmission)
        })
        console.log('Form also sent to HubSpot Forms')
      } catch (formError) {
        console.warn('Error sending to HubSpot Forms (contact was created successfully):', formError)
        // Don't fail here - the contact was already created
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Contact sent successfully',
      contactId: contact.id 
    })

  } catch (error: any) {
    console.error('Error sending to HubSpot:', error)

    // Handle specific HubSpot errors
    if (error.code === 409) {
      // Contact already exists - try to update it
      try {
        const body: ContactFormData = await request.json()
        const { name, email, message } = body

        // Search for existing contact by email
        const searchResult = await hubspotClient.crm.contacts.searchApi.doSearch({
          filterGroups: [{
            filters: [{
              propertyName: 'email',
              operator: 'EQ' as any,
              value: email
            }]
          }],
          properties: ['firstname', 'lastname', 'email'],
          limit: 1
        })

        if (searchResult.results && searchResult.results.length > 0) {
          const existingContact = searchResult.results[0]
          
          // Update existing contact
          await hubspotClient.crm.contacts.basicApi.update(existingContact.id, {
            properties: {
              message: message,
              hs_lead_status: 'NEW',
              lastmodifieddate: new Date().toISOString()
            }
          })

          console.log('Existing contact updated:', existingContact.id)
          return NextResponse.json({ 
            success: true, 
            message: 'Contact updated successfully',
            contactId: existingContact.id 
          })
        }
      } catch (updateError) {
        console.error('Error updating existing contact:', updateError)
      }
    }

    return NextResponse.json(
      { 
        error: 'Internal server error. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
}

