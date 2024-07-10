"use client";

import { Label } from "@/components/ui/label";
import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface UserTypeCardProps {
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>;
  value: string;
  title: string;
  text: string;
}

const UserTypeCard = ({
  register,
  setUserType,
  text,
  title,
  userType,
  value,
}: UserTypeCardProps) => {
  return (
    <Label htmlFor={value}>
      <div
        className={cn(
          "relative my-4 flex w-full cursor-pointer items-center space-x-4 rounded-md border p-4",
          userType === value && "border-orange-400/60"
        )}
      >
        <div
          className={cn(
            "flex size-12 items-center justify-center rounded-md border",
            userType === value && "border-orange-400/60"
          )}
        >
          <User
            className={cn(
              "size-6 text-primary",
              userType === value && "text-orange-600/60"
            )}
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-primary antialiased">
            {title}
          </h3>
          <p className="text-xs font-medium text-muted-foreground">{text}</p>
        </div>
        <div
          className={cn(
            "absolute right-3 top-3 size-4 rounded-full",
            userType === value ? "bg-orange-600/60" : "bg-transparent"
          )}
        >
          <Input
            {...register("type", {
              onChange: (e) => setUserType(e.target.value),
            })}
            value={value}
            id={value}
            type="radio"
            className="hidden"
          />
        </div>
      </div>
    </Label>
  );
};

export default UserTypeCard;
