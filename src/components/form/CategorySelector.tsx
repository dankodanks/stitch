"use client";

import { useState } from "react";

export function CategorySelector() {
  const [selectedCategory, setSelectedCategory] = useState("Entertainment");
  const categories = ["Entertainment", "Work", "Productivity", "Utilities", "Health"];

  return (
    <label className="flex flex-col w-full">
      <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal pb-2">
        Category
      </p>
      <div className="relative">
        <select
          className="form-select appearance-none flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary h-14 p-4 pr-12 text-base font-normal leading-normal"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none">
          expand_more
        </span>
      </div>
    </label>
  );
}
