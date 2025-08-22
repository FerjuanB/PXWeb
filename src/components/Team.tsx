import { Card, CardContent, CardHeader } from '@/components/ui/teamCard';
import { User } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Usher Klein',
      role: 'CEO',
      description: 'Strategic leadership and business development',
    },
    {
      name: 'Fabiola Vivas',
      role: 'Project Manager',
      description: 'Project coordination and client relations',
    },
    {
      name: 'Luis Simosa',
      role: 'Head Developer',
      description: 'Technical leadership and architecture',
    },
    {
      name: 'Fernando Batres',
      role: 'Full Stack Developer',
      description: 'Development and implementation',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="text-center group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border-muted hover:border-primary/30"
            >
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-6 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;