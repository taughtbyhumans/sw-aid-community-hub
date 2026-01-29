import { Card, CardContent } from "@/components/ui/card";
import { Coffee, BookOpen, Briefcase, Mic } from "lucide-react";

const events = [
  {
    icon: Coffee,
    title: "Coffee Mornings & Networking",
    description: "Casual meetups to connect with fellow women in AI and data",
  },
  {
    icon: BookOpen,
    title: "Book Club",
    description: "Exploring ideas together through shared reading and discussion",
  },
  {
    icon: Briefcase,
    title: "Lunch & Learns",
    description: "Informal sessions to share knowledge and learn new skills",
  },
  {
    icon: Mic,
    title: "Showcases & Panels",
    description: "Celebrating achievements and amplifying diverse voices",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {events.map((event, index) => (
            <Card 
              key={index} 
              className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-card"
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-full shrink-0">
                  <event.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-card-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-muted-foreground">
          Find our upcoming events on{" "}
          <a 
            href="https://www.linkedin.com/company/swaid" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-accent underline underline-offset-4 transition-colors"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
};

export default WhatWeDo;
