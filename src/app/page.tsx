import { SubscriptionListItem } from "@/components/SubscriptionListItem";
import { subscriptions } from "@/lib/data";
import Link from "next/link";

export default function MySubscriptions() {
  const upcomingSubscriptions = subscriptions.filter((sub) => {
    const dueDate = new Date(sub.nextPaymentDate);
    const today = new Date();
    const diffInDays = Math.ceil(
      (dueDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
    );
    return diffInDays >= 0 && diffInDays <= 30;
  });

  const totalMonthly = subscriptions.reduce((acc, sub) => {
    if (sub.billingCycle === "Monthly") {
      return acc + sub.price;
    }
    // Note: This is a simplified calculation. For a real app, you'd want to normalize prices to a monthly value.
    return acc;
  }, 0);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <div className="flex-1 pb-28">
          <div className="sticky top-0 z-10 flex items-center bg-background-light/80 p-4 pb-3 dark:bg-background-dark/80 backdrop-blur-sm">
            <div className="flex size-12 shrink-0 items-center justify-start">
              <span
                className="material-symbols-outlined text-zinc-800 dark:text-zinc-200"
                style={{ fontSize: "28px" }}
              >
                menu
              </span>
            </div>
            <h1 className="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-zinc-900 dark:text-white">
              My Subscriptions
            </h1>
            <div className="flex w-12 items-center justify-end">
              <button className="flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-transparent text-zinc-800 dark:text-white min-w-0 p-0">
                <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>
                  notifications
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 p-4">
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl bg-card-light dark:bg-card-dark p-6">
              <p className="text-base font-medium leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                Total Monthly
              </p>
              <p className="text-3xl font-bold leading-tight tracking-tight text-text-light-primary dark:text-text-dark-primary">
                ${totalMonthly.toFixed(2)}
              </p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl bg-card-light dark:bg-card-dark p-6">
              <p className="text-base font-medium leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                Active Subs
              </p>
              <p className="text-3xl font-bold leading-tight tracking-tight text-text-light-primary dark:text-text-dark-primary">
                {subscriptions.length}
              </p>
            </div>
          </div>

          <h3 className="px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em] text-zinc-900 dark:text-white">
            Upcoming Payments
          </h3>
          <div className="flex flex-col gap-2 px-4">
            {upcomingSubscriptions.map((sub) => (
              <Link key={sub.id} href={`/subscriptions/${sub.id}`}>
                <SubscriptionListItem subscription={sub} isUpcoming />
              </Link>
            ))}
          </div>

          <h3 className="px-4 pb-2 pt-8 text-lg font-bold leading-tight tracking-[-0.015em] text-zinc-900 dark:text-white">
            All Subscriptions
          </h3>
          <div className="flex flex-col gap-2 px-4">
            {subscriptions.map((sub) => (
              <Link key={sub.id} href={`/subscriptions/${sub.id}`}>
                <SubscriptionListItem subscription={sub} />
              </Link>
            ))}
          </div>
        </div>

        <div className="fixed bottom-24 right-4 z-20">
          <Link href="/add">
            <button className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-alt text-white shadow-lg">
              <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>
                add
              </span>
            </button>
          </Link>
        </div>

        <div className="fixed bottom-0 left-0 right-0 z-10 border-t border-zinc-200 bg-background-light/80 dark:border-zinc-800 dark:bg-background-dark/80 backdrop-blur-sm">
          <div className="mx-auto flex h-20 max-w-md items-center justify-around px-4">
            <Link href="/" className="flex flex-col items-center gap-1 text-primary-alt">
              <span className="material-symbols-outlined">receipt_long</span>
              <span className="text-xs font-semibold">Overview</span>
            </Link>
            <Link href="/subscriptions" className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400">
              <span className="material-symbols-outlined">calendar_today</span>
              <span className="text-xs font-medium">Calendar</span>
            </Link>
            <button className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400">
              <span className="material-symbols-outlined">pie_chart</span>
              <span className="text-xs font-medium">Insights</span>
            </button>
            <Link href="/settings" className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-xs font-medium">Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
