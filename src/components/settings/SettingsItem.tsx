import { ReactNode } from "react";

type SettingsItemProps = {
  icon: string;
  iconBgColor: string;
  label: string;
  action: ReactNode;
};

export function SettingsItem({ icon, iconBgColor, label, action }: SettingsItemProps) {
  return (
    <div className="flex items-center gap-4 min-h-[56px] px-4 py-2 justify-between">
      <div className="flex items-center gap-4">
        <div
          className="text-white flex items-center justify-center rounded-lg shrink-0 size-8"
          style={{ backgroundColor: iconBgColor }}
        >
          <span className="material-symbols-outlined text-base">{icon}</span>
        </div>
        <p className="text-text-light-primary dark:text-text-dark-primary text-base font-normal leading-normal">
          {label}
        </p>
      </div>
      <div className="shrink-0 flex items-center gap-2">{action}</div>
    </div>
  );
}
