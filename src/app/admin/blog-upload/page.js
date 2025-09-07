'use client'
import { useState } from 'react'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { app } from '@/firebase'
import { FaPlus, FaTrash, FaFileAlt, FaCheckCircle, FaExclamationTriangle, FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, FaHeading, FaQuoteLeft, FaLink, FaUnlink } from 'react-icons/fa'

export default function BlogUploadPage() {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({ type: '', text: '' })

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        content: '',
        author: '',
        date: '',
        readTime: '',
        category: '',
        image: '',
    })

    // Blog categories
    const categories = [
        'MBBS Abroad',
        'MBBS in India',
        'Exam Prep',
        'Career Guidance',
        'Admission Guidance',
        'Study Tips',
        'University Reviews',
        'Student Life'
    ]

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
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }))
        }
    }

    // Rich text editor functions
    const insertText = (tag) => {
        const textarea = document.getElementById('content')
        const start = textarea.selectionStart
        const end = textarea.selectionEnd
        const selectedText = formData.content.substring(start, end)

        let replacement = ''
        let cursorOffset = 0

        switch (tag) {
            case 'bold':
                replacement = `<strong>${selectedText || 'Bold text'}</strong>`
                cursorOffset = selectedText ? 0 : 8
                break
            case 'italic':
                replacement = `<em>${selectedText || 'Italic text'}</em>`
                cursorOffset = selectedText ? 0 : 7
                break
            case 'underline':
                replacement = `<u>${selectedText || 'Underlined text'}</u>`
                cursorOffset = selectedText ? 0 : 3
                break
            case 'h2':
                replacement = `<h2>${selectedText || 'Heading 2'}</h2>`
                cursorOffset = selectedText ? 0 : 9
                break
            case 'h3':
                replacement = `<h3>${selectedText || 'Heading 3'}</h3>`
                cursorOffset = selectedText ? 0 : 9
                break
            case 'ul':
                replacement = `<ul>\n    <li>${selectedText || 'List item'}</li>\n</ul>`
                cursorOffset = selectedText ? 0 : 8
                break
            case 'ol':
                replacement = `<ol>\n    <li>${selectedText || 'List item'}</li>\n</ol>`
                cursorOffset = selectedText ? 0 : 8
                break
            case 'blockquote':
                replacement = `<blockquote>${selectedText || 'Quote text'}</blockquote>`
                cursorOffset = selectedText ? 0 : 13
                break
            case 'link':
                replacement = `<a href="https://example.com">${selectedText || 'Link text'}</a>`
                cursorOffset = selectedText ? 0 : 4
                break
            default:
                return
        }

        const newContent = formData.content.substring(0, start) + replacement + formData.content.substring(end)
        setFormData(prev => ({ ...prev, content: newContent }))

        // Set cursor position after insertion
        setTimeout(() => {
            const newCursorPos = start + replacement.length - cursorOffset
            textarea.setSelectionRange(newCursorPos, newCursorPos)
            textarea.focus()
        }, 0)
    }

    const validateForm = () => {
        const errors = []

        if (!formData.title.trim()) errors.push('Title is required')
        if (!formData.slug.trim()) errors.push('Slug is required')
        if (!formData.content.trim()) errors.push('Content is required')
        if (!formData.author.trim()) errors.push('Author is required')
        if (!formData.date.trim()) errors.push('Date is required')
        if (!formData.readTime.trim()) errors.push('Read time is required')
        if (!formData.category.trim()) errors.push('Category is required')
        if (!formData.image.trim()) errors.push('Image URL is required')
        if (!formData.excerpt.trim()) errors.push('Excerpt is required')

        // Validate read time is a number
        if (isNaN(formData.readTime) || parseInt(formData.readTime) <= 0) {
            errors.push('Read time must be a positive number')
        }

        // Validate date format
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/
        if (!dateRegex.test(formData.date)) {
            errors.push('Date must be in YYYY-MM-DD format')
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
            const db = getFirestore(app, 'hellodoctor')

            // Clean up the data before submission
            const cleanedData = {
                ...formData,
                readTime: parseInt(formData.readTime),
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
                status: 'published'
            }

            await addDoc(collection(db, "blogs"), cleanedData)

            setMessage({
                type: 'success',
                text: 'Blog post uploaded successfully!'
            })

            // Reset form
            setFormData({
                title: '',
                slug: '',
                content: '',
                author: '',
                date: '',
                readTime: '',
                category: '',
                image: '',
                excerpt: ''
            })

        } catch (error) {
            console.error("Error uploading blog:", error)
            setMessage({
                type: 'error',
                text: 'Failed to upload blog. Please try again.'
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
                        <FaFileAlt className="mr-3 text-blue-600" />
                        Upload Blog Post
                    </h1>
                    <p className="text-gray-600">Add new blog posts to the website</p>
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
                                    Title *
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter blog title"
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
                                    required
                                />
                            </div>

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
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Author *
                                </label>
                                <input
                                    type="text"
                                    name="author"
                                    value={formData.author}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="e.g., Hello Doctor"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Date *
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Read Time (minutes) *
                                </label>
                                <input
                                    type="number"
                                    name="readTime"
                                    value={formData.readTime}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="8"
                                    min="1"
                                    required
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Image URL *
                                </label>
                                <input
                                    type="url"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="https://example.com/image.jpg"
                                    required
                                />
                            </div>

                            {/* <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Excerpt *
                                </label>
                                <textarea
                                    name="excerpt"
                                    value={formData.excerpt}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Brief description of the blog post..."
                                    required
                                />
                            </div> */}
                        </div>
                    </div>

                    {/* Content Editor */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Content Editor
                        </h2>

                        {/* Editor Toolbar */}
                        <div className="border border-gray-300 rounded-t-lg p-3 bg-gray-50 flex flex-wrap gap-2">
                            <button
                                type="button"
                                onClick={() => insertText('bold')}
                                className="p-2 hover:bg-gray-200 rounded transition-colors"
                                title="Bold"
                            >
                                <FaBold />
                            </button>
                            <button
                                type="button"
                                onClick={() => insertText('italic')}
                                className="p-2 hover:bg-gray-200 rounded transition-colors"
                                title="Italic"
                            >
                                <FaItalic />
                            </button>
                            <button
                                type="button"
                                onClick={() => insertText('underline')}
                                className="p-2 hover:bg-gray-200 rounded transition-colors"
                                title="Underline"
                            >
                                <FaUnderline />
                            </button>
                            <div className="w-px h-6 bg-gray-300 mx-2"></div>
                            <button
                                type="button"
                                onClick={() => insertText('h2')}
                                className="p-2 hover:bg-gray-200 rounded transition-colors"
                                title="Heading 2"
                            >
                                <FaHeading />
                            </button>
                            <button
                                type="button"
                                onClick={() => insertText('h3')}
                                className="p-2 hover:bg-gray-200 rounded transition-colors"
                                title="Heading 3"
                            >
                                <FaHeading className="text-sm" />
                            </button>
                            <div className="w-px h-6 bg-gray-300 mx-2"></div>
                            <button
                                type="button"
                                onClick={() => insertText('ul')}
                                className="p-2 hover:bg-gray-200 rounded transition-colors"
                                title="Unordered List"
                            >
                                <FaListUl />
                            </button>
                            <button
                                type="button"
                                onClick={() => insertText('ol')}
                                className="p-2 hover:bg-gray-200 rounded transition-colors"
                                title="Ordered List"
                            >
                                <FaListOl />
                            </button>
                            <div className="w-px h-6 bg-gray-300 mx-2"></div>
                            <button
                                type="button"
                                onClick={() => insertText('blockquote')}
                                className="p-2 hover:bg-gray-200 rounded transition-colors"
                                title="Blockquote"
                            >
                                <FaQuoteLeft />
                            </button>
                            <button
                                type="button"
                                onClick={() => insertText('link')}
                                className="p-2 hover:bg-gray-200 rounded transition-colors"
                                title="Link"
                            >
                                <FaLink />
                            </button>
                        </div>

                        {/* Content Textarea */}
                        <div className="border border-gray-300 rounded-b-lg">
                            <textarea
                                id="content"
                                name="content"
                                value={formData.content}
                                onChange={handleInputChange}
                                rows={20}
                                className="w-full px-4 py-3 border-0 focus:ring-0 focus:outline-none resize-none"
                                placeholder="Write your blog content here... You can use HTML tags or the toolbar above to format your content."
                                required
                            />
                        </div>

                        {/* Content Preview */}
                        {formData.content && (
                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                <h3 className="text-sm font-semibold text-gray-700 mb-2">Preview:</h3>
                                <div
                                    className="prose prose-sm max-w-none"
                                    dangerouslySetInnerHTML={{ __html: formData.content }}
                                />
                            </div>
                        )}
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
                            {loading ? 'Uploading...' : 'Upload Blog Post'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
} 