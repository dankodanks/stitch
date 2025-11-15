type FloatingActionButtonProps = {
  onClick: () => void;
};

export function FloatingActionButton({ onClick }: FloatingActionButtonProps) {
  return (
    <div className="fixed bottom-6 right-6">
      <button
        className="flex size-14 items-center justify-center rounded-full bg-primary-alt text-white shadow-lg"
        onClick={onClick}
      >
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
}
