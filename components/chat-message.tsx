import { formatDistanceToNow } from "date-fns"
import { ar } from "date-fns/locale"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

interface ChatMessageProps {
  message: Message
  language?: "en" | "ar"
}

export function ChatMessage({ message, language = "en" }: ChatMessageProps) {
  const isUser = message.sender === "user"

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} animate-bubble-pop`}>
      <div className={`max-w-[85%] md:max-w-[75%] ${isUser ? "order-2" : "order-1"}`}>
        <div
          className={`
            rounded-2xl px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md transform hover:scale-[1.02]
            ${
              isUser
                ? "bg-gradient-to-br from-green-500 to-green-600 text-white ml-auto animate-slide-in-right"
                : "bg-white text-gray-800 border border-green-100 animate-slide-in-left"
            }
          `}
        >
          {!isUser && (
            <div className="w-1 h-full bg-gradient-to-b from-amber-400 to-amber-500 absolute left-0 top-0 rounded-l-2xl"></div>
          )}
          <div
            className={`body-font text-sm leading-relaxed whitespace-pre-wrap ${language === "ar" ? "arabic-text" : ""}`}
          >
            {message.content}
          </div>
        </div>
        <div
          className={`text-xs text-gray-500 mt-2 px-1 ${isUser ? "text-right" : "text-left"} ${language === "ar" ? "arabic-text" : ""}`}
        >
          {formatDistanceToNow(message.timestamp, {
            addSuffix: true,
            locale: language === "ar" ? ar : undefined,
          })}
        </div>
      </div>
    </div>
  )
}
