import React from "react";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();
  if (user) {
    return redirect("/");
  }
  return (
    <div className="flex h-screen w-full items-center justify-center">
      {children}
    </div>
  );
}
