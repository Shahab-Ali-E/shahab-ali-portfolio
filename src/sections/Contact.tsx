import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  return (
    <section className="py-14 z-0" id="contact-section">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-12 p-8 md:p-7 lg:p-7 rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400">
          {/* text div */}
          <div className="text-center md:text-start md:w-2/3 lg:w-3/4 flex flex-col gap-1 md:gap-2 z-20">
            <h3 className="text-gray-950 text-2xl md:text-3xl font-serif">
              Let&apos;s create something amazing together
            </h3>
            <p className="text-black text-sm md:text-base max-w-[270px] md:max-w-sm lg:max-w-4xl">
              Ready to bring your next project to life? Let&apos;s connect and
              discuss how I can help you achieve your goals.
            </p>
          </div>
          {/* button div */}
          <div className="inline-flex justify-center h-fit z-20">
            <a
              href=""
              className="flex gap-3 items-center bg-gray-900 rounded-xl px-5 py-3 group"
            >
              <button>Contact Me</button>
              <ArrowUpRight className="size-5 group-hover:-translate-y-[20%] group-hover:translate-x-[10%] transition ease-in-out duration-200 " />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
