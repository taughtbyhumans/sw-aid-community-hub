import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary mb-6">
          SW<span className="text-accent">*</span>AID
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-4">
          South West and Wales Women in AI and Data
        </p>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10">
          A welcoming community where women in AI and data connect, learn, and thrive together.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <a 
            href="https://swaid.beehiiv.com/subscribe" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Join our mailing list
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
