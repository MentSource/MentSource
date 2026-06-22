import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useChatbot } from "./ChatbotContext";

export function ChatbotWidget() {
  const { isOpen, openChat, closeChat, messages, sendDonationEmail } = useChatbot();
  const [draft, setDraft] = useState("");
  const [isSending, setIsSending] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      {!isOpen ? (
        <Button
          type="button"
          onClick={openChat}
          className="h-12 w-12 rounded-full p-0 shadow-lg"
          aria-label="Open chat"
        >
          <MessageCircle className="h-5 w-5" />
        </Button>
      ) : (
        <div className="w-[320px] sm:w-[360px] rounded-2xl border border-border/60 bg-background shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="min-w-0">
              <div className="font-semibold text-foreground leading-tight">MentSource Chat</div>
              <div className="text-xs text-muted-foreground">We reply instantly</div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={closeChat}
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="max-h-[320px] overflow-auto px-4 py-3 space-y-2">
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "text-sm leading-relaxed px-3 py-2 rounded-2xl w-fit max-w-[85%]",
                  m.role === "user"
                    ? "ml-auto bg-primary-dark text-primary-foreground rounded-br-md"
                    : "bg-muted text-foreground rounded-bl-md"
                )}
              >
                {m.text}
              </div>
            ))}
          </div>

          <form
            className="p-3 border-t border-border/60 space-y-2"
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSending(true);
              try {
                await sendDonationEmail(draft);
              } finally {
                setIsSending(false);
              }
              setDraft("");
            }}
          >
            <Input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Enter amount…"
              inputMode="decimal"
            />
            <Button type="submit" className="w-full" disabled={isSending}>
              {isSending ? "Sending..." : "Send"}
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}

