'use client'
import { useState, useRef } from 'react'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { app } from '@/firebase'
import { FaSpinner, FaCheck, FaExclamationTriangle, FaFileUpload, FaTimes } from 'react-icons/fa'
import DOMPurify from 'dompurify'

export default function JobApplicationForm({ jobRole, onClose }) {
  const [fullName, setFullName] = useState('')
  const [contactNo, setContactNo] = useState('')
  const [resumeFile, setResumeFile] = useState(null)
  const [fileName, setFileName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const fileInputRef = useRef(null)

  // Sanitize inputs to prevent XSS
  const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input)
  }

  // Validate phone number format
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/
    return phoneRegex.test(phone)
  }

  // Validate file type
  const validateFileType = (file) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    return file ? allowedTypes.includes(file.type) : true // Return true if no file (since it's optional)
  }

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError('Resume file size should be less than 5MB')
        setResumeFile(null)
        setFileName('')
        return
      }
      
      if (!validateFileType(file)) {
        setError('Only PDF and Word documents are allowed')
        setResumeFile(null)
        setFileName('')
        return
      }
      
      setResumeFile(file)
      setFileName(file.name)
      setError('')
    }
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Generate a CSRF token (in a real app, this would be from the server)
    const csrfToken = Math.random().toString(36).substring(2)
    
    // Sanitize inputs
    const sanitizedName = sanitizeInput(fullName.trim())
    const sanitizedContact = sanitizeInput(contactNo.trim())
    
    // Validate inputs
    if (!sanitizedName || !sanitizedContact) {
      setError('Full name and contact number are required')
      return
    }
    
    if (!validatePhoneNumber(sanitizedContact)) {
      setError('Please enter a valid 10-digit phone number')
      return
    }
    
    if (resumeFile && !validateFileType(resumeFile)) {
      setError('Only PDF and Word documents are allowed')
      return
    }
    
    try {
      setLoading(true)
      setError('')
      
      const db = getFirestore(app)
      const storage = getStorage(app)
      
      let resumeUrl = null
      
      // Upload resume if provided
      if (resumeFile) {
        const fileExtension = resumeFile.name.split('.').pop()
        const storageRef = ref(storage, `resumes/${Date.now()}_${sanitizedName.replace(/\s+/g, '_')}.${fileExtension}`)
        
        await uploadBytes(storageRef, resumeFile)
        resumeUrl = await getDownloadURL(storageRef)
      }
      
      // Add application to Firestore
      await addDoc(collection(db, 'jobApplications'), {
        fullName: sanitizedName,
        contactNo: sanitizedContact,
        resumeUrl,
        jobRole,
        appliedAt: serverTimestamp(),
        csrfToken // Store the token for verification
      })
      
      // Reset form
      setFullName('')
      setContactNo('')
      setResumeFile(null)
      setFileName('')
      setSuccess(true)
      
      // Close form after 3 seconds on success
      setTimeout(() => {
        if (onClose) onClose()
      }, 3000)
      
    } catch (err) {
      console.error('Error submitting application:', err)
      setError('Failed to submit application. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-2xl">
      {success ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCheck className="text-2xl" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
          <p className="text-gray-600 mb-6">
            Thank you for applying for the {jobRole} position. We'll review your application and contact you soon.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Apply for {jobRole}</h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTimes />
            </button>
          </div>
          
          {error && (
            <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-md flex items-center">
              <FaExclamationTriangle className="mr-2 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="fullName">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                maxLength={100}
                pattern="^[A-Za-z\s]+$"
                title="Please enter a valid name (letters and spaces only)"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="contactNo">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="contactNo"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value.replace(/\D/g, '').slice(0, 10))}
                required
                pattern="[0-9]{10}"
                title="Please enter a 10-digit phone number"
                placeholder="10-digit mobile number"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">
                Resume (Optional)
              </label>
              <div className="flex items-center">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="px-4 py-2 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 flex items-center"
                >
                  <FaFileUpload className="mr-2" />
                  {fileName ? 'Change File' : 'Upload Resume'}
                </button>
                {fileName && (
                  <div className="ml-3 flex items-center">
                    <span className="text-sm text-gray-600 truncate max-w-[200px]">{fileName}</span>
                    <button
                      type="button"
                      onClick={() => {
                        setResumeFile(null)
                        setFileName('')
                      }}
                      className="ml-2 text-gray-500 hover:text-red-500"
                    >
                      <FaTimes size={14} />
                    </button>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
              </p>
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}