import React from "react";
import MenuItem from "./MenuItem";
import { MonitorSmartphone } from "lucide-react";
import DomainMenu from "./DomainMenu";
import { SIDE_BAR_MENU } from "@/constants/menu";
import { Icons } from "@/components/Icons";

interface MinMenuProps {
  onShrink(): void;
  current: string;
  onSignOut(): void;
  domains:
    | {
        id: string;
        name: string;
        icon: string;
      }[]
    | null
    | undefined;
}

const MinMenu = ({ current, domains, onShrink, onSignOut }: MinMenuProps) => {
  return (
    <div className="flex h-full flex-col items-center p-3">
      <span className="animate-fade-in cursor-pointer opacity-0 delay-300 fill-mode-forwards">
        <Icons.menu_logo onClick={onShrink} />
      </span>
      <div className="flex h-full animate-fade-in flex-col justify-between pt-10 opacity-0 delay-300 fill-mode-forwards">
        <div className="flex flex-col">
          {SIDE_BAR_MENU.map((menu, key) => (
            <MenuItem size="min" {...menu} key={key} current={current} />
          ))}
          <DomainMenu min domains={domains} />
        </div>
        <div className="flex flex-col">
          <MenuItem
            size="min"
            label="Sign out"
            icon={<Icons.logout />}
            onSignOut={onSignOut}
          />
          <MenuItem
            size="min"
            label="Mobile App"
            icon={<MonitorSmartphone />}
          />
        </div>
      </div>
    </div>
  );
};

export default MinMenu;
