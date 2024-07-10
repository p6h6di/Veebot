import React from "react";
import { Spinner } from "./ui/spinner";

interface LoaderProps {
  loading: boolean;
  children: React.ReactNode;
}
const Loader = ({ children, loading }: LoaderProps) => {
  return loading ? (
    <div className="flex w-full justify-center py-5">
      <Spinner />
    </div>
  ) : (
    children
  );
};

export default Loader;
