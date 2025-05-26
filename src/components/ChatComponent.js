'use client'
import React from "react"
import { useEffect, useState } from "react"

export default function ChatComponent() {
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    // Check if scripts are already loaded to prevent duplicates
    if (typeof window !== 'undefined' && !scriptLoaded) {
      // Check if scripts already exist
      const existingInject = document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v2.5/inject.js"]')
      const existingCustom = document.querySelector('script[src="https://files.bpcontent.cloud/2025/05/24/07/20250524071956-1BZV5N3G.js"]')
      
      if (!existingInject) {
        // Create first script element for the inject.js
        const injectScript = document.createElement('script')
        injectScript.src = 'https://cdn.botpress.cloud/webchat/v2.5/inject.js'
        injectScript.async = true
        
        // Add the inject script to the document
        document.head.appendChild(injectScript)
        
        // Add the custom script after the inject script loads
        injectScript.onload = () => {
          if (!existingCustom) {
            const customScript = document.createElement('script')
            customScript.src = 'https://files.bpcontent.cloud/2025/05/24/07/20250524071956-1BZV5N3G.js'
            customScript.async = true
            document.head.appendChild(customScript)
            
            customScript.onload = () => {
              setScriptLoaded(true)
              console.log("Botpress scripts loaded successfully")
              
              // Initialize Botpress with custom configuration
              window.botpressWebChat = {
                init: {
                  clientId: '77d32ebd-6a45-4f05-adaa-a0062a1ebbdb',
                  hostUrl: 'https://cdn.botpress.cloud/webchat/v2.5',
                  messagingUrl: 'https://messaging.botpress.cloud',
                  botName: 'CLATians Assistant',
                  avatarUrl: 'https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg',
                  botConversationDescription: 'CLATians Assistant',
                  useSessionStorage: true,
                  showConversationsButton: false,
                  enableTranscriptDownload: false,
                  showTimestamp: true,
                  containerWidth: '100%',
                  layoutWidth: '360px',
                  hideWidget: false,
                  disableAnimations: false,
                  closeOnEscape: false,
                  openOnLoad: true,
                  theme: {
                    style: {
                      header: {
                        backgroundColor: '#b91c1c',
                        backgroundImage: 'linear-gradient(to right, #facc15, #f97316, #b91c1c)',
                        color: 'white'
                      },
                      userMessage: {
                        backgroundColor: '#b91c1c',
                        color: 'white'
                      },
                      botMessage: {
                        backgroundColor: '#f3f4f6',
                        color: 'black'
                      },
                      sendButton: {
                        backgroundColor: '#b91c1c',
                        backgroundImage: 'linear-gradient(to right, #facc15, #f97316, #b91c1c)',
                        color: 'white'
                      }
                    }
                  }
                }
              }
              
              // Apply custom styling after a delay
              setTimeout(applyCustomStyling, 2000)
            }
          } else {
            setScriptLoaded(true)
            initBotpress()
            setTimeout(applyCustomStyling, 2000)
          }
        }
      } else if (!existingCustom) {
        // If inject exists but custom doesn't
        const customScript = document.createElement('script')
        customScript.src = 'https://files.bpcontent.cloud/2025/05/24/07/20250524071956-1BZV5N3G.js'
        customScript.async = true
        document.head.appendChild(customScript)
        
        customScript.onload = () => {
          setScriptLoaded(true)
          initBotpress()
          setTimeout(applyCustomStyling, 2000)
        }
      } else {
        // Both scripts already exist
        setScriptLoaded(true)
        initBotpress()
        setTimeout(applyCustomStyling, 2000)
      }
    }
  }, [scriptLoaded])

  // Function to initialize Botpress with custom settings
  const initBotpress = () => {
    window.botpressWebChat = {
      init: {
        clientId: '77d32ebd-6a45-4f05-adaa-a0062a1ebbdb',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v2.5',
        messagingUrl: 'https://messaging.botpress.cloud',
        botName: 'CLATians Assistant',
        avatarUrl: 'https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg',
        botConversationDescription: 'CLATians Assistant',
        useSessionStorage: true,
        showConversationsButton: false,
        enableTranscriptDownload: false,
        showTimestamp: true,
        containerWidth: '100%',
        layoutWidth: '360px',
        hideWidget: false,
        disableAnimations: false,
        closeOnEscape: false,
        openOnLoad: true,
        theme: {
          style: {
            header: {
              backgroundColor: '#b91c1c',
              backgroundImage: 'linear-gradient(to right, #facc15, #f97316, #b91c1c)',
              color: 'white'
            },
            userMessage: {
              backgroundColor: '#b91c1c',
              color: 'white'
            },
            botMessage: {
              backgroundColor: '#f3f4f6',
              color: 'black'
            },
            sendButton: {
              backgroundColor: '#b91c1c',
              backgroundImage: 'linear-gradient(to right, #facc15, #f97316, #b91c1c)',
              color: 'white'
            }
          }
        }
      }
    }
  }

  // Function to apply custom styling
  const applyCustomStyling = () => {
    const styleInterval = setInterval(() => {
      const botpressContainer = document.querySelector('#bp-web-widget-container')
      const botpressButton = document.querySelector('#bp-web-widget-container .bpw-floating-button')
      const botpressHeader = document.querySelector('#bp-web-widget-container .bpw-header-container')
      const botpressSendButton = document.querySelector('#bp-web-widget-container .bpw-send-button')
      
      if (botpressContainer && botpressHeader) {
        console.log("Applying custom styles to Botpress")
        
        // Style the button if it exists
        if (botpressButton) {
          botpressButton.style.backgroundImage = 'linear-gradient(to right, #facc15, #f97316, #b91c1c)'
          botpressButton.style.display = 'none'
        }
        
        // Style the header
        botpressHeader.style.backgroundImage = 'linear-gradient(to right, #facc15, #f97316, #b91c1c)'
        botpressHeader.style.color = 'white'
        
        // Style the send button if it exists
        if (botpressSendButton) {
          botpressSendButton.style.backgroundImage = 'linear-gradient(to right, #facc15, #f97316, #b91c1c)'
          botpressSendButton.style.color = 'white'
        }
        
        // Position the chat window in the container
        const chatWindow = document.querySelector('.bpw-layout')
        if (chatWindow) {
          chatWindow.style.position = 'static'
          chatWindow.style.margin = '0'
          chatWindow.style.height = '450px'
          chatWindow.style.maxHeight = '450px'
          chatWindow.style.width = '100%'
          chatWindow.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          chatWindow.style.borderRadius = '0.5rem'
          chatWindow.style.overflow = 'hidden'
          
          // Force the chat to be open
          const chatIcon = document.querySelector('.bpw-floating-button')
          if (chatIcon && window.botpressWebChat && window.botpressWebChat.sendEvent) {
            window.botpressWebChat.sendEvent({ type: 'show' })
          }
        }
        
        // Clear interval once styling is applied
        clearInterval(styleInterval)
      }
    }, 500)
  }

  return (
    <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Empty div for Botpress to inject its UI */}
      <div id="bp-web-widget" className="bp-web-widget w-full h-full"></div>
      
      {/* Custom CSS to style Botpress */}
      <style jsx global>{`
        /* Override Botpress styles to match your theme */
        .bpw-header-container {
          background-image: linear-gradient(to right, #facc15, #f97316, #b91c1c) !important;
          color: white !important;
        }
        
        .bpw-floating-button {
          background-image: linear-gradient(to right, #facc15, #f97316, #b91c1c) !important;
          display: none !important;
        }
        
        .bpw-send-button {
          background-image: linear-gradient(to right, #facc15, #f97316, #b91c1c) !important;
          color: white !important;
        }
        
        .bpw-from-bot .bpw-chat-bubble {
          background-color: #f3f4f6 !important;
          color: black !important;
        }
        
        .bpw-from-user .bpw-chat-bubble {
          background-color: #b91c1c !important;
          color: white !important;
        }
        
        .bpw-composer {
          border-top: 1px solid #e5e7eb !important;
        }
        
        .bpw-chat-container {
          background-color: white !important;
        }
        
        #bp-web-widget-container {
          z-index: 999;
          position: relative !important;
          bottom: auto !important;
          right: auto !important;
          width: 100% !important;
          height: 100% !important;
        }
        
        .bpw-layout {
          position: static !important;
          margin: 0 !important;
          height: 450px !important;
          max-height: 450px !important;
          width: 100% !important;
          box-shadow: none !important;
          border-radius: 0.5rem !important;
          overflow: hidden !important;
        }
        
        .bpw-widget-btn {
          display: none !important;
        }
      `}</style>
    </div>
  )
}