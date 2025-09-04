'use client'
import { useState } from 'react'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { app } from '@/firebase'
import { FaFileAlt, FaCheckCircle, FaExclamationTriangle, FaBriefcase, FaTasks, FaCalendarAlt } from 'react-icons/fa'

export default function CareerUploadPage() {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({ type: '', text: '' })

    const [formData, setFormData] = useState({
        role: '',
        shortDescription: '',
        responsibilities: '',
        dayToDay: '',
        status: 'active'
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }



    const validateForm = () => {
        const errors = []

        if (!formData.role.trim()) errors.push('Job role is required')
        if (!formData.shortDescription.trim()) errors.push('Short description is required')
        if (!formData.responsibilities.trim()) errors.push('Responsibilities are required')
        if (!formData.dayToDay.trim()) errors.push('Day-to-day tasks are required')

        // Validate short description length
        if (formData.shortDescription.length > 200) {
            errors.push('Short description should be less than 200 characters')
        }

        return errors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const errors = validateForm()
        if (errors.length > 0) {
            setMessage({
                type: 'error',
                text: errors.join(', ')
            })
            return
        }

        setLoading(true)
        setMessage({ type: '', text: '' })

        try {
            const db = getFirestore(app, 'hellodoctordb')

            // Clean up the data before submission
            const cleanedData = {
                ...formData,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
                status: 'active'
            }

            await addDoc(collection(db, "careers"), cleanedData)

            setMessage({
                type: 'success',
                text: 'Career opportunity uploaded successfully!'
            })

            // Reset form
            setFormData({
                role: '',
                shortDescription: '',
                responsibilities: '',
                dayToDay: '',
                status: 'active'
            })

        } catch (error) {
            console.error("Error uploading career:", error)
            setMessage({
                type: 'error',
                text: 'Failed to upload career opportunity. Please try again.'
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
                        <FaBriefcase className="mr-3 text-blue-600" />
                        Upload Career Opportunity
                    </h1>
                    <p className="text-gray-600">Add new job positions and career opportunities to the website</p>
                </div>

                {/* Message Display */}
                {message.text && (
                    <div className={`mb-6 p-4 rounded-lg flex items-center ${message.type === 'success'
                        ? 'bg-green-50 border border-green-200 text-green-800'
                        : 'bg-red-50 border border-red-200 text-red-800'
                        }`}>
                        {message.type === 'success' ? (
                            <FaCheckCircle className="mr-2 text-green-600" />
                        ) : (
                            <FaExclamationTriangle className="mr-2 text-red-600" />
                        )}
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Basic Information */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaFileAlt className="mr-2 text-blue-600" />
                            Basic Information
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Job Role *
                                </label>
                                <input
                                    type="text"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="e.g., Legal Studies Faculty"
                                    required
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Short Description *
                                </label>
                                <textarea
                                    name="shortDescription"
                                    value={formData.shortDescription}
                                    onChange={handleInputChange}
                                    rows={3}
                                    maxLength={200}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Brief description of the role (max 200 characters)"
                                    required
                                />
                                <div className="text-sm text-gray-500 mt-1">
                                    {formData.shortDescription.length}/200 characters
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaTasks className="mr-2 text-blue-600" />
                            Responsibilities
                        </h2>

                        <textarea
                            name="responsibilities"
                            value={formData.responsibilities}
                            onChange={handleInputChange}
                            rows={8}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Describe the key responsibilities for this role..."
                            required
                        />
                    </div>

                    {/* Day-to-Day Tasks */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaCalendarAlt className="mr-2 text-blue-600" />
                            Day-to-Day Tasks
                        </h2>

                        <textarea
                            name="dayToDay"
                            value={formData.dayToDay}
                            onChange={handleInputChange}
                            rows={8}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Describe the daily tasks and activities for this role..."
                            required
                        />
                    </div>



                    {/* Submit Button */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${loading
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                        >
                            {loading ? 'Uploading...' : 'Upload Career Opportunity'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
} 