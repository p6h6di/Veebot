import React from "react";
import { Spinner } from "./ui/spinner";
import { cn } from "@/lib/utils";

interface LoaderProps {
  loading: boolean;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}
const Loader = ({ children, loading, className, noPadding }: LoaderProps) => {
  return loading ? (
    <div className={cn(className || "flex w-full justify-center py-5")}>
      <Spinner noPadding={noPadding} />
    </div>
  ) : (
    children
  );
};

export default Loader;
