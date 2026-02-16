/**
 * Header avec navigation sticky
 * Menu principal, logo, CTA
 */

import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Qui sommes-nous", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Agents", href: "/#agents" },
    { label: "Vision", href: "/fractal" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-900 via-slate-900 to-transparent border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">
              DIA
            </div>
            <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">/GDAY</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 hover:text-cyan-400 transition-colors relative group"
              >
                {item.label}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-magenta-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/dashboard" className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
              Dashboard
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden pb-4 space-y-2"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <button className="w-full px-4 py-2 mt-4 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg transition-all duration-300">
                Rejoindre
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
