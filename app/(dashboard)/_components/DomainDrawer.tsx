/* eslint-disable no-undef */
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";

interface DomainDrawerProps {
  onOpen: JSX.Element;
  children: React.ReactNode;
  title: string;
  description: string;
}

const DomainDrawer = ({
  children,
  description,
  onOpen,
  title,
}: DomainDrawerProps) => {
  return (
    <Drawer>
      <DrawerTrigger>{onOpen}</DrawerTrigger>
      <DrawerContent>
        <div className="container flex flex-col items-center gap-2 pb-10">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DomainDrawer;
