"use client";

import React, { createContext, useContext, useState } from "react";

interface ChatInitialValuesProps {
  realtime: boolean;
  setRealtime: React.Dispatch<React.SetStateAction<boolean>>;
  chatRoom: string | undefined;
  setChatRoom: React.Dispatch<React.SetStateAction<string | undefined>>;
  chats: {
    id: string;
    message: string;
    role: "assistant" | "user" | null;
    createdAt: Date;
    seen: boolean;
  }[];
  setChats: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        message: string;
        role: "assistant" | "user" | null;
        createdAt: Date;
        seen: boolean;
      }[]
    >
  >;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Define the initial values for the chat context
const ChatInitialValues: ChatInitialValuesProps = {
  chatRoom: undefined,
  setChatRoom: () => undefined,
  chats: [],
  setChats: () => undefined,
  loading: false,
  setLoading: () => undefined,
  realtime: false,
  setRealtime: () => undefined,
};

// Create a context for the chat values
const chatContext = createContext(ChatInitialValues);
const { Provider } = chatContext;

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize state values using useState with the initial values
  const [chats, setChats] = useState(ChatInitialValues.chats);
  const [loading, setLoading] = useState(ChatInitialValues.loading);
  const [realtime, setRealtime] = useState(ChatInitialValues.realtime);
  const [chatRoom, setChatRoom] = useState(ChatInitialValues.chatRoom);

  // Define the values to be provided by the context
  const values = {
    chatRoom,
    setChatRoom,
    chats,
    setChats,
    loading,
    setLoading,
    realtime,
    setRealtime,
  };

  // Provide the context values to the children components
  return <Provider value={values}>{children}</Provider>;
};

// Create a custom hook to access the chat context values
export const useChatContext = () => {
  const state = useContext(chatContext);
  return state;
};
