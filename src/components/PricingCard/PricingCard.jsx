import { ArrowRight, Check } from "lucide-react";
import PricingFeature from "../PricingCard/PricingFeature";

const PricingCard = ({ pricing }) => {
  const {
    title,
    price,
    description,
    features,
    popular,
    period = "/month",
  } = pricing;

  return (
    <div
      className={`relative flex flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        popular
          ? "border-indigo-600 bg-slate-950 text-white shadow-xl shadow-indigo-200"
          : "border-slate-200 bg-white text-slate-900"
      }`}
    >
      {popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white">
          Most Popular
        </span>
      )}

      <div>
        <h3 className="text-2xl font-bold">{title}</h3>

        <p
          className={`mt-3 text-sm leading-6 ${
            popular ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      </div>

      <div className="my-8 flex items-baseline gap-1">
        <span className="text-4xl font-bold">{price}</span>
        <span
          className={`text-sm ${popular ? "text-slate-400" : "text-slate-500"}`}
        >
          {period}
        </span>
      </div>

      <a
        href="#contact"
        className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
          popular
            ? "bg-indigo-500 text-white hover:bg-indigo-600"
            : "bg-slate-900 text-white hover:bg-indigo-600"
        }`}
      >
        Choose Plan
        <ArrowRight size={17} />
      </a>

      <div
        className={`my-7 border-t ${
          popular ? "border-white/10" : "border-slate-100"
        }`}
      />

      <p
        className={`mb-3 text-xs font-bold uppercase tracking-widest ${
          popular ? "text-slate-300" : "text-slate-500"
        }`}
      >
        What's included
      </p>

      <ul className="flex-1">
        {features.map((feature, index) => (
          <PricingFeature key={index} feature={feature} />
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
