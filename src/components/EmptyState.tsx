type EmptyStateProps = {
  onAddSubscription: () => void;
};

export function EmptyState({ onAddSubscription }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 mt-10 rounded-xl bg-gray-100 dark:bg-gray-800/50">
      <span className="material-symbols-outlined text-5xl text-gray-400 dark:text-gray-500 mb-4">
        search_off
      </span>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
        No Subscriptions Here
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mt-1 max-w-xs">
        Try selecting another category or add a new subscription to get started.
      </p>
      <button
        className="mt-6 flex h-10 items-center justify-center gap-x-2 rounded-lg bg-primary px-4 text-white"
        onClick={onAddSubscription}
      >
        <p className="text-sm font-semibold leading-normal">Add Subscription</p>
      </button>
    </div>
  );
}
