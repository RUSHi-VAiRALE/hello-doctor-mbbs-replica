'use client'
import { useState } from 'react'
import { getFirestore, collection, addDoc, updateDoc, serverTimestamp, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { app } from '@/firebase'
import { FaPlus, FaTrash, FaUniversity, FaGraduationCap, FaFileAlt, FaCheckCircle, FaExclamationTriangle, FaEdit, FaEye } from 'react-icons/fa'

export default function MBBSUploadPage() {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({ type: '', text: '' })
    const [existingPrograms, setExistingPrograms] = useState([])
    const [showExistingPrograms, setShowExistingPrograms] = useState(false)
    const [editingProgramId, setEditingProgramId] = useState(null)

    const [formData, setFormData] = useState({
        category: '',
        subcategory: '',
        subSubcategory: '',
        customField: '',
        title: '',
        slug: '',
        subtitle: '',
        description: '',
        heroImage: '',
        state: '',
        colleges: [
            {
                id: Date.now(),
                name: '',
                location: '',
                fees: '',
                seats: '',
                ranking: '',
                established: ''
            }
        ],
        eligibility: [''],
        documents: ['']
    })

    // Category options
    const categoryOptions = {
        'study-in-india': {
            label: 'Study in India',
            subcategories: {
                'Medical': {
                    label: 'Medical',
                    subSubcategories: {
                        'mbbs': 'MBBS',
                        'bds': 'BDS',
                        'bams': 'BAMS',
                        'bpharm': 'BPharm',
                        'bpt': 'BPT',
                        'bscn': 'BSc Nursing',
                        'bhms': 'BHMS',
                        'md/ms': 'MD/MS',
                        'fcps': 'FCPS',
                    }
                },
                'Engineering': {
                    label: 'Engineering',
                    subSubcategories: {
                        'computer': 'Computer Engineering',
                        'mechanical': 'Mechanical Engineering',
                        'electrical': 'Electrical Engineering'
                    }
                },
                'Management': {
                    label: 'Management',
                    subSubcategories: {
                        'mba': 'MBA',
                        'mca': 'MCA',
                        'mtech': 'M.Tech'
                    }
                }
            }
        },
        'study-abroad': {
            label: 'Study Abroad',
            subcategories: {}
        },
        'mbbs-abroad': {
            label: 'MBBS Abroad',
            subcategories: {}
        }
    }

    // Generate slug from title
    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '') // Remove special characters
            .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
            .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target

        // Auto-generate slug when title changes
        if (name === 'title') {
            setFormData(prev => ({
                ...prev,
                [name]: value,
                slug: generateSlug(value)
            }))
        } else if (name === 'category') {
            // Reset subcategory, subSubcategory and customField when category changes
            setFormData(prev => ({
                ...prev,
                [name]: value,
                subcategory: '',
                subSubcategory: '',
                customField: ''
            }))
        } else if (name === 'subcategory') {
            // Reset subSubcategory when subcategory changes
            setFormData(prev => ({
                ...prev,
                [name]: value,
                subSubcategory: ''
            }))
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }))
        }
    }

    const handleCollegeChange = (index, field, value) => {
        const updatedColleges = [...formData.colleges]
        updatedColleges[index][field] = value
        setFormData(prev => ({
            ...prev,
            colleges: updatedColleges
        }))
    }

    const addCollege = () => {
        setFormData(prev => ({
            ...prev,
            colleges: [...prev.colleges, {
                id: Date.now() + Math.random(),
                name: '',
                location: '',
                fees: '',
                seats: '',
                ranking: '',
                established: ''
            }]
        }))
    }

    const removeCollege = (index) => {
        if (formData.colleges.length > 1) {
            const updatedColleges = formData.colleges.filter((_, i) => i !== index)
            setFormData(prev => ({
                ...prev,
                colleges: updatedColleges
            }))
        }
    }

    const handleArrayChange = (type, index, value) => {
        const updatedArray = [...formData[type]]
        updatedArray[index] = value
        setFormData(prev => ({
            ...prev,
            [type]: updatedArray
        }))
    }

    const addArrayItem = (type) => {
        setFormData(prev => ({
            ...prev,
            [type]: [...prev[type], '']
        }))
    }

    const removeArrayItem = (type, index) => {
        if (formData[type].length > 1) {
            const updatedArray = formData[type].filter((_, i) => i !== index)
            setFormData(prev => ({
                ...prev,
                [type]: updatedArray
            }))
        }
    }

    const validateForm = () => {
        const errors = []

        if (!formData.category.trim()) errors.push('Category is required')
        if (formData.category === 'study-in-india' && !formData.subcategory.trim()) {
            errors.push('Subcategory is required for Study in India')
        }
        if (formData.category === 'study-in-india' && !formData.subSubcategory.trim()) {
            errors.push('Sub-subcategory is required for Study in India')
        }
        if (formData.category === 'study-in-india' && !formData.customField.trim()) {
            errors.push('Custom field is required for Study in India')
        }
        if (!formData.title.trim()) errors.push('Title is required')
        if (!formData.subtitle.trim()) errors.push('Subtitle is required')
        if (!formData.description.trim()) errors.push('Description is required')
        if (!formData.state.trim()) errors.push('State is required')

        // Validate colleges
        formData.colleges.forEach((college, index) => {
            if (!college.name.trim()) errors.push(`College ${index + 1}: Name is required`)
            if (!college.location.trim()) errors.push(`College ${index + 1}: Location is required`)
            if (!college.fees.trim()) errors.push(`College ${index + 1}: Fees is required`)
            if (!college.seats.trim()) errors.push(`College ${index + 1}: Seats is required`)
            if (!college.established.trim()) errors.push(`College ${index + 1}: Established year is required`)
        })

        // Validate eligibility criteria
        const validEligibility = formData.eligibility.filter(item => item.trim())
        if (validEligibility.length === 0) errors.push('At least one eligibility criterion is required')

        // Validate documents
        const validDocuments = formData.documents.filter(item => item.trim())
        if (validDocuments.length === 0) errors.push('At least one document is required')

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
            console.log('Colleges before processing:', formData.colleges);

            const cleanedData = {
                ...formData,
                colleges: formData.colleges.map(college => {
                    const { id, ...collegeWithoutId } = college; // Remove id field for Firebase
                    return {
                        ...collegeWithoutId,
                        seats: college.seats.toString(),
                        established: college.established.toString()
                    };
                }),
                eligibility: formData.eligibility.filter(item => item.trim()),
                documents: formData.documents.filter(item => item.trim()),
                updatedAt: serverTimestamp(),
                status: 'active'
            }

            console.log('Cleaned colleges data:', cleanedData.colleges);

            if (editingProgramId) {
                // Update existing program
                await updateDoc(doc(db, "mbbsPrograms", editingProgramId), cleanedData)
                setMessage({
                    type: 'success',
                    text: `MBBS program updated successfully with ${cleanedData.colleges.length} college(s)!`
                })
                setEditingProgramId(null)
            } else {
                // Create new program
                cleanedData.createdAt = serverTimestamp()
                await addDoc(collection(db, "mbbsPrograms"), cleanedData)
                setMessage({
                    type: 'success',
                    text: `MBBS program created successfully with ${cleanedData.colleges.length} college(s)!`
                })
            }

            // Reset form
            setFormData({
                category: '',
                subcategory: '',
                subSubcategory: '',
                customField: '',
                title: '',
                slug: '',
                subtitle: '',
                description: '',
                heroImage: '',
                state: '',
                colleges: [{
                    id: Date.now(),
                    name: '',
                    location: '',
                    fees: '',
                    seats: '',
                    ranking: '',
                    established: ''
                }],
                eligibility: [''],
                documents: ['']
            })
            setEditingProgramId(null)

        } catch (error) {
            console.error("Error uploading MBBS data:", error)
            setMessage({
                type: 'error',
                text: 'Failed to upload data. Please try again.'
            })
        } finally {
            setLoading(false)
        }
    }

    // Fetch existing programs
    const fetchExistingPrograms = async () => {
        try {
            const db = getFirestore(app, 'hellodoctordb')
            const querySnapshot = await getDocs(collection(db, "mbbsPrograms"))
            const programs = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setExistingPrograms(programs)
        } catch (error) {
            console.error("Error fetching programs:", error)
        }
    }

    // Delete program
    const deleteProgram = async (programId) => {
        if (window.confirm('Are you sure you want to delete this program?')) {
            try {
                const db = getFirestore(app, 'hellodoctordb')
                await deleteDoc(doc(db, "mbbsPrograms", programId))
                setMessage({
                    type: 'success',
                    text: 'Program deleted successfully!'
                })
                fetchExistingPrograms()
            } catch (error) {
                console.error("Error deleting program:", error)
                setMessage({
                    type: 'error',
                    text: 'Failed to delete program. Please try again.'
                })
            }
        }
    }

    // Edit program
    const editProgram = (program) => {
        setEditingProgramId(program.id)
        setFormData({
            category: program.category || '',
            subcategory: program.subcategory || '',
            subSubcategory: program.subSubcategory || '',
            customField: program.customField || '',
            title: program.title || '',
            slug: program.slug || '',
            subtitle: program.subtitle || '',
            description: program.description || '',
            heroImage: program.heroImage || '',
            state: program.state || '',
            colleges: program.colleges ? program.colleges.map((college, index) => ({
                id: Date.now() + index,
                ...college
            })) : [{
                id: Date.now(),
                name: '',
                location: '',
                fees: '',
                seats: '',
                ranking: '',
                established: ''
            }],
            eligibility: program.eligibility || [''],
            documents: program.documents || ['']
        })
        setShowExistingPrograms(false)
    }

    // Cancel edit
    const cancelEdit = () => {
        setEditingProgramId(null)
        setFormData({
            category: '',
            subcategory: '',
            subSubcategory: '',
            customField: '',
            title: '',
            slug: '',
            subtitle: '',
            description: '',
            heroImage: '',
            state: '',
            colleges: [{
                id: Date.now(),
                name: '',
                location: '',
                fees: '',
                seats: '',
                ranking: '',
                established: ''
            }],
            eligibility: [''],
            documents: ['']
        })
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
                        <FaGraduationCap className="mr-3 text-blue-600" />
                        {editingProgramId ? 'Edit MBBS Program Data' : 'Upload MBBS Program Data'}
                    </h1>
                    <p className="text-gray-600">
                        {editingProgramId ? 'Update existing MBBS program information' : 'Add new MBBS program information to the database'}
                    </p>
                    {editingProgramId && (
                        <button
                            type="button"
                            onClick={cancelEdit}
                            className="mt-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        >
                            Cancel Edit
                        </button>
                    )}
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

                {/* Existing Programs Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                            <FaEye className="mr-2 text-blue-600" />
                            Existing Programs
                        </h2>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() => {
                                    if (showExistingPrograms) {
                                        setShowExistingPrograms(false)
                                    } else {
                                        fetchExistingPrograms()
                                        setShowExistingPrograms(true)
                                    }
                                }}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                            >
                                {showExistingPrograms ? 'Hide Programs' : 'View Programs'}
                            </button>
                        </div>
                    </div>

                    {showExistingPrograms && (
                        <div className="space-y-4">
                            {existingPrograms.length === 0 ? (
                                <p className="text-gray-500 text-center py-4">No programs found.</p>
                            ) : (
                                existingPrograms.map((program) => (
                                    <div key={program.id} className="border border-gray-200 rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-800">{program.title}</h3>
                                                <p className="text-sm text-gray-600">{program.subtitle}</p>
                                                <div className="flex gap-4 mt-2 text-xs text-gray-500">
                                                    <span>Category: {program.category}</span>
                                                    {program.subcategory && <span>Subcategory: {program.subcategory}</span>}
                                                    {program.subSubcategory && <span>Sub-subcategory: {program.subSubcategory}</span>}
                                                    <span>State: {program.state}</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button
                                                    type="button"
                                                    onClick={() => editProgram(program)}
                                                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                                    title="Edit Program"
                                                >
                                                    <FaEdit className="w-4 h-4" />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => deleteProgram(program.id)}
                                                    className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                                                    title="Delete Program"
                                                >
                                                    <FaTrash className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Basic Information */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaFileAlt className="mr-2 text-blue-600" />
                            Basic Information
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Category *
                                </label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                >
                                    <option value="">Select Category</option>
                                    {Object.entries(categoryOptions).map(([key, option]) => (
                                        <option key={key} value={key}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {formData.category === 'study-in-india' && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subcategory *
                                    </label>
                                    <select
                                        name="subcategory"
                                        value={formData.subcategory}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    >
                                        <option value="">Select Subcategory</option>
                                        {Object.entries(categoryOptions['study-in-india'].subcategories).map(([key, subcategory]) => (
                                            <option key={key} value={key}>
                                                {subcategory.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {formData.category === 'study-in-india' && formData.subcategory && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Sub-subcategory *
                                    </label>
                                    <select
                                        name="subSubcategory"
                                        value={formData.subSubcategory}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    >
                                        <option value="">Select Sub-subcategory</option>
                                        {Object.entries(categoryOptions['study-in-india'].subcategories[formData.subcategory].subSubcategories).map(([key, label]) => (
                                            <option key={key} value={key}>
                                                {label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {formData.category === 'study-in-india' && formData.subcategory && formData.subSubcategory && (
                                <div className={formData.category === 'study-in-india' ? 'md:col-span-2' : ''}>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Custom Field *
                                    </label>
                                    <input
                                        type="text"
                                        name="customField"
                                        value={formData.customField}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter custom field value"
                                        required
                                    />
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Title *
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="e.g., STUDY MBBS IN RAJASTHAN"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Slug (Auto-generated)
                                </label>
                                <input
                                    type="text"
                                    name="slug"
                                    value={formData.slug}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                                    placeholder="auto-generated-from-title"
                                    readOnly
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    State *
                                </label>
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="e.g., Rajasthan"
                                    required
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Subtitle *
                                </label>
                                <input
                                    type="text"
                                    name="subtitle"
                                    value={formData.subtitle}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="e.g., MBBS admission in Rajasthan"
                                    required
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Description *
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Detailed description of the MBBS program..."
                                    required
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Hero Image URL
                                </label>
                                <input
                                    type="url"
                                    name="heroImage"
                                    value={formData.heroImage}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Colleges Section */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                                <FaUniversity className="mr-2 text-blue-600" />
                                Medical Colleges
                            </h2>
                            <button
                                type="button"
                                onClick={addCollege}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                            >
                                <FaPlus className="mr-2" />
                                Add College
                            </button>
                        </div>

                        {formData.colleges.map((college, index) => (
                            <div key={college.id} className="border border-gray-200 rounded-lg p-4 mb-4">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-medium text-gray-700">
                                        College {index + 1}
                                    </h3>
                                    {formData.colleges.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeCollege(index)}
                                            className="text-red-600 hover:text-red-800 transition-colors"
                                        >
                                            <FaTrash />
                                        </button>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            College Name *
                                        </label>
                                        <input
                                            type="text"
                                            value={college.name}
                                            onChange={(e) => handleCollegeChange(index, 'name', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="College name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Location *
                                        </label>
                                        <input
                                            type="text"
                                            value={college.location}
                                            onChange={(e) => handleCollegeChange(index, 'location', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="City"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Fees *
                                        </label>
                                        <input
                                            type="text"
                                            value={college.fees}
                                            onChange={(e) => handleCollegeChange(index, 'fees', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="₹2,18,000"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Seats *
                                        </label>
                                        <input
                                            type="number"
                                            value={college.seats}
                                            onChange={(e) => handleCollegeChange(index, 'seats', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="250"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Ranking
                                        </label>
                                        <input
                                            type="text"
                                            value={college.ranking}
                                            onChange={(e) => handleCollegeChange(index, 'ranking', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="NIRF Rank 28"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Established *
                                        </label>
                                        <input
                                            type="number"
                                            value={college.established}
                                            onChange={(e) => handleCollegeChange(index, 'established', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="1947"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Eligibility Criteria */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Eligibility Criteria
                            </h2>
                            <button
                                type="button"
                                onClick={() => addArrayItem('eligibility')}
                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                            >
                                <FaPlus className="mr-2" />
                                Add Criteria
                            </button>
                        </div>

                        {formData.eligibility.map((criteria, index) => (
                            <div key={index} className="flex items-center gap-3 mb-3">
                                <input
                                    type="text"
                                    value={criteria}
                                    onChange={(e) => handleArrayChange('eligibility', index, e.target.value)}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter eligibility criteria"
                                />
                                {formData.eligibility.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeArrayItem('eligibility', index)}
                                        className="text-red-600 hover:text-red-800 transition-colors"
                                    >
                                        <FaTrash />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Required Documents */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Required Documents
                            </h2>
                            <button
                                type="button"
                                onClick={() => addArrayItem('documents')}
                                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center"
                            >
                                <FaPlus className="mr-2" />
                                Add Document
                            </button>
                        </div>

                        {formData.documents.map((document, index) => (
                            <div key={index} className="flex items-center gap-3 mb-3">
                                <input
                                    type="text"
                                    value={document}
                                    onChange={(e) => handleArrayChange('documents', index, e.target.value)}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter required document"
                                />
                                {formData.documents.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeArrayItem('documents', index)}
                                        className="text-red-600 hover:text-red-800 transition-colors"
                                    >
                                        <FaTrash />
                                    </button>
                                )}
                            </div>
                        ))}
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
                            {loading
                                ? (editingProgramId ? 'Updating...' : 'Uploading...')
                                : (editingProgramId ? 'Update MBBS Program Data' : 'Upload MBBS Program Data')
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
} 