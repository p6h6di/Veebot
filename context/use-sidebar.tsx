/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useChatContext } from "./user-chat-context";
import toast from "react-hot-toast";
import {
  onGetConversationMode,
  onToggleRealtime,
} from "@/actions/conversations";
import { useClerk } from "@clerk/nextjs";

export const useSidebar = () => {
  const [expand, setExpand] = useState<boolean | undefined>(undefined);
  const router = useRouter();
  const pathname = usePathname();
  const [realtime, setRealtime] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { chatRoom } = useChatContext();

  const onActivateRealtime = async (e: any) => {
    try {
      const realtime = await onToggleRealtime(
        chatRoom!,
        e.target.ariaChecked !== "true"
      );
      if (realtime) {
        setRealtime(realtime.chatRoom?.live!);
        toast.success(realtime.message!);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const onGetCurrentMode = async () => {
    setLoading(true);
    const mode = await onGetConversationMode(chatRoom!);
    if (mode) {
      setRealtime(mode.mode?.live!);
      setLoading(true);
    }
  };

  useEffect(() => {
    if (chatRoom) {
      onGetCurrentMode();
    }
  }, [chatRoom]);

  const page = pathname.split("/").pop();
  const { signOut } = useClerk();

  const onSignOut = () => signOut(() => router.push("/"));
  const onExpand = () => setExpand((prev) => !prev);

  return {
    expand,
    onExpand,
    page,
    onSignOut,
    realtime,
    onActivateRealtime,
    loading,
    chatRoom,
  };
};
