/**
 * Breadcrumbs pour la navigation contextuelle
 */

import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs() {
  const [location] = useLocation();

  // Generate breadcrumbs from current location
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Accueil", href: "/" },
    ];

    if (location === "/") {
      return [];
    }

    const segments = location.split("/").filter(Boolean);
    let currentPath = "";

    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === segments.length - 1;

      // Map segment to readable label
      const labelMap: Record<string, string> = {
        intro: "Introduction",
        fractal: "Vision Fractale",
        canon: "Canon Fractal",
        dashboard: "Dashboard",
        agent: "Agent",
      };

      const label = labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);

      if (!isLast) {
        breadcrumbs.push({ label, href: currentPath });
      } else {
        breadcrumbs.push({ label, href: currentPath });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav className="mt-16 mb-6 px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link href="/" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1">
            <Home size={16} />
            <span className="sr-only">Accueil</span>
          </Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center gap-2">
            <ChevronRight size={16} className="text-slate-600" />
            {index === breadcrumbs.length - 1 ? (
              <span className="text-slate-300 font-medium">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="text-slate-400 hover:text-cyan-400 transition-colors">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
