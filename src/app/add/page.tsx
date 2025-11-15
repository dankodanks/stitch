import { BillingCycleSelector } from "@/components/form/BillingCycleSelector";
import { CategorySelector } from "@/components/form/CategorySelector";
import { NotesField } from "@/components/form/NotesField";
import { TextField } from "@/components/form/TextField";
import Link from "next/link";

export default function AddSubscription() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark">
      <div className="relative flex min-h-screen w-full flex-col">
        <header className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light dark:bg-background-dark">
          <Link
            href="/"
            className="text-slate-800 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full"
          >
            <span className="material-symbols-outlined">close</span>
          </Link>
          <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Add New Subscription
          </h1>
          <div className="flex w-10 items-center justify-end"></div>
        </header>

        <main className="flex-1 px-4 py-6">
          <div className="flex flex-col gap-6">
            <TextField label="Service Name" placeholder="e.g. Netflix" />
            <TextField label="Price" placeholder="e.g. 9.99" inputType="number" prefix="$" />
            <BillingCycleSelector />
            <TextField label="Next Payment" placeholder="dd/mm/yyyy" suffix="calendar_today" />
            <CategorySelector />
            <NotesField />
          </div>
        </main>

        <footer className="sticky bottom-0 bg-background-light dark:bg-background-dark p-4 pt-2">
          <Link
            href="/"
            className="flex w-full items-center justify-center rounded-xl bg-primary-alt h-14 text-white text-base font-bold leading-normal transition-opacity hover:opacity-90"
          >
            Save Subscription
          </Link>
        </footer>
      </div>
    </div>
  );
}
