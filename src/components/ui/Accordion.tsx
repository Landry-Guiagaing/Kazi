"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <ul className="flex flex-col divide-y divide-navy/10 border-y border-navy/10">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const triggerId = `faq-trigger-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <li key={item.id}>
            <h3>
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => handleToggle(item.id)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-200 hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                <span className="font-heading text-lg font-semibold text-navy sm:text-xl">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  strokeWidth={1.75}
                  aria-hidden="true"
                  className={`shrink-0 text-navy transition-transform duration-200 ease-in-out ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className="pb-6"
            >
              <p className="max-w-2xl text-base leading-relaxed text-muted">
                {item.answer}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}