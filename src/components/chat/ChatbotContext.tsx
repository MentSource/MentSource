import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, RECIPIENT_EMAIL } from "@/config/emailjs";

type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
};

type ChatbotContextValue = {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  openDonateChat: () => void;
  messages: ChatMessage[];
  sendDonationEmail: (amountText: string) => Promise<void>;
};

const ChatbotContext = createContext<ChatbotContextValue | null>(null);

function uid() {
  return Math.random().toString(36).slice(2);
}

export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const welcomeText = "Welcome to MentSource. How much would you like to donate?";
  const followupText = "Send us an email: mentsource_1@gmail.com";
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: uid(), role: "bot", text: welcomeText },
  ]);

  useEffect(() => {
    if (!isOpen) return;
    const t = window.setTimeout(() => {
      setIsOpen(false);
      setMessages([{ id: uid(), role: "bot", text: welcomeText }]);
    }, 10 * 60 * 1000);
    return () => window.clearTimeout(t);
  }, [isOpen, welcomeText]);

  const openChat = useCallback(() => {
    setIsOpen(true);
    setMessages([{ id: uid(), role: "bot", text: welcomeText }]);
  }, [welcomeText]);
  const closeChat = useCallback(() => setIsOpen(false), []);

  const openDonateChat = useCallback(() => {
    setIsOpen(true);
    setMessages([{ id: uid(), role: "bot", text: welcomeText }]);
  }, [welcomeText]);

  const sendDonationEmail = useCallback(
    async (amountText: string) => {
      const trimmed = amountText.trim();
      if (!trimmed) return;

      setMessages((prev) => [...prev, { id: uid(), role: "user", text: trimmed }]);

      // If EmailJS config is missing, fall back to instructing email.
      if (!EMAILJS_CONFIG?.SERVICE_ID || !EMAILJS_CONFIG?.TEMPLATE_ID || !EMAILJS_CONFIG?.PUBLIC_KEY) {
        setMessages((prev) => [...prev, { id: uid(), role: "bot", text: followupText }]);
        return;
      }

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          to_email: RECIPIENT_EMAIL,
          subject: "MentSource Donation",
          message: `${welcomeText}\n\nAmount: ${trimmed}`,
        },
        { publicKey: EMAILJS_CONFIG.PUBLIC_KEY }
      );

      setMessages((prev) => [
        ...prev,
        { id: uid(), role: "bot", text: "Thanks! Your message has been sent." },
      ]);
    },
    [followupText, welcomeText]
  );

  const value = useMemo<ChatbotContextValue>(
    () => ({ isOpen, openChat, closeChat, openDonateChat, messages, sendDonationEmail }),
    [isOpen, openChat, closeChat, openDonateChat, messages, sendDonationEmail]
  );

  return <ChatbotContext.Provider value={value}>{children}</ChatbotContext.Provider>;
}

export function useChatbot() {
  const ctx = useContext(ChatbotContext);
  if (!ctx) throw new Error("useChatbot must be used within ChatbotProvider");
  return ctx;
}

