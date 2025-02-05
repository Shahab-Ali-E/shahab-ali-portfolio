import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

export const Footer = () => {
  const socialLinks = [
    { title: "Youtube", href: "" },
    { title: "Twitter", href: "" },
    { title: "Instagram", href: "" },
    { title: "LinkedIn", href: "" },
  ];
  return (
    <footer className="relative lg:pt-10 overflow-x-clip z-0">
      <div className="absolute h-[400px] w-[1700px] bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-t from-emerald-300/30 via-transparent via-60%  to-transparent -z-10"></div>
     <div className="container z-10">
        <div className="border-t border-white/15 py-6 flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40 md:text-sm">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="inline-flex items-center gap-1.5 m group"
              >
                <span className="font-semibold  md:text-sm">{link.title}</span>
                <ArrowUpRight className="size-4 group-hover:-translate-y-[20%] group-hover:translate-x-[10%] transition ease-in-out duration-200 " />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
