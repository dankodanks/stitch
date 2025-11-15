type FilterChipProps = {
  label: string;
  isActive?: boolean;
  onClick: () => void;
};

export function FilterChip({ label, isActive = false, onClick }: FilterChipProps) {
  return (
    <button
      className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 text-sm font-medium leading-normal ${
        isActive
          ? "bg-primary text-white"
          : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
