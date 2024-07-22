"use client";

import React from "react";
import BreadCrumb from "./BreadCrumb";
import { Star, Trash } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "@/context/use-sidebar";
import Loader from "@/components/Loader";
import { Switch } from "@/components/ui/switch";

const InfoBar = () => {
  const { chatRoom, loading, onActivateRealtime, page, realtime } =
    useSidebar();

  return (
    <div className="mb-8 flex w-full items-center justify-between border-b py-1">
      <div className="flex flex-col space-y-3">
        <BreadCrumb />
        <h2 className="text-3xl font-medium">{page}</h2>
      </div>
      {page === "conversation" && chatRoom && (
        <Loader loading={loading} className="inline p-0">
          <Switch
            defaultChecked={realtime}
            onClick={(e) => onActivateRealtime(e)}
            className="data-[state=checked]:bg-orange-500 data-[state=unchecked]:bg-primary"
          />
        </Loader>
      )}
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
