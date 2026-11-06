import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-slate-950 px-5 pb-8 pt-16 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#home" className="text-3xl font-black">
              Subscript<span className="text-indigo-400">.</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Flexible membership solutions designed to give you more value,
              more freedom, and a better experience.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Quick Links</h3>

            <div className="mt-5 flex flex-col gap-4 text-sm text-slate-400">
              <a href="#home" className="hover:text-white">
                Home
              </a>
              <a href="#benefits" className="hover:text-white">
                Benefits
              </a>
              <a href="#pricing" className="hover:text-white">
                Pricing
              </a>
              <a href="#faq" className="hover:text-white">
                FAQ
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Get Started</h3>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Find a membership plan that works for you.
            </p>

            <a
              href="#pricing"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Explore Plans
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Subscript. All rights reserved.</p>
          <p>Designed with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
