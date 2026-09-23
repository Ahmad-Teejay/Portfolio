const variants = {
  primary:
    "bg-ink text-paper dark:bg-amber dark:text-ink hover:opacity-90 border border-transparent",
  outline:
    "bg-transparent text-ink dark:text-paper border border-ink/20 dark:border-paper/20 hover:border-amber hover:text-amber",
};

export default function Button({
  as = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const Tag = as;
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
