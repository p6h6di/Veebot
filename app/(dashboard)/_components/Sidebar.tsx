"use client";

import React from "react";
import { useSidebar } from "@/context/use-sidebar";
import { cn } from "@/lib/utils";
import MaxMenu from "./MaxMenu";
import MinMenu from "./MinMenu";

interface SidebarProps {
  domains:
    | {
        id: string;
        name: string;
        icon: string;
      }[]
    | null
    | undefined;
}

const Sidebar = ({ domains }: SidebarProps) => {
  const { expand, onExpand, onSignOut, page } = useSidebar();
  return (
    <div
      className={cn(
        "bg-muted h-full w-[60px] fixed md:relative fill-mode-forwards",
        expand === undefined && "",
        expand === true
          ? "animate-open-sidebar"
          : expand === false && "animate-close-sidebar"
      )}
    >
      {expand ? (
        <MaxMenu
          domains={domains}
          current={page!}
          onExpand={onExpand}
          onSignOut={onSignOut}
        />
      ) : (
        <MinMenu
          domains={domains}
          current={page!}
          onShrink={onExpand}
          onSignOut={onSignOut}
        />
      )}
    </div>
  );
};

export default Sidebar;
