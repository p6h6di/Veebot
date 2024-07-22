"use client";

import { useThemeMode } from "@/hooks/use-settings";
import React from "react";
import SectionLabel from "./SectionLabel";
import { cn } from "@/lib/utils";
import { SystemMode } from "../theme-placeholder/SystemMode";
import { DarkMode } from "../theme-placeholder/DarkMode";
import { LightMode } from "../theme-placeholder/LightMode";

const DarkModeToggle = () => {
  const { setTheme, theme } = useThemeMode();
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
      <div className="lg:col-span-1">
        <SectionLabel
          label="Interface Theme"
          message="Select  or customize your UI theme"
        />
      </div>

      <div className="flex flex-col items-start gap-5 lg:col-span-4 lg:flex-row">
        <div
          className={cn(
            "rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent",
            theme === "system" && "border-orange-300"
          )}
          onClick={() => setTheme("system")}
        >
          <SystemMode />
        </div>

        <div
          className={cn(
            "rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent",
            theme === "dark" && "border-orange-300"
          )}
          onClick={() => setTheme("dark")}
        >
          <DarkMode />
        </div>

        <div
          className={cn(
            "rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent",
            theme === "light" && "border-orange-300"
          )}
          onClick={() => setTheme("light")}
        >
          <LightMode />
        </div>
      </div>
    </div>
  );
};

export default DarkModeToggle;
