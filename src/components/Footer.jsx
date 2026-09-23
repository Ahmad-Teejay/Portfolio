import SocialLinks from "./ui/SocialLinks.jsx";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-12 dark:border-paper/10">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight">
            Teejay<span className="text-amber">_</span>Tech
          </p>
          <p className="mt-1 text-sm text-ink/55 dark:text-paper/55">
            Building modern digital experiences with code.
          </p>
        </div>

        <nav>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-ink/65 dark:text-paper/65">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-amber">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks iconSize={16} />
      </div>

      <p className="mt-8 text-center text-xs text-ink/40 dark:text-paper/40">
        © 2026 Teejay_Tech. All rights reserved.
      </p>
    </footer>
  );
}
