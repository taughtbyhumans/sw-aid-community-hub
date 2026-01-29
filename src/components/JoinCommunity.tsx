import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
const JoinCommunity = () => {
  return <section className="py-20 px-6 bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
          Join Our Community
        </h2>
        <p className="text-lg text-secondary-foreground/90 mb-10">
          Stay in the loop with upcoming events, resources, and community news. 
          We'd love to have you with us.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <a href="https://swaid.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer">
              Join our mailing list
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 rounded-full transition-all duration-300">
            <a target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" href="https://www.linkedin.com/company/swaid-community">
              <Linkedin className="w-5 h-5" />
              Follow on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default JoinCommunity;