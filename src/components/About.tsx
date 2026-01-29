const About = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
          Who We Are
        </h2>
        <p className="text-lg md:text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
          SW*AID is a community for women working in — or curious about — the fields of 
          artificial intelligence and data. Based across the South West of England and Wales, 
          we create spaces to connect, share knowledge, and support one another.
        </p>
        <blockquote className="text-xl md:text-2xl font-medium text-primary italic mb-8 px-6 border-l-4 border-accent text-left">
          "To ensure women are not just present, but fully included, visible, and 
          supported in the fields of AI and data."
        </blockquote>
        <div className="inline-block bg-accent/20 px-6 py-3 rounded-full">
          <p className="text-lg font-semibold text-primary">
            All experience levels welcome
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
