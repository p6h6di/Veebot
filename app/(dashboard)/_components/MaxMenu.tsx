"use client";

import React from "react";
import { SIDE_BAR_MENU } from "@/constants/menu";
import { MonitorSmartphone } from "lucide-react";
import MenuItem from "./MenuItem";
import DomainMenu from "./DomainMenu";
import { Icons } from "@/components/Icons";

interface MaxMenuProps {
  onExpand(): void;
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

const MaxMenu = ({ current, domains, onExpand, onSignOut }: MaxMenuProps) => {
  return (
    <div className="flex h-full flex-col px-4 py-3">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">LOG</h1>
        <Icons.menu_logo
          className="animate-fade-in cursor-pointer opacity-0 delay-300 fill-mode-forwards"
          onClick={onExpand}
        />
      </div>
      <div className="flex h-full animate-fade-in flex-col justify-between pt-10 opacity-0 delay-300 fill-mode-forwards">
        <div className="flex flex-col">
          <p className="mb-3 text-xs font-medium text-muted-foreground">MENU</p>

          {SIDE_BAR_MENU.map((menu, key: React.Key | null | undefined) => (
            <MenuItem size="max" key={key} current={current} {...menu} />
          ))}
          <DomainMenu domains={domains} />
        </div>
        <div className="flex flex-col">
          <p className="mb-3 text-xs font-medium text-muted-foreground">
            OPTIONS
          </p>
          <MenuItem
            size="max"
            label="Sign out"
            icon={<Icons.logout />}
            onSignOut={onSignOut}
          />
          <MenuItem
            size="max"
            label="Mobile App"
            icon={<MonitorSmartphone />}
          />
        </div>
      </div>
    </div>
  );
};

export default MaxMenu;
