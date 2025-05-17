'use client'
import { useState, useEffect, useRef } from 'react'
import { getFirestore, collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore'
import { app } from '@/firebase'

// Knowledge base for the chatbot
const knowledgeBase = {
  "clat": {
    keywords: ["clat", "common law admission test", "law entrance"],
    response: "CLAT (Common Law Admission Test) is a centralized national level entrance test for admissions to 22+ National Law Universities (NLUs) in India. At CLATians, we provide comprehensive coaching for CLAT with specialized faculty, study materials, and mock tests."
  },
  "clatians": {
    keywords: ["clatians", "institute", "coaching", "about"],
    response: "CLATians is one of the best CLAT coaching institutes in Patna. We specialize in preparing students for law entrance exams like CLAT, AILET, and other law entrance tests. Our expert faculty, comprehensive study materials, and personalized coaching have helped numerous students secure admissions in top NLUs."
  },
  "courses": {
    keywords: ["courses", "programs", "coaching", "online", "offline"],
    response: "CLATians offers various courses including: 1) CLAT Preparation, 2) CLAT+AILET Combined Course, 3) CUET(UG) Preparation, 4) CUET(PG) Preparation, 5) OLET Preparation, and 6) Booster Courses. We have both online and offline modes available to suit your learning preferences."
  },
  "faculty": {
    keywords: ["faculty", "teachers", "professors", "experts"],
    response: "CLATians has a team of experienced faculty members who are experts in their respective fields. Our teachers have years of experience in training students for law entrance exams and many are alumni of top NLUs themselves."
  },
  "fees": {
    keywords: ["fees", "cost", "price", "charges", "payment"],
    response: "The fee structure at CLATians varies based on the course you choose. We offer flexible payment options and scholarships for deserving students. For detailed fee information, please visit our admission page or contact our office directly."
  },
  "location": {
    keywords: ["location", "address", "where", "place", "center"],
    response: "CLATians is located at: 2nd Floor, Gangotri Palace, Boring Rd, near Sumati Palace, Nageshwar Colony, Kidwaipuri, Patna, Bihar 800001. We're conveniently located in the heart of Patna."
  },
  "study material": {
    keywords: ["study", "material", "books", "resources", "notes"],
    response: "CLATians provides comprehensive study materials including subject-wise notes, practice questions, previous year papers, and mock tests. Our study materials are regularly updated to reflect the latest exam patterns and trends."
  },
  "mock tests": {
    keywords: ["mock", "test", "practice", "exam", "series"],
    response: "We offer extensive mock test series that simulate the actual CLAT exam environment. Our tests are designed by experts and come with detailed analysis and performance tracking to help you improve systematically."
  },
  "success stories": {
    keywords: ["success", "stories", "results", "toppers", "selections"],
    response: "CLATians has a proven track record of success with many of our students securing admissions in top NLUs including NLSIU Bangalore, NALSAR Hyderabad, and NLU Delhi. Our comprehensive approach to CLAT preparation has consistently delivered excellent results."
  },
  "admission": {
    keywords: ["admission", "enroll", "join", "register", "apply"],
    response: "To join CLATians, you can visit our admission page on the website, call our admission helpline, or visit our center in person. We have a simple admission process and our counselors will guide you through course selection based on your needs."
  },
  "scholarship": {
    keywords: ["scholarship", "financial aid", "discount", "merit"],
    response: "CLATians offers merit-based scholarships to deserving students. The scholarship amount varies based on your performance in our scholarship test. We believe that financial constraints should not be a barrier to quality education."
  },
  "contact": {
    keywords: ["contact", "reach", "call", "email", "phone"],
    response: "You can contact CLATians through our website contact form, email us at info@clatians.in, or call us at our helpline number. Our team is available to answer your queries from Monday to Saturday, 9 AM to 6 PM."
  },
  "default": {
    response: "Thank you for your message. For more specific information about our CLAT coaching programs, study materials, or admission process, please visit our website or contact our admission team directly."
  }
};

const findBestMatch = (userQuery) => {
  const query = userQuery.toLowerCase();
  let bestMatch = "default";
  let highestMatchCount = 0;
  
  for (const [topic, data] of Object.entries(knowledgeBase)) {
    if (topic === "default") continue;
    
    const matchCount = data.keywords.filter(keyword => 
      query.includes(keyword.toLowerCase())
    ).length;
    
    if (matchCount > highestMatchCount) {
      highestMatchCount = matchCount;
      bestMatch = topic;
    }
  }
  
  return highestMatchCount > 0 ? knowledgeBase[bestMatch].response : knowledgeBase.default.response;
};

const ChatUI = ({ 
  messages, 
  isTyping, 
  userInput, 
  handleInputChange, 
  handleSubmit,
  messagesEndRef,
  chatContainerRef
}) => (
  <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white p-4 text-center font-bold">
      💬 Chat with CLATians
    </div>

    <div 
      ref={chatContainerRef}
      className="h-[350px] overflow-y-auto p-4 space-y-4" 
      id="chat-messages"
    >
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`flex items-center gap-2 ${
            msg.type === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          {msg.type === 'bot' && (
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <img src="https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg" alt="CLATians" className="w-full h-full object-cover" />
            </div>
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
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <i className="bi bi-person-fill text-gray-500"></i>
            </div>
          )}
        </div>
      ))}

      {isTyping && (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img src="/images/logo.png" alt="CLATians" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>

    <div className="border-t border-gray-200 p-4 bg-white">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white rounded-full hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          <i className="bi bi-send-fill"></i>
        </button>
      </form>
    </div>
  </div>
)

export default function ChatComponent() {
  const [mounted, setMounted] = useState(false)
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [sessionId, setSessionId] = useState('')
  const messagesEndRef = useRef(null)
  const chatContainerRef = useRef(null)

  const initialConversation = [
    { 
      type: "bot", 
      text: "👋 Hi there! I'm the CLATians virtual assistant. How can I help you with your law entrance exam preparation today?" 
    }
  ]

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTop = scrollHeight - clientHeight;
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  useEffect(() => {
    setMounted(true)
    
    // Generate a unique session ID
    const newSessionId = 'chat_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
    setSessionId(newSessionId)
    
    // Initialize with welcome message
    setMessages(initialConversation)

    return () => {
      // Cleanup
      setIsTyping(false)
      setMessages([])
    }
  }, [])

  const saveConversationToFirebase = async (userMessage, botResponse) => {
    try {
      const db = getFirestore(app)
      await addDoc(collection(db, "chatConversations"), {
        sessionId: sessionId,
        userMessage: userMessage,
        botResponse: botResponse,
        timestamp: serverTimestamp()
      })
    } catch (error) {
      console.error("Error saving conversation:", error)
    }
  }

  const simulateTyping = (text, callback) => {
    setIsTyping(true)
    
    // Simulate typing time based on message length
    const typingTime = Math.min(1000 + text.length * 10, 3000)
    
    setTimeout(() => {
      setIsTyping(false)
      callback()
    }, typingTime)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userInput.trim()) {
      const userMessage = userInput.trim()
      
      // Add user message to chat
      setMessages(prev => [...prev, { type: 'user', text: userMessage }])
      setUserInput('')
      
      // Get response based on user query
      const botResponse = findBestMatch(userMessage)
      
      // Simulate bot typing
      simulateTyping(botResponse, () => {
        // Add bot response to chat
        setMessages(prev => [...prev, { type: 'bot', text: botResponse }])
        
        // Save conversation to Firebase
        saveConversationToFirebase(userMessage, botResponse)
      })
    }
  }

  if (!mounted) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white p-4 text-center font-bold">
          💬 Chat with CLATians
        </div>
        <div className="h-[350px]"></div>
      </div>
    )
  }

  return (
    <ChatUI
      messages={messages}
      isTyping={isTyping}
      userInput={userInput}
      handleInputChange={(e) => setUserInput(e.target.value)}
      handleSubmit={handleSubmit}
      messagesEndRef={messagesEndRef}
      chatContainerRef={chatContainerRef}
    />
  )
}