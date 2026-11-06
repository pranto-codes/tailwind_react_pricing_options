import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950">
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:py-32 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-300">
            <Sparkles size={16} />
            Simple plans. Unlimited possibilities.
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            Choose the right plan.
            <span className="text-indigo-400"> Unlock your potential.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
            Get access to powerful features with flexible membership plans
            designed to help you achieve more without unnecessary complexity.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-7 py-4 font-semibold text-white transition hover:bg-indigo-600"
            >
              Explore Plans
              <ArrowRight size={18} />
            </a>

            <a
              href="#benefits"
              className="rounded-full border border-slate-700 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Discover Benefits
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-5 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-green-400" />
              Flexible plans
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-green-400" />
              Easy upgrades
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl sm:p-9">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Your membership</p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  Premium Experience
                </h3>
              </div>

              <div className="rounded-2xl bg-indigo-500/20 p-3 text-indigo-300">
                <Sparkles size={27} />
              </div>
            </div>

            <div className="my-8 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-7">
              <p className="text-sm text-indigo-100">Everything you need</p>
              <h2 className="mt-3 text-4xl font-bold text-white">
                More Value.
              </h2>
              <p className="mt-2 text-indigo-100">
                More flexibility. More possibilities.
              </p>
            </div>

            {[
              "Access premium features",
              "Flexible subscription options",
              "Dedicated customer support",
              "Easy plan management",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-b border-white/10 py-4 last:border-0"
              >
                <CheckCircle2 size={19} className="text-green-400" />
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
