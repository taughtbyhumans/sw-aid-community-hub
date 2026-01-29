import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import JoinCommunity from "@/components/JoinCommunity";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <WhatWeDo />
      <JoinCommunity />
      <Footer />
    </main>
  );
};

export default Index;
