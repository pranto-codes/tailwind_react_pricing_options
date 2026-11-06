import { Check, X } from "lucide-react";

const PricingFeature = ({ feature }) => {
  const isAvailable = typeof feature === "string" || feature.included !== false;

  const featureName = typeof feature === "string" ? feature : feature.name;

  return (
    <li className="flex items-start gap-3 py-2.5">
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          isAvailable
            ? "bg-indigo-100 text-indigo-600"
            : "bg-slate-100 text-slate-400"
        }`}
      >
        {isAvailable ? <Check size={13} /> : <X size={13} />}
      </span>

      <span
        className={`text-sm ${
          isAvailable ? "text-slate-600" : "text-slate-400"
        }`}
      >
        {featureName}
      </span>
    </li>
  );
};

export default PricingFeature;
