"use client";

import { useState } from "react";

export function NotesField() {
  const [notes, setNotes] = useState("");

  return (
    <label className="flex flex-col w-full">
      <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal pb-2">
        Notes (Optional)
      </p>
      <textarea
        className="form-textarea flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary min-h-28 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-4 text-base font-normal leading-normal"
        placeholder="e.g. Family plan, shared account"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
    </label>
  );
}
