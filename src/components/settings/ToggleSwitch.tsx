"use client";

import { useState } from "react";

type ToggleSwitchProps = {
  initialChecked?: boolean;
};

export function ToggleSwitch({ initialChecked = false }: ToggleSwitchProps) {
  const [isChecked, setIsChecked] = useState(initialChecked);

  return (
    <div
      role="switch"
      aria-checked={isChecked}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
        isChecked ? "bg-primary" : "bg-gray-200 dark:bg-gray-600"
      }`}
      onClick={() => setIsChecked(!isChecked)}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          isChecked ? "translate-x-5" : "translate-x-0"
        }`}
      ></span>
    </div>
  );
}
