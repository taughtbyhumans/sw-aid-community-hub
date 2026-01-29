import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-heading font-bold mb-1">
              SW<span className="text-accent">*</span>AID
            </p>
            <p className="text-sm text-primary-foreground/70">
              South West and Wales Women in AI and Data
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/swaid-community"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Follow SW*AID on LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} SW*AID. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
