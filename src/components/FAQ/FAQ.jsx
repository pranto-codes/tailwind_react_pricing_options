import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Can I change my subscription plan later?",
    answer:
      "Yes. You can upgrade or change your membership whenever your requirements change.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes. You can cancel your subscription according to the terms of your selected plan.",
  },
  {
    question: "Are there different payment options?",
    answer:
      "Available payment options depend on the payment methods supported by the platform.",
  },
  {
    question: "How do I get customer support?",
    answer:
      "You can contact the support team through the contact section for assistance.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="faq" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-widest text-indigo-600">
            FAQ
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-5xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? -1 : index)
                }
                className="flex w-full items-center justify-between gap-4 text-left font-semibold text-slate-900"
                aria-expanded={activeIndex === index}
              >
                {item.question}

                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeIndex === index && (
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
