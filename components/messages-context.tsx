"use client";
import {createContext, useContext, ReactNode} from "react";

const MessagesCtx = createContext<Record<string,string>>({});

export function MessagesProvider({messages, children}:{messages:Record<string,string>, children:ReactNode}) {
  return <MessagesCtx.Provider value={messages}>{children}</MessagesCtx.Provider>;
}

export function useMsg() {
  return useContext(MessagesCtx);
}
