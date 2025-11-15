"use client";

import { HTMLInputTypeAttribute, useState } from "react";

type TextFieldProps = {
  label: string;
  placeholder: string;
  inputType?: HTMLInputTypeAttribute;
  prefix?: string;
  suffix?: string;
};

export function TextField({ label, placeholder, inputType = "text", prefix, suffix }: TextFieldProps) {
  const [value, setValue] = useState("");

  return (
    <label className="flex flex-col w-full">
      <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal pb-2">
        {label}
      </p>
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-base font-medium">
            {prefix}
          </span>
        )}
        <input
          className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-4 text-base font-normal leading-normal ${
            prefix ? "pl-12" : ""
          } ${suffix ? "pr-12" : ""}`}
          placeholder={placeholder}
          type={inputType}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {suffix && (
          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
    </label>
  );
}
