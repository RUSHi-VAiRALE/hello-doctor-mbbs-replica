'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaYoutube, FaVideo } from 'react-icons/fa'
import { use } from 'react'
import { useParams } from 'next/navigation'

// This is the same events data from the Events.js component
// In a real application, you would fetch this from an API
const events = [
  {
    date: { day: '01', month: 'Oct' },
    time: '08:00 AM - 10:00 AM',
    title: 'Engaging Students in Real-World Problems Finding',
    location: 'United States',
    image: 'https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_1280.jpg',
    description: 'Join us for an interactive session on how to engage students in solving real-world problems. This workshop will provide educators with practical strategies to connect classroom learning with authentic challenges.',
    youtubeLink: 'https://www.youtube.com/watch?v=example',
    meetLink: 'https://meet.google.com/example',
    speaker: 'Dr. Jane Smith',
    speakerRole: 'Education Consultant'
  },
  {
    date: { day: '01', month: 'Oct' },
    time: '08:00 AM - 10:00 AM',
    title: 'Engaging Students in Real-World Problems Finding',
    location: 'United States',
    image: 'https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_1280.jpg',
    description: 'Join us for an interactive session on how to engage students in solving real-world problems. This workshop will provide educators with practical strategies to connect classroom learning with authentic challenges.',
    youtubeLink: 'https://www.youtube.com/watch?v=example',
    meetLink: 'https://meet.google.com/example',
    speaker: 'Dr. Jane Smith',
    speakerRole: 'Education Consultant'
  },
  {
    date: { day: '01', month: 'Oct' },
    time: '08:00 AM - 10:00 AM',
    title: 'Engaging Students in Real-World Problems Finding',
    location: 'United States',
    image: 'https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_1280.jpg',
    description: 'Join us for an interactive session on how to engage students in solving real-world problems. This workshop will provide educators with practical strategies to connect classroom learning with authentic challenges.',
    youtubeLink: 'https://www.youtube.com/watch?v=example',
    meetLink: 'https://meet.google.com/example',
    speaker: 'Dr. Jane Smith',
    speakerRole: 'Education Consultant'
  },
  {
    date: { day: '01', month: 'Oct' },
    time: '08:00 AM - 10:00 AM',
    title: 'Engaging Students in Real-World Problems Finding',
    location: 'United States',
    image: 'https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_1280.jpg',
    description: 'Join us for an interactive session on how to engage students in solving real-world problems. This workshop will provide educators with practical strategies to connect classroom learning with authentic challenges.',
    youtubeLink: 'https://www.youtube.com/watch?v=example',
    meetLink: 'https://meet.google.com/example',
    speaker: 'Dr. Jane Smith',
    speakerRole: 'Education Consultant'
  },
  {
    date: { day: '01', month: 'Oct' },
    time: '08:00 AM - 10:00 AM',
    title: 'Engaging Students in Real-World Problems Finding',
    location: 'United States',
    image: 'https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_1280.jpg',
    description: 'Join us for an interactive session on how to engage students in solving real-world problems. This workshop will provide educators with practical strategies to connect classroom learning with authentic challenges.',
    youtubeLink: 'https://www.youtube.com/watch?v=example',
    meetLink: 'https://meet.google.com/example',
    speaker: 'Dr. Jane Smith',
    speakerRole: 'Education Consultant'
  },
  {
    date: { day: '01', month: 'Oct' },
    time: '08:00 AM - 10:00 AM',
    title: 'Engaging Students in Real-World Problems Finding',
    location: 'United States',
    image: 'https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_1280.jpg',
    description: 'Join us for an interactive session on how to engage students in solving real-world problems. This workshop will provide educators with practical strategies to connect classroom learning with authentic challenges.',
    youtubeLink: 'https://www.youtube.com/watch?v=example',
    meetLink: 'https://meet.google.com/example',
    speaker: 'Dr. Jane Smith',
    speakerRole: 'Education Consultant'
  },
  {
    date: { day: '01', month: 'Oct' },
    time: '08:00 AM - 10:00 AM',
    title: 'Engaging Students in Real-World Problems Finding',
    location: 'United States',
    image: 'https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_1280.jpg',
    description: 'Join us for an interactive session on how to engage students in solving real-world problems. This workshop will provide educators with practical strategies to connect classroom learning with authentic challenges.',
    youtubeLink: 'https://www.youtube.com/watch?v=example',
    meetLink: 'https://meet.google.com/example',
    speaker: 'Dr. Jane Smith',
    speakerRole: 'Education Consultant'
  },
  {
    date: { day: '01', month: 'Oct' },
    time: '08:00 AM - 10:00 AM',
    title: 'Engaging Students in Real-World Problems Finding',
    location: 'United States',
    image: 'https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_1280.jpg',
    description: 'Join us for an interactive session on how to engage students in solving real-world problems. This workshop will provide educators with practical strategies to connect classroom learning with authentic challenges.',
    youtubeLink: 'https://www.youtube.com/watch?v=example',
    meetLink: 'https://meet.google.com/example',
    speaker: 'Dr. Jane Smith',
    speakerRole: 'Education Consultant'
  },
  {
    date: { day: '01', month: 'Oct' },
    time: '08:00 AM - 10:00 AM',
    title: 'Engaging Students in Real-World Problems Finding',
    location: 'United States',
    image: 'https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_1280.jpg',
    description: 'Join us for an interactive session on how to engage students in solving real-world problems. This workshop will provide educators with practical strategies to connect classroom learning with authentic challenges.',
    youtubeLink: 'https://www.youtube.com/watch?v=example',
    meetLink: 'https://meet.google.com/example',
    speaker: 'Dr. Jane Smith',
    speakerRole: 'Education Consultant'
  },
  // ... copy the rest of your events and add the additional fields
];

