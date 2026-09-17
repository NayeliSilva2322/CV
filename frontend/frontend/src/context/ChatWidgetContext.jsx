import { createContext, useContext, useMemo, useState } from "react";

const ChatWidgetContext = createContext(null);

export function ChatWidgetProvider({ children }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ open, setOpen }), [open]);
  return <ChatWidgetContext.Provider value={value}>{children}</ChatWidgetContext.Provider>;
}

export function useChatWidget() {
  const ctx = useContext(ChatWidgetContext);
  if (!ctx) {
    throw new Error("useChatWidget debe usarse dentro de <ChatWidgetProvider>");
  }
  return ctx;
}
