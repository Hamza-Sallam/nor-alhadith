import { ChatInterface } from "@/components/chat-interface"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold text-green-800 mb-2">نور الحديث</h1>
          <p className="font-dm-sans text-lg text-green-700">Your AI Assistant for Authentic Hadith Knowledge</p>
        </div>

        {/* Main Content - Balanced Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Character Section */}
            <div className="lg:col-span-1 flex flex-col items-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-amber-100 to-orange-200 p-4 shadow-lg animate-pulse-slow">
                  <img
                    src="/images/character.png"
                    alt="نور الحديث Assistant"
                    className="w-full h-full object-contain animate-float"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md border-2 border-green-200">
                  <p className="text-sm font-dm-sans text-green-700 font-medium">Ready to help!</p>
                </div>
              </div>

              {/* Welcome Message */}
              <div className="mt-8 text-center max-w-sm">
                <h3 className="font-space-grotesk text-xl font-semibold text-green-800 mb-2">Welcome to نور الحديث</h3>
                <p className="font-dm-sans text-green-600 text-sm leading-relaxed">
                  Ask me about authentic Hadiths, Islamic teachings, and guidance from the Sunnah. I'm here to help you
                  learn and grow in your faith.
                </p>
              </div>
            </div>

            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <ChatInterface />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
