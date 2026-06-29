import ArrowUpRight from "../assets/icons/arrow-up-right.svg";

export const Footer = () => {
  const socialLinks = [
    // TODO: replace with your actual GitHub profile URL if different
    { title: "GitHub", href: "https://github.com/Shahab-Ali-E" },
    // TODO: confirm this LinkedIn URL is correct
    { title: "LinkedIn", href: "http://www.linkedin.com/in/shahab-ali-9626812b6" },
    { title: "Email", href: "mailto:shahabalihassan46@gmail.com" },
    { title: "CV", href: "/shahab_ali_ge_cv.pdf", download: "shahab_ali_hassan_cv" },
  ];

  return (
    <footer className="relative lg:pt-10 overflow-x-clip z-0">
      <div className="absolute h-[400px] w-[1700px] bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-t from-emerald-300/20 via-transparent via-60% to-transparent -z-10" />
      <div className="container z-10">
        <div className="border-t border-[var(--border)] py-6 flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-[var(--text-muted)] text-sm">
            &copy; 2025 Shahab Ali Hassan. All rights reserved.
          </div>
          <nav
            className="flex flex-col md:flex-row items-center gap-8"
            aria-label="Social links"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                download={link.download}
                className="inline-flex items-center gap-1.5 group text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                target={link.download || link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.download || link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={link.title}
              >
                <span className="font-semibold text-sm">{link.title}</span>
                <ArrowUpRight
                  className="size-4 group-hover:-translate-y-[20%] group-hover:translate-x-[10%] transition ease-in-out duration-200"
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
