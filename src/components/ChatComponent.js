'use client'
import { useState, useEffect } from 'react'

export default function ChatComponent() {
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)

  const conversationFlow = [
    { type: "user", text: "Hello! What is CLATians?" },
    { type: "bot", text: "CLATians is one of the best CLAT coaching institutes in Patna..." },
    { type: "user", text: "Hello! What is CLATians?" },
                                    { type: "bot", text: "CLATians is one of the best CLAT coaching institutes in Patna, providing expert guidance for CLAT, AILET, CUET, AIL, and other law entrance exams." },

                                    { type: "user", text: "What courses do you offer?" },
                                    { type: "bot", text: "We offer three structured courses: CLAT Target Batch, CLAT Foundation Batch, and CLAT Crash Course to help students crack top law exams." },

                                    { type: "user", text: "How do your mentors help students?" },
                                    { type: "bot", text: "Our faculty members are experienced professionals who mentor students with personalized guidance, solving queries instantly to ensure success in exams." },

                                    { type: "user", text: "How competitive is the CLAT exam?" },
                                    { type: "bot", text: "The CLAT exam competition increases every year, so we have designed a structured course framework to help our students stay ahead of their competitors." },

                                    { type: "user", text: "How can I join CLATians?" },
                                    { type: "bot", text: "You can visit our official website or contact us directly for admission details. We will guide you through the enrollment process." },
  ]

  useEffect(() => {
    let index = 0
    
    const showNextMessage = () => {
      if (index < conversationFlow.length) {
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          setMessages(prev => [...prev, conversationFlow[index]])
          index++
          setTimeout(showNextMessage, 1000)
        }, 1500)
      }
    }

    showNextMessage()
  }, [])

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white p-4 text-center font-bold">
        💬 Chat with CLATians
      </div>

      <div className="h-[350px] overflow-y-auto p-4 space-y-4">
        {conversationFlow.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2 ${
              msg.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.type === 'bot' && (
              <div className="w-8 h-8 rounded-full bg-gray-200" />
            )}
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                msg.type === 'user'
                  ? 'bg-red-700 text-white'
                  : 'bg-gray-100'
              }`}
            >
              {msg.text}
            </div>
            {msg.type === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gray-200" />
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200" />
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 