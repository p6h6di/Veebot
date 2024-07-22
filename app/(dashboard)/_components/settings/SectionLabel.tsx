"use client";

import React from "react";

interface SectionLabelProps {
  label: string;
  message: string;
}

const SectionLabel = ({ label, message }: SectionLabelProps) => {
  return (
    <div className="space-y-1.5">
      <p className="text-lg font-medium">{label}</p>
      <p className="text-sm font-normal text-muted-foreground">{message}</p>
    </div>
  );
};

export default SectionLabel;
