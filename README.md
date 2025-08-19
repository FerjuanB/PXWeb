# Project X Innovation Website

A modern, professional website for Project X Innovation built with Next.js 15 and React 19. This project showcases expert tech solutions including ERP implementations, UI design, and EDI connections.

## Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Professional Design**: Clean, minimal layout with Project X Innovation branding
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Fast loading with Next.js optimizations
- **Accessibility**: Built with accessibility best practices

## Brand Colors

- Primary: Lime Green (#89F336)
- Background: White (#FFFFFF) / Black (#000000) dark mode
- Text: Black (#000000) / White (#FFFFFF) dark mode
- Secondary: Dark Grey (#333333), Light Grey (#666666)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── globals.css      # Global styles with custom CSS variables
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   │   ├── button.tsx  # Button component with variants
│   │   └── card.tsx    # Card component
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Services.tsx    # Services section
│   ├── Contact.tsx     # Contact form and info
│   └── Footer.tsx      # Footer component
└── lib/
    └── utils.ts        # Utility functions
```

## Build and Deploy

Build the application for production:

```bash
npm run build
```

The easiest way to deploy your Next.js app is to use [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

## Technologies Used

- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Class Variance Authority (component variants)

## License

© 2024 Project X Innovation. All rights reserved.
