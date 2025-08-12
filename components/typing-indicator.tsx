interface TypingIndicatorProps {
  language?: "en" | "ar"
}

export function TypingIndicator({ language = "en" }: TypingIndicatorProps) {
  const typingText = language === "ar" ? "نور الحديث يفكر..." : "نور الحديث is thinking..."

  return (
    <div className="flex justify-start animate-fade-in">
      <div className="max-w-[85%] md:max-w-[75%]">
        <div className="bg-white text-gray-800 border border-green-100 rounded-2xl px-4 py-3 shadow-sm animate-pulse-gentle">
          <div className="w-1 h-full bg-gradient-to-b from-amber-400 to-amber-500 absolute left-0 top-0 rounded-l-2xl"></div>
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce-dot"></div>
              <div
                className="w-2 h-2 bg-green-500 rounded-full animate-bounce-dot"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-green-500 rounded-full animate-bounce-dot"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
            <span className={`body-font text-sm text-gray-600 ${language === "ar" ? "arabic-text" : ""}`}>
              {typingText}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
