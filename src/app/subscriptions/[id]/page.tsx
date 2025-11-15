import { subscriptions } from "@/lib/data";
import { format } from "date-fns";
import Link from "next/link";

type SubscriptionDetailsProps = {
  params: {
    id: string;
  };
};

export default function SubscriptionDetails({ params }: SubscriptionDetailsProps) {
  const subscription = subscriptions.find((sub) => sub.id === params.id);

  if (!subscription) {
    return <div>Subscription not found</div>;
  }

  // Mock data for payment history
  subscription.paymentHistory = [
    { date: "2023-11-24", amount: 19.99 },
    { date: "2023-10-24", amount: 19.99 },
    { date: "2023-09-24", amount: 19.99 },
  ];

  return (
    <div className="font-display bg-background-light dark:bg-background-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
          <Link
            href="/"
            className="text-slate-800 dark:text-white flex size-10 shrink-0 items-center justify-center"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </Link>
          <h2 className="text-slate-800 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            {subscription.name}
          </h2>
          <div className="flex size-10 shrink-0 items-center"></div>
        </div>

        <div className="flex flex-col gap-6 p-4">
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-sm bg-card-light dark:bg-card-dark">
            <div
              className="w-full h-32 bg-center bg-no-repeat bg-cover rounded-t-xl"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCkh_y-qoFehezOTCarHkQo2RofCZrQUE35PKcqhm26qa0vcvlNisM__kMbrwyjvp2ghsNZYjc-0syCG62ZpYolVJ0WJFFguovYFeoaCDs8VTvbYp1cXtO6VjiFUuACVPh9fhtWNP2WDneIEZWjpbiDqB2xH_GnzIC0UJiexVVgiAl7vj4GJxAw5fuCnEEUnT146Np-0XHuNRWzrylLOUnU-X8W-gjkjq4eMUfXfp9LvYBKzkP61x9i5lHWejEGGoHwD8gfVZjXSeM")',
              }}
            />
            <div className="flex w-full flex-col items-stretch justify-center gap-4 p-4 -mt-10">
              <div className="flex items-end gap-4">
                <div
                  className="flex size-20 items-center justify-center rounded-lg bg-black shrink-0 border-4 border-card-light dark:border-card-dark"
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg class="w-10 h-10" fill="none" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M110.15 512V0H214.234V512H110.15Z" fill="#B20710"></path><path d="M397.777 512V0H293.693V512H397.777Z" fill="#B20710"></path><path d="M511.96 512V0H407.876L214.234 227.936V512H314.542L511.96 170.835V512Z" fill="#E50914"></path></svg>',
                  }}
                ></div>
                <div className="flex flex-col justify-end flex-grow">
                  <p className="text-slate-800 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
                    {subscription.name} Premium
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                    {subscription.category}
                  </p>
                </div>
              </div>
              <div className="flex items-end gap-3 justify-between p-4 rounded-lg bg-background-light dark:bg-background-dark">
                <div className="flex flex-col gap-1">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                    Next billing on
                  </p>
                  <p className="text-slate-800 dark:text-white text-base font-medium leading-normal">
                    {format(new Date(subscription.nextPaymentDate), "MMMM dd, yyyy")}
                  </p>
                </div>
                <div className="flex items-baseline gap-1">
                  <p className="text-slate-800 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
                    ${subscription.price.toFixed(2)}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
                    / month
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-4 bg-transparent px-2 min-h-[64px] py-2">
              <div className="text-slate-500 dark:text-slate-400 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0 size-12">
                <span className="material-symbols-outlined">event</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-slate-800 dark:text-white text-base font-medium leading-normal line-clamp-1">
                  Start Date
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">
                  December 24, 2022
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-transparent px-2 min-h-[64px] py-2">
              <div className="text-slate-500 dark:text-slate-400 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0 size-12">
                <span className="material-symbols-outlined">credit_card</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-slate-800 dark:text-white text-base font-medium leading-normal line-clamp-1">
                  Payment Method
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">
                  Visa **** 1234
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-slate-800 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-2 pb-2 pt-4">
              Payment History
            </h3>
            <div className="flex flex-col">
              {subscription.paymentHistory.map((payment, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 px-2 min-h-[64px] py-2 justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-green-600 dark:text-green-400 flex items-center justify-center rounded-full bg-green-500/10 dark:bg-green-500/10 shrink-0 size-10">
                      <span className="material-symbols-outlined">arrow_downward</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-slate-800 dark:text-white text-base font-medium leading-normal line-clamp-1">
                        Monthly Payment
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">
                        {format(new Date(payment.date), "MMMM dd, yyyy")}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-800 dark:text-white text-base font-medium leading-normal">
                    -${payment.amount.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 p-4 mt-auto sticky bottom-0 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent">
          <Link
            href="/add"
            className="flex items-center justify-center gap-2 w-full h-12 px-6 rounded-lg bg-primary-alt text-white text-base font-bold leading-normal"
          >
            Edit Subscription
          </Link>
          <button className="flex items-center justify-center gap-2 w-full h-12 px-6 rounded-lg bg-primary-alt/20 text-primary-alt text-base font-bold leading-normal">
            Set Reminder
          </button>
          <button className="flex items-center justify-center w-full h-12 px-6 rounded-lg text-red-500 text-base font-bold leading-normal">
            Cancel Subscription
          </button>
        </div>
      </div>
    </div>
  );
}
