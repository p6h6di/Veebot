import React, { JSX } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface TabsMenuProps {
  triggers: {
    label: string;
    icon?: JSX.Element;
  }[];
  children: React.ReactNode;
  className?: string;
  button?: JSX.Element;
}

const TabsMenu = ({ children, triggers, button, className }: TabsMenuProps) => {
  return (
    <Tabs defaultValue={triggers[0].label} className="w-full">
      <TabsList className={cn("pr-5", className)}>
        {triggers.map((trigger, key) => (
          <TabsTrigger
            key={key}
            value={trigger.label}
            className="flex gap-2 font-semibold capitalize"
          >
            {trigger.icon && trigger.icon}
            {trigger.label}
          </TabsTrigger>
        ))}
        {button}
      </TabsList>
      {children}
    </Tabs>
  );
};

export default TabsMenu;
