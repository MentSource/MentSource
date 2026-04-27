import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { navigateTo } from "@/lib/utils";

const footerLinks = {
  organization: [
    { name: "Home", href: "/home" },
    { name: "About Us", href: "/about" },
    { name: "Our Mentors", href: "/about" },
    { name: "Documentation", href: "/documentation" },
  ],
  programs: [
    { name: "Learning Paths", href: "/projects" },
    { name: "Mentorship", href: "/mentorship" },
    { name: "Internship", href: "/internship" },
  ],
  getInvolved: [
    { name: "Become a Mentor", href: "/mentorship#become-mentor" },
    { name: "Volunteer", href: "/community" },
    { name: "Partner With Us", href: "/contact" },
  ]
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "GitHub", icon: Github, href: "https://github.com/MentSource" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/mentsource" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/mentsource/" },
  { name: "Email", icon: Mail, href: "mailto:mentsource.1@gmail.com" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container-main pt-8 pb-4 lg:pt-10 lg:pb-5">
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div onClick={()=>navigateTo("/")} className="flex items-center gap-2 mb-3 cursor-pointer">
              <img src="/logo3.jpg" className="h-[52px] w-[70px]" alt="MentSource Logo" />
            </div>
            <p className="text-background/60 text-sm mb-2 max-w-sm leading-relaxed">
              Making learning, open-source collaboration, and mentorship accessible to everyone, everywhere.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 text-background/60 hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-display font-semibold text-background text-sm mb-3">Organization</h3>
            <ul className="space-y-2">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <div
                  onClick={()=> navigateTo(link.href)}
                    className="cursor-pointer text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-background text-sm mb-3">Programs</h3>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <div
                  onClick={()=> navigateTo(link.href)}
                    className="cursor-pointer text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-background text-sm mb-3">Get Involved</h3>
            <ul className="space-y-2">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.name}>
                  <div
                    onClick={()=> navigateTo(link.href)}
                    className="cursor-pointer text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 pt-3 border-t border-background/10">
          <p className="text-background/50 text-xs sm:text-sm leading-tight">
            © {new Date().getFullYear()} MentSource Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
