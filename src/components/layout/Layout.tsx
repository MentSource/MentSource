import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ChatbotProvider } from "@/components/chat/ChatbotContext";
import { ChatbotWidget } from "@/components/chat/ChatbotWidget";

export function Layout() {
  return (
    <ChatbotProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-10">
          <Outlet />
        </main>
        <Footer />
        <ChatbotWidget />
      </div>
    </ChatbotProvider>
  );
}
