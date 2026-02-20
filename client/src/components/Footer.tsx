/**
 * Footer avec liens utiles et informations
 */

import { Link } from "wouter";

export default function Footer() {
  const footerSections = [
    {
      title: "Produit",
      links: [
        { label: "Agents", href: "/#agents" },
        { label: "Vision Fractale", href: "/fractal" },
        { label: "Canon", href: "/canon" },
        { label: "Dashboard", href: "/dashboard" },
      ],
    },
    {
      title: "Ressources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Blog", href: "/blog" },
        { label: "Communauté", href: "/community" },
        { label: "Support", href: "/support" },
      ],
    },
    {
      title: "Légal",
      links: [
        { label: "Mentions légales", href: "/legal" },
        { label: "Politique de confidentialité", href: "/privacy" },
        { label: "Conditions d'utilisation", href: "/terms" },
        { label: "Cookies", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-t from-slate-950 via-slate-900 to-slate-900 border-t border-slate-800/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent mb-2">
              DIA
            </div>
            <p className="text-sm text-slate-400">
              Système multi-agents IA pour l'automatisation intelligente et l'optimisation stratégique.
            </p>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={`${section.title}-${idx}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © 2026 DIA / GDAY. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" key="social-twitter" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" key="social-github" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817a9.6 9.6 0 012.5.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.195 20 14.44 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" key="social-linkedin" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.292-1.194-2.292-1.195 0-1.38.932-1.38 1.893v4.577H8.368V9.892h2.519v.979h.037c.356-.674 1.228-1.387 2.528-1.387 2.699 0 3.196 1.775 3.196 4.085v4.169zM5.337 8.855c-.676 0-1.222-.548-1.222-1.22 0-.672.546-1.22 1.222-1.22.676 0 1.222.548 1.222 1.22 0 .672-.546 1.22-1.222 1.22zm1.039-2.582h-2.078v8.446h2.078V6.273zM17.771 1H2.229A2.229 2.229 0 000 3.229v13.542A2.23 2.23 0 002.229 19h15.542A2.229 2.229 0 0020 16.771V3.229A2.229 2.229 0 0017.771 1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
