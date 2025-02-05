"use client";

export const Header = () => {
  return (
    <section className="flex justify-center items-center fixed w-full top-3 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          className="nav-item"
          onClick={() => {
            window.scroll({
              behavior: "smooth",
              top: 0,
            });
          }}
        >
          Home
        </a>
        <a
          className="nav-item"
          onClick={() => {
            document.querySelector("#project-section")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          Projects
        </a>
        <a className="nav-item" onClick={() => {
            document.querySelector("#about-section")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}>About</a>
        <a
          className="nav-item bg-white text-gray-900 hover:bg-white/80 hover:text-gray-900"
          onClick={() => {
            document.querySelector("#contact-section")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          Contact
        </a>
      </nav>
    </section>
  );
};
