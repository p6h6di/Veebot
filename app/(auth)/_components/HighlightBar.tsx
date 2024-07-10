"use client";

import React from "react";
import { useAuthContextHook } from "@/context/use-auth-context";
import { cn } from "@/lib/utils";

const HighlightBar = () => {
  const { currentStep } = useAuthContextHook();
  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      <div
        className={cn(
          "rounded-full h-2 col-span-1",
          currentStep === 1 ? "bg-orange-600/60" : "bg-gray-200"
        )}
      />
      <div
        className={cn(
          "rounded-full h-2 col-span-1",
          currentStep === 2 ? "bg-orange-600/60" : "bg-gray-200"
        )}
      />
      <div
        className={cn(
          "rounded-full h-2 col-span-1",
          currentStep === 3 ? "bg-orange-600/60" : "bg-gray-200"
        )}
      />
    </div>
  );
};

export default HighlightBar;
