'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaYoutube, FaVideo, FaTimes } from 'react-icons/fa'
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
  // ... copy the rest of your events and add the additional fields
];

export default function EventDetail() {
  // Unwrap params using React.use()
  
  const {id} = useParams()
  const event = events[parseInt(id)];
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      errors.phoneNumber = 'Phone number must be 10 digits';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setShowRegistrationForm(false);
        setSubmitSuccess(false);
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

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
                <button 
                  onClick={() => setShowRegistrationForm(true)}
                  className="w-full py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowRegistrationForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close registration form"
            >
              <FaTimes size={24} />
            </button>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">Register for Event</h2>
              
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-600 mb-2">Registration Successful!</h3>
                  <p className="text-gray-600">Thank you for registering for {event.title}. We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors ${formErrors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter your full name"
                    />
                    {formErrors.fullName && <p className="mt-1 text-sm text-red-600">{formErrors.fullName}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter your email address"
                    />
                    {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors ${formErrors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter your phone number"
                    />
                    {formErrors.phoneNumber && <p className="mt-1 text-sm text-red-600">{formErrors.phoneNumber}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                      placeholder="Any questions or comments?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : "Submit Registration"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}