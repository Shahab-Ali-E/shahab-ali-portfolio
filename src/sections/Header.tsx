"use client";

export const Header = () => {
  return (
    <section className="flex justify-center items-center fixed w-full top-3 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <button
          className="nav-item"
          onClick={() => {
            window.scroll({
              behavior: "smooth",
              top: 0,
            });
          }}
        >
          Home
        </button>
        <button
          className="nav-item"
          onClick={() => {
            document.querySelector("#project-section")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          Projects
        </button>
        <button className="nav-item" onClick={() => {
            document.querySelector("#about-section")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}>About</button>
        <button
          className="nav-item bg-white text-gray-900 hover:bg-white/80 hover:text-gray-900"
          onClick={() => {
            document.querySelector("#contact-section")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          Contact
        </button>
      </nav>
    </section>
  );
};
