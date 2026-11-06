import { ShieldCheck, Zap, Headset, RefreshCw } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Powerful Features",
    description:
      "Get access to useful tools and features that help you get more value from your membership.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Experience",
    description:
      "Enjoy a reliable experience with a focus on security, privacy, and transparency.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description:
      "Get assistance whenever you need help making the most of your subscription.",
  },
  {
    icon: RefreshCw,
    title: "Flexible Plans",
    description:
      "Choose a membership that fits your needs and upgrade when your requirements change.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-widest text-indigo-600">
            Why choose us
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-5xl">
            Everything you need in one place
          </h2>

          <p className="mt-5 leading-7 text-slate-500">
            Enjoy a membership experience built around flexibility, simplicity,
            and real value.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-slate-200 p-7 transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-xl bg-indigo-50 p-4 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon size={25} />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
