"use client";

import { useState } from "react";

export function BillingCycleSelector() {
  const [selectedCycle, setSelectedCycle] = useState("Monthly");

  const cycles = ["Weekly", "Monthly", "Annually"];

  return (
    <div>
      <h2 className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-tight pb-2">
        Billing Cycle
      </h2>
      <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-800 p-1">
        {cycles.map((cycle) => (
          <label
            key={cycle}
            className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-semibold leading-normal transition-all duration-200 ${
              selectedCycle === cycle
                ? "bg-white dark:bg-slate-900 shadow-sm text-primary"
                : "text-slate-600 dark:text-slate-400"
            }`}
          >
            <span className="truncate">{cycle}</span>
            <input
              className="invisible w-0"
              name="billing-cycle"
              type="radio"
              value={cycle}
              checked={selectedCycle === cycle}
              onChange={() => setSelectedCycle(cycle)}
            />
          </label>
        ))}
      </div>
    </div>
  );
}
