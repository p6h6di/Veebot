"use server";

import { prisma } from "@/prisma/prisma";

/**
 * Toggles the realtime mode of a chat room.
 * @param id - The ID of the chat room.
 * @param state - The new state of the realtime mode (true for enabled, false for disabled).
 */
export const onToggleRealtime = async (id: string, state: boolean) => {
  try {
    const chatRoom = await prisma.chatRoom.update({
      where: {
        id,
      },
      data: {
        live: state,
      },
      select: {
        id: true,
        live: true,
      },
    });

    if (chatRoom) {
      return {
        message: chatRoom.live
          ? "Realtime mode enabled"
          : "Realtime mode disabled",
        chatRoom,
        status: 201,
      };
    }
  } catch (error) {
    console.log("ON_TOGGLE_REALTIME:", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

/**
 * Retrieves the conversation mode for a chat room identified by the given ID.
 */
export const onGetConversationMode = async (id: string) => {
  try {
    const mode = await prisma.chatRoom.findUnique({
      where: {
        id,
      },
      select: {
        live: true,
      },
    });
    return { mode };
  } catch (error) {
    console.log("ON_CONVERSATION_MODE:", error);
    return { status: 500, error: "Internal Server Error" };
  }
};
