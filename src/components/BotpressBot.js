// 'use client'
// import { useState, useEffect, useRef } from 'react'

// export default function BotpressBot() {
//   const [mounted, setMounted] = useState(false)
//   const containerRef = useRef(null)

//   useEffect(() => {
//     setMounted(true)
    
//     // Only run this code on the client side
//     if (typeof window !== 'undefined') {
//       // Remove any existing Botpress scripts to avoid conflicts
//       const existingScripts = document.querySelectorAll('script[src*="botpress"]')
//       existingScripts.forEach(script => script.remove())
      
//       // Create and inject the Botpress script
//       const script = document.createElement('script')
//       script.src = "https://cdn.botpress.cloud/webchat/v2.5/inject.js"
//       script.async = true
      
//       script.onload = () => {
//         console.log("Botpress script loaded")
        
//         // Small delay to ensure the Botpress object is fully initialized
//         setTimeout(() => {
//           if (window.botpress) {
//             // Initialize Botpress with the provided configuration
//             window.botpress.init({
//               "botId": "09dd3403-dbb2-491b-876b-9564ee7059b9",
//               "clientId": "77d32ebd-6a45-4f05-adaa-a0062a1ebbdb",
//               "hostUrl": "https://cdn.botpress.cloud/webchat/v2.5",
//               "messagingUrl": "https://messaging.botpress.cloud",
//               "configuration": {
//                 "botName": "CLATians",
//                 "website": {},
//                 "email": {},
//                 "phone": {},
//                 "termsOfService": {},
//                 "privacyPolicy": {},
//                 "color": "#facc15",
//                 "variant": "solid",
//                 "themeMode": "light",
//                 "fontFamily": "inter",
//                 "showCloseButton": true,
//                 "hideWidget": false,
//                 "disableAnimations": false,
//                 "closeOnEscape": false
//               }
//             })

//             // Apply custom styles after a delay
//             setTimeout(applyResponsiveStyles, 1000)
//           } else {
//             console.error("Botpress object not available")
//           }
//         }, 500)
//       }
      
//       document.head.appendChild(script)
      
//       // Function to apply responsive styles based on screen size
//       const applyResponsiveStyles = () => {
//         const fabButton = document.querySelector('.bpFab')
//         const webchat = document.querySelector('.bpWebchat')
//         const headerContainer = document.querySelector('.bpHeaderContainer')
        
//         if (fabButton) {
//           fabButton.style.backgroundImage = 'linear-gradient(to right, #facc15, #f97316, #b91c1c)'
//         }
        
//         if (webchat) {
//           // Apply responsive positioning
//           const updatePosition = () => {
//             const windowWidth = window.innerWidth
            
//             if (windowWidth <= 640) {
//               // Mobile styles
//               webchat.style.width = '90%'
//               webchat.style.height = '80%'
//               webchat.style.bottom = '70px'
//               webchat.style.right = '5%'
//             } else if (windowWidth <= 768) {
//               // Tablet styles
//               webchat.style.width = '400px'
//               webchat.style.height = '500px'
//               webchat.style.bottom = '70px'
//               webchat.style.right = '20px'
//             } else {
//               // Desktop styles
//               webchat.style.width = '400px'
//               webchat.style.height = '550px'
//               webchat.style.bottom = '70px'
//               webchat.style.right = '20px'
//             }
//           }
          
//           // Apply styles immediately
//           updatePosition()
          
//           // Update on window resize
//           window.addEventListener('resize', updatePosition)
//         }
        
//         // Fix the header gradient
//         if (headerContainer) {
//           headerContainer.style.backgroundImage = 'linear-gradient(to right, #facc15, #f97316, #b91c1c)'
//           headerContainer.style.color = 'white'
//         }
//       }
      
//       return () => {
//         // Clean up scripts when component unmounts
//         if (document.head.contains(script)) {
//           document.head.removeChild(script)
//         }
        
//         // Remove event listeners
//         window.removeEventListener('resize', applyResponsiveStyles)
//       }
//     }
//   }, [])

//   return (
//     <>
//       {/* Custom styling for Botpress elements */}
//       <style jsx global>{`
//         /* Style the floating button */
//         .bpFab {
//           background-image: linear-gradient(to right, #facc15, #f97316, #b91c1c) !important;
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2) !important;
//         }
        
//         /* Style the webchat container */
//         .bpWebchat {
//           border-radius: 10px !important;
//           box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2) !important;
//           overflow: hidden !important;
//         }
        
//         /* Style the header to match our gradient */
//         .bpHeaderContainer {
//           background-image: linear-gradient(to right, #facc15, #f97316, #b91c1c) !important;
//           color: white !important;
//         }
        
//         /* Style the header title */
//         .bpHeaderContentTitle {
//           color: white !important;
//           font-weight: bold !important;
//         }
        
//         /* Style the user messages */
//         .bpMessageBubbleUser {
//           background-color: #b91c1c !important;
//           color: white !important;
//         }
        
//         /* Style the bot messages */
//         .bpMessageBubbleBot {
//           background-color: #f3f4f6 !important;
//           color: black !important;
//         }
        
//         /* Style the composer input */
//         .bpComposerInput {
//           border: 1px solid #e5e7eb !important;
//           border-radius: 9999px !important;
//           padding: 0.5rem 1rem !important;
//         }
        
//         /* Style the send button */
//         .bpComposerButtonIcon {
//           background-image: linear-gradient(to right, #facc15, #f97316, #b91c1c) !important;
//           color: white !important;
//         }
        
//         /* Style the composer container */
//         .bpComposerContainer {
//           border-top: 1px solid #e5e7eb !important;
//           padding: 0.5rem !important;
//         }
        
//         /* Style the message list container */
//         .bpMessageListContainer {
//           background-color: white !important;
//         }
//       `}</style>
//     </>
//   )
// }