export default function EventDetail() {
  // Unwrap params using React.use()
  
  const {id} = useParams()
  const event = events[parseInt(id)];
//   console.log(id)
//   useEffect(() => {
//     // Get the event based on the ID from the URL
//     const eventId = parseInt(id);
//     if (eventId >= 0 && eventId < events.length) {
//       setEvent(events[eventId]);
//     }
//   }, [id]);

//   if (!event) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
//       </div>
//     );
//   }

  return (
    <div className="bg-[#fdf6f4] min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] w-full">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 px-4 py-2 rounded-lg mb-4">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                <span>{event.date.day} {event.date.month}</span>
                <span className="mx-2">|</span>
                <FaClock className="mr-2" />
                <span>{event.time}</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{event.title}</h1>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">About This Event</h2>
              <p className="text-gray-700 mb-8">{event.description}</p>
              
              <h3 className="text-xl font-bold mb-4">Speaker</h3>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-bold">{event.speaker}</h4>
                  <p className="text-gray-600">{event.speakerRole}</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Join Event</h3>
              <div className="space-y-4">
                <a 
                  href={event.youtubeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <FaYoutube className="text-red-600 text-2xl mr-3" />
                  <div>
                    <h4 className="font-bold">YouTube Live</h4>
                    <p className="text-sm text-gray-600">Join our live stream</p>
                  </div>
                </a>
                
                <a 
                  href={event.meetLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <FaVideo className="text-blue-600 text-2xl mr-3" />
                  <div>
                    <h4 className="font-bold">Google Meet</h4>
                    <p className="text-sm text-gray-600">Join interactive session</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Event Details</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCalendarAlt className="text-orange-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold">Date</h4>
                    <p className="text-gray-600">{event.date.day} {event.date.month}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaClock className="text-orange-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold">Time</h4>
                    <p className="text-gray-600">{event.time}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-orange-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Events */}
      {/* {<div className="bg-[#e7edff] py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Check Out Our Other Events</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {events.map((otherEvent, index) => (
              parseInt(id) !== index && (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={otherEvent.image}
                      alt={otherEvent.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-[#E3D7B8] px-5 py-2 rounded-br-xl">
                      <div className="text-center">
                        <h5 className="text-2xl font-bold text-gray-800">{otherEvent.date.day}</h5>
                        <small className="text-gray-600 text-sm">{otherEvent.date.month}</small>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center mb-3">
                      <FaClock className="text-orange-500 mr-2 text-base" />
                      <span className="text-sm text-gray-600">{otherEvent.time}</span>
                    </div>

                    <h5 className="font-bold text-lg mb-3">{otherEvent.title}</h5>

                    <div className="flex items-center mb-4">
                      <FaMapMarkerAlt className="text-orange-500 mr-2 text-base" />
                      <span className="text-sm text-gray-600">{otherEvent.location}</span>
                    </div>

                    <Link href={`/events/${index}`}>
                      <button className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg text-sm">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>} */}
    </div>
  );
}