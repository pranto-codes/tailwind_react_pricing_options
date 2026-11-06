import { useState } from "react";
import PricingCard from "../PricingCard/PricingCard";
import pricingData from "../../data/pricingData";

const PricingOptions = () => {
  const [billing, setBilling] = useState("monthly");

  const plans = pricingData.map((plan) => ({
    ...plan,
    price:
      billing === "yearly" && plan.yearlyPrice ? plan.yearlyPrice : plan.price,
  }));

  return (
    <section id="pricing" className="bg-slate-50 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-widest text-indigo-600">
            Pricing plans
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-5xl">
            Simple pricing. No surprises.
          </h2>

          <p className="mt-5 leading-7 text-slate-500">
            Find the perfect membership plan for your needs. Start small and
            upgrade whenever you're ready.
          </p>

          <div className="mt-8 inline-flex rounded-full bg-white p-1.5 shadow-sm">
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                billing === "monthly"
                  ? "bg-indigo-600 text-white"
                  : "text-slate-600"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                billing === "yearly"
                  ? "bg-indigo-600 text-white"
                  : "text-slate-600"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="mt-16 grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((pricing) => (
            <PricingCard key={pricing.id} pricing={pricing} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingOptions;
