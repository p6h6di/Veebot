"use client";

import React from "react";
import BreadCrumb from "./BreadCrumb";
import { Star, Trash } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const InfoBar = () => {
  return (
    <div className="mb-8 flex w-full items-center justify-between border-b py-1">
      <BreadCrumb />
      <div className="flex flex-1 justify-end ">
        <div className="flex items-center space-x-4 rounded-md border px-4 py-2">
          <Trash />
          <Star />
        </div>
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default InfoBar;
