"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Globe, BookOpen } from "lucide-react"
import { ChatMessage } from "./chat-message"
import { TypingIndicator } from "./typing-indicator"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

type Language = "en" | "ar"

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [language, setLanguage] = useState<Language>("en")
  const [sessionId] = useState(() => crypto.randomUUID())
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: crypto.randomUUID(),
      content: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      const response = await fetch("https://n8n.180d.tr/webhook/rag-hadith", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
          sessionId: sessionId,
          language: language,
        }),
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await response.json()
      const aiMessage: Message = {
        id: crypto.randomUUID(),
        content:
          data.output ||
          (language === "ar"
            ? "أعتذر، لم أتمكن من معالجة طلبك في هذا الوقت."
            : "I apologize, but I could not process your request at this time."),
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error("Error sending message:", error)
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        content:
          language === "ar"
            ? "أعتذر، واجهت خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى."
            : "I apologize, but I encountered an error while processing your request. Please try again.",
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"))
  }

  const getPlaceholder = () => {
    return language === "ar" ? "اسأل عن حديث شريف..." : "Ask about a Hadith..."
  }

  const getWelcomeText = () => {
    if (language === "ar") {
      return {
        title: "مرحباً بك في نور الحديث",
        subtitle: "ابدأ رحلتك في طلب العلم. اسألني عن الأحاديث الصحيحة والتعاليم الإسلامية.",
        greeting: "أهلاً وسهلاً بك",
      }
    }
    return {
      title: "Welcome to نور الحديث",
      subtitle: "Begin your journey of knowledge. Ask me about authentic Hadiths and Islamic teachings.",
      greeting: "Ready to help!",
    }
  }

  const welcomeText = getWelcomeText()

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden animate-slide-up">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-green-800 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse-slow">
              <BookOpen className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <h1 className="heading-font text-lg font-bold">نور الحديث</h1>
              <p className="body-font text-sm opacity-90">
                {language === "ar" ? "مساعد الذكي للأحاديث" : "Hadith AI Assistant"}
              </p>
            </div>
          </div>

          {/* Language Toggle */}
          <Button
            onClick={toggleLanguage}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 transition-all duration-300"
          >
            <Globe className="w-4 h-4 mr-2" />
            {language === "ar" ? "EN" : "عربي"}
          </Button>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-amber-50/30 to-white">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-bounce-slow">
              <BookOpen className="w-8 h-8 text-green-700" />
            </div>
            <div className="space-y-2">
              <h2
                className={`heading-font text-xl font-semibold text-green-800 ${language === "ar" ? "arabic-text" : ""}`}
              >
                {welcomeText.title}
              </h2>
              <p
                className={`body-font text-green-600 max-w-md leading-relaxed ${language === "ar" ? "arabic-text" : ""}`}
              >
                {welcomeText.subtitle}
              </p>
            </div>
          </div>
        )}

        {messages.map((message, index) => (
          <div key={message.id} className="animate-message-appear" style={{ animationDelay: `${index * 0.1}s` }}>
            <ChatMessage message={message} language={language} />
          </div>
        ))}

        {isLoading && <TypingIndicator language={language} />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-green-100 bg-gradient-to-r from-green-50 to-amber-50 p-4">
        <div className="flex gap-3">
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={getPlaceholder()}
            className={`flex-1 body-font border-green-200 focus:border-green-400 focus:ring-green-400/20 transition-all duration-300 ${language === "ar" ? "text-right" : ""}`}
            disabled={isLoading}
            dir={language === "ar" ? "rtl" : "ltr"}
          />
          <Button
            onClick={sendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
