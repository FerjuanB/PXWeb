'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/teamCard';
import { User, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Team = () => {
  const [selectedImage, setSelectedImage] = useState<{src: string, name: string} | null>(null);

  // Cerrar modal con ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevenir scroll
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const teamMembers = [
    {
      name: 'Usher Klein',
      role: 'CEO & Founder',
      description: 'Strategic leadership and business development',
      image: '/UKlein website picture.jpg',
    },
    {
      name: 'Fabiola Vivas',
      role: 'Project Manager',
      description: 'Project coordination and client relations',
      image: '/FabiVivasProjectManager.png',
    },
    {
      name: 'Luis Simosa',
      role: 'Head Developer - NetSuite and Integrations Administrator',
      description: 'Technical leadership and architecture',
      image: '/SimosaLuis-NetsuiteAndEdiLeader.png',
    },
    {
      name: 'Andrea Ribon',
      role: 'Administrative Coordinator',
      description: 'Administrative support',
    },
    {
      name: 'Fernando Batres',
      role: 'Full Stack Developer & AI Solutions Architect',
      description: 'Development and implementation',
      image: '/FernandoBatres.png',
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Expert Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the professionals dedicated to transforming your business through innovative technology solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-12 justify-items-center">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="text-center group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 ease-out hover:scale-125 border-muted hover:border-primary/50 w-full max-w-sm transform-gpu"
            >
              <CardHeader className="pb-0 pt-8 px-6">
                <div 
                  className={`mx-auto w-28 h-28 rounded-full overflow-hidden bg-primary/10 group-hover:bg-primary/20 transition-all duration-500 border-3 border-primary/20 group-hover:border-primary/60 group-hover:scale-110 ${member.image ? 'cursor-pointer' : ''}`}
                  onClick={() => member.image && setSelectedImage({src: member.image, name: member.name})}
                >
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 transform"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                      <User className="h-14 w-14 text-primary group-hover:scale-115 transition-transform duration-500" />
                    </div>
                  )}
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    {member.name}
                  </h3>
                </div>
              </CardHeader>
              <div className="bg-muted/70 group-hover:bg-muted/40 transition-colors duration-300 mx-4 mb-4 rounded-lg">
                <div className="px-4 py-4 space-y-3">
                  <p className="text-black group-hover:text-primary font-semibold transition-colors duration-300 text-sm leading-relaxed text-center">{member.role}</p>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 text-xs leading-relaxed text-center">
                    {member.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal para imagen completa */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedImage(null);
            }
          }}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors duration-200 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.name}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold text-center">
                {selectedImage.name}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;