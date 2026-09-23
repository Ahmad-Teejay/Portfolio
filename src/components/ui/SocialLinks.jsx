import { socialLinks } from "../../data/socialLinks";

export default function SocialLinks({ className = "", iconSize = 18 }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-amber hover:text-amber dark:border-paper/15 dark:text-paper/70"
        >
          <Icon size={iconSize} strokeWidth={1.75} />
        </a>
      ))}
    </div>
  );
}
