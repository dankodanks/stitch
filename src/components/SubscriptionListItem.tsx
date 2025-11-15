import { Subscription } from "@/lib/data";
import { format } from "date-fns";

type SubscriptionListItemProps = {
  subscription: Subscription;
  isUpcoming?: boolean;
};

export function SubscriptionListItem({
  subscription,
  isUpcoming = false,
}: SubscriptionListItemProps) {
  const dueDate = new Date(subscription.nextPaymentDate);
  const today = new Date();
  const diffInDays = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 3600 * 24));

  const getDueDateLabel = () => {
    if (diffInDays < 0) return `Overdue by ${Math.abs(diffInDays)} days`;
    if (diffInDays === 0) return "Due today";
    if (diffInDays <= 7) return `Due in ${diffInDays} days`;
    return `Next: ${format(dueDate, "MMM dd")}`;
  };

  return (
    <div className="flex min-h-[72px] items-center gap-4 rounded-xl bg-card-light dark:bg-card-dark p-3">
      <div className="flex flex-1 items-center gap-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
          style={{ backgroundImage: `url("${subscription.logoUrl}")` }}
        />
        <div className="flex flex-col justify-center">
          <p className="text-base font-semibold leading-normal text-text-light-primary dark:text-text-dark-primary line-clamp-1">
            {subscription.name}
          </p>
          <p
            className={`text-sm font-normal leading-normal line-clamp-2 ${
              isUpcoming && diffInDays <= 7 ? "text-amber-600 dark:text-amber-500" : "text-text-light-secondary dark:text-text-dark-secondary"
            }`}
          >
            {isUpcoming ? getDueDateLabel() : `Next: ${format(dueDate, "MMM dd")}`}
          </p>
        </div>
      </div>
      <div className="shrink-0">
        <p className="text-base font-medium leading-normal text-text-light-primary dark:text-text-dark-primary">
          ${subscription.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
