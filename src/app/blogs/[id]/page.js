'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { FaArrowLeft, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaTelegram, FaEnvelope, FaLink } from 'react-icons/fa'
import parse from 'html-react-parser'
export default function BlogPost() {
    const [blogData, setBlogData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [shareUrl, setShareUrl] = useState('')
    const params = useParams()

    // Demo blog data
    const demoBlogs = {
        '1': {
            id: '1',
            title: 'MBBS in Russia: Complete Guide 2025',
            content: `
                <p>Russia has become one of the most popular destinations for Indian students pursuing MBBS abroad. With its world-class medical universities, affordable education, and recognized degrees, Russia offers excellent opportunities for medical aspirants.</p>
                
                <h2>Why Choose Russia for MBBS?</h2>
                <p>Russia's medical education system is highly regarded globally, with universities that are recognized by WHO, MCI, and other international medical councils. The country offers a perfect blend of quality education and affordable costs.</p>
                
                <h3>Key Advantages</h3>
                <ul>
                    <li><strong>Affordable Education:</strong> Total cost including tuition and living expenses ranges from 15-25 lakhs INR</li>
                    <li><strong>No Entrance Exam:</strong> Direct admission based on 12th marks and NEET qualification</li>
                    <li><strong>English Medium:</strong> Courses taught in English for international students</li>
                    <li><strong>Global Recognition:</strong> Degrees recognized by WHO, MCI, and other medical councils</li>
                    <li><strong>Modern Infrastructure:</strong> State-of-the-art medical facilities and equipment</li>
                </ul>
                
                <h3>Top Medical Universities in Russia</h3>
                <p>Some of the most prestigious medical universities in Russia include:</p>
                <ul>
                    <li>Peoples' Friendship University (RUDN)</li>
                    <li>Kazan Federal University</li>
                    <li>First Moscow State Medical University</li>
                    <li>Volgograd State Medical University</li>
                    <li>Crimea Federal University</li>
                </ul>
                
                <h2>Admission Process</h2>
                <p>The admission process for MBBS in Russia is straightforward and student-friendly. Students need to have completed 12th with PCB subjects and qualified NEET exam. The application process typically takes 2-3 months.</p>
                
                <h3>Required Documents</h3>
                <ul>
                    <li>10th and 12th mark sheets</li>
                    <li>NEET scorecard</li>
                    <li>Passport copy</li>
                    <li>Medical fitness certificate</li>
                    <li>Birth certificate</li>
                </ul>
                
                <h2>Student Life and Accommodation</h2>
                <p>Russian universities provide excellent accommodation facilities for international students. Most universities have hostels with modern amenities, and the cost of living is relatively affordable compared to other European countries.</p>
                
                <h3>Career Prospects</h3>
                <p>After completing MBBS from Russia, students can practice medicine in India after clearing the FMGE exam, or pursue further studies in various countries. The degree opens doors to opportunities worldwide.</p>
                
                <p>In conclusion, MBBS in Russia is an excellent choice for Indian students looking for quality medical education at an affordable cost with global recognition.</p>
            `,
            author: 'MBBSYatra',
            date: '2024-04-01',
            readTime: '8',
            category: 'MBBS Abroad',
            image: 'https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg'
        },
        '2': {
            id: '2',
            title: 'Top Medical Colleges in Rajasthan',
            content: `
                <p>Rajasthan offers excellent opportunities for medical education with its prestigious government and private medical colleges. The state has emerged as a preferred destination for MBBS aspirants due to its quality education and affordable fee structure.</p>
                
                <h2>Government Medical Colleges</h2>
                <p>Rajasthan boasts several top-ranked government medical colleges that provide quality education at subsidized rates. These colleges are affiliated with Rajasthan University of Health Sciences and follow the curriculum prescribed by MCI.</p>
                
                <h3>Top Government Colleges</h3>
                <ul>
                    <li><strong>Sawai Man Singh Medical College, Jaipur:</strong> Established in 1947, NIRF Rank 28</li>
                    <li><strong>Dr. Sampurnanand Medical College, Jodhpur:</strong> Established in 1965, NIRF Rank 35</li>
                    <li><strong>RNT Medical College, Udaipur:</strong> Established in 1962, NIRF Rank 42</li>
                    <li><strong>Sardar Patel Medical College, Bikaner:</strong> Established in 1965, NIRF Rank 48</li>
                    <li><strong>Government Medical College, Kota:</strong> Established in 2008, NIRF Rank 52</li>
                </ul>
                
                <h3>Private Medical Colleges</h3>
                <p>Rajasthan also has several reputed private medical colleges that offer quality education with modern infrastructure and facilities.</p>
                
                <h2>Admission Process</h2>
                <p>Admission to medical colleges in Rajasthan is conducted through NEET UG counseling. The process includes:</p>
                <ul>
                    <li>NEET UG qualification</li>
                    <li>Online registration for counseling</li>
                    <li>Choice filling and locking</li>
                    <li>Seat allotment based on merit</li>
                    <li>Document verification and admission</li>
                </ul>
                
                <h3>Fee Structure</h3>
                <p>Government colleges have a very affordable fee structure, typically ranging from 2-3 lakhs per year. Private colleges have higher fees but offer additional facilities and infrastructure.</p>
                
                <h2>Career Opportunities</h2>
                <p>Graduates from Rajasthan medical colleges have excellent career prospects. They can pursue:</p>
                <ul>
                    <li>Postgraduate studies in various specialties</li>
                    <li>Government medical services</li>
                    <li>Private practice</li>
                    <li>Research and academics</li>
                    <li>International opportunities</li>
                </ul>
                
                <p>Rajasthan's medical colleges provide a solid foundation for a successful medical career with their quality education, experienced faculty, and excellent clinical exposure.</p>
            `,
            author: 'MBBSYatra',
            date: '2024-03-28',
            readTime: '6',
            category: 'MBBS in India',
            image: 'https://cdn.pixabay.com/photo/2019/07/03/09/41/national-history-museum-4314035_1280.jpg'
        },
        '3': {
            id: '3',
            title: 'NEET UG 2025: Preparation Strategy',
            content: `
                <p>NEET UG 2025 is the gateway to medical education in India. With increasing competition, a strategic preparation approach is essential for success. This comprehensive guide will help you prepare effectively for the exam.</p>
                
                <h2>Understanding NEET UG 2025</h2>
                <p>NEET (National Eligibility cum Entrance Test) is the single entrance exam for admission to MBBS, BDS, and other medical courses in India. The exam tests candidates on Physics, Chemistry, and Biology subjects.</p>
                
                <h3>Exam Pattern Overview</h3>
                <ul>
                    <li><strong>Total Questions:</strong> 200 questions (180 to be attempted)</li>
                    <li><strong>Duration:</strong> 3 hours 20 minutes</li>
                    <li><strong>Subjects:</strong> Physics (50), Chemistry (50), Biology (100)</li>
                    <li><strong>Marking:</strong> +4 for correct, -1 for incorrect</li>
                    <li><strong>Mode:</strong> Computer-based test</li>
                </ul>
                
                <h3>Preparation Strategy</h3>
                <p>Success in NEET requires a balanced approach to all three subjects. Focus on:</p>
                <ul>
                    <li><strong>Conceptual Understanding:</strong> Build strong fundamentals in all subjects</li>
                    <li><strong>Regular Practice:</strong> Solve previous year papers and mock tests</li>
                    <li><strong>Time Management:</strong> Practice speed and accuracy</li>
                    <li><strong>Revision:</strong> Regular revision of important topics</li>
                </ul>
                
                <h2>Subject-wise Preparation</h2>
                <p>Each subject requires a different approach:</p>
                
                <h3>Physics</h3>
                <p>Focus on numerical problems, formulas, and their applications. Practice regularly with NCERT and reference books.</p>
                
                <h3>Chemistry</h3>
                <p>Balance between physical, organic, and inorganic chemistry. Focus on mechanisms and reactions.</p>
                
                <h3>Biology</h3>
                <p>Most scoring subject. Focus on NCERT thoroughly and practice diagrams and labeling.</p>
                
                <h2>Study Plan</h2>
                <p>Create a structured study plan that allocates time based on your strengths and weaknesses. Regular mock tests will help you track progress and identify areas for improvement.</p>
                
                <h3>Important Tips</h3>
                <ul>
                    <li>Start preparation early</li>
                    <li>Follow NCERT books thoroughly</li>
                    <li>Practice previous year questions</li>
                    <li>Take regular mock tests</li>
                    <li>Maintain good health and sleep</li>
                </ul>
                
                <p>With dedicated preparation and the right strategy, success in NEET UG 2025 is achievable.</p>
            `,
            author: 'MBBSYatra',
            date: '2024-03-25',
            readTime: '10',
            category: 'Exam Prep',
            image: 'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_640.jpg'
        },
        '4': {
            id: '4',
            title: 'MBBS in Georgia: Admission Process',
            content: `
                <p>Georgia has emerged as a popular destination for MBBS studies among Indian students. With its European standards of education, affordable costs, and English-medium instruction, Georgia offers excellent opportunities for medical aspirants.</p>
                
                <h2>Why Study MBBS in Georgia?</h2>
                <p>Georgia's medical universities are recognized by WHO, MCI, and other international medical councils. The country offers a safe environment, modern infrastructure, and a multicultural student community.</p>
                
                <h3>Key Benefits</h3>
                <ul>
                    <li><strong>Affordable Education:</strong> Total cost around 20-30 lakhs INR for complete course</li>
                    <li><strong>No Entrance Exam:</strong> Direct admission based on 12th marks</li>
                    <li><strong>English Medium:</strong> Complete course taught in English</li>
                    <li><strong>European Standards:</strong> High-quality education following European standards</li>
                    <li><strong>Safe Environment:</strong> One of the safest countries for international students</li>
                </ul>
                
                <h3>Top Medical Universities</h3>
                <ul>
                    <li>Tbilisi State Medical University</li>
                    <li>Batumi Shota Rustaveli State University</li>
                    <li>Akaki Tsereteli State University</li>
                    <li>Georgian National University</li>
                </ul>
                
                <h2>Admission Requirements</h2>
                <p>The admission process is straightforward and student-friendly:</p>
                <ul>
                    <li>12th standard completion with PCB subjects</li>
                    <li>Minimum 50% marks in PCB</li>
                    <li>Age between 17-25 years</li>
                    <li>Valid passport</li>
                    <li>Medical fitness certificate</li>
                </ul>
                
                <h3>Required Documents</h3>
                <ul>
                    <li>10th and 12th mark sheets</li>
                    <li>Birth certificate</li>
                    <li>Passport copy</li>
                    <li>Medical fitness certificate</li>
                    <li>Passport size photographs</li>
                </ul>
                
                <h2>Course Duration and Structure</h2>
                <p>The MBBS course in Georgia is 6 years long, including 1 year of internship. The curriculum follows international standards and includes:</p>
                <ul>
                    <li>Pre-clinical studies (Years 1-2)</li>
                    <li>Clinical studies (Years 3-5)</li>
                    <li>Internship (Year 6)</li>
                </ul>
                
                <h3>Career Prospects</h3>
                <p>After completing MBBS from Georgia, students can:</p>
                <ul>
                    <li>Practice in India after clearing FMGE</li>
                    <li>Pursue postgraduate studies abroad</li>
                    <li>Work in various countries</li>
                    <li>Join research and academics</li>
                </ul>
                
                <p>Georgia offers an excellent opportunity for Indian students to pursue quality medical education in a European country at an affordable cost.</p>
            `,
            author: 'MBBSYatra',
            date: '2024-03-20',
            readTime: '7',
            category: 'MBBS Abroad',
            image: 'https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg'
        },
        '5': {
            id: '5',
            title: 'MBBS vs BAMS: Which to Choose?',
            content: `
                <p>Choosing between MBBS and BAMS is a crucial decision for medical aspirants. Both courses offer different approaches to medicine and have their own advantages. This comprehensive comparison will help you make an informed decision.</p>
                
                <h2>Understanding the Differences</h2>
                <p>MBBS (Bachelor of Medicine and Bachelor of Surgery) follows modern allopathic medicine, while BAMS (Bachelor of Ayurvedic Medicine and Surgery) is based on traditional Ayurvedic principles. Both are recognized medical degrees in India.</p>
                
                <h3>Course Duration and Structure</h3>
                <ul>
                    <li><strong>MBBS:</strong> 5.5 years (4.5 years + 1 year internship)</li>
                    <li><strong>BAMS:</strong> 5.5 years (4.5 years + 1 year internship)</li>
                    <li><strong>MBBS:</strong> Modern medical curriculum</li>
                    <li><strong>BAMS:</strong> Ayurvedic medicine curriculum</li>
                </ul>
                
                <h3>Admission Process</h3>
                <ul>
                    <li><strong>MBBS:</strong> NEET UG qualification required</li>
                    <li><strong>BAMS:</strong> NEET UG qualification required</li>
                    <li><strong>MBBS:</strong> Higher competition and cutoffs</li>
                    <li><strong>BAMS:</strong> Relatively lower competition</li>
                </ul>
                
                <h2>Career Opportunities</h2>
                <p>Both courses offer diverse career opportunities:</p>
                
                <h3>MBBS Career Options</h3>
                <ul>
                    <li>Allopathic medical practice</li>
                    <li>Specialization in various fields</li>
                    <li>Research and academics</li>
                    <li>Government medical services</li>
                    <li>Private practice</li>
                </ul>
                
                <h3>BAMS Career Options</h3>
                <ul>
                    <li>Ayurvedic medical practice</li>
                    <li>Wellness and spa centers</li>
                    <li>Ayurvedic research</li>
                    <li>Government Ayurvedic services</li>
                    <li>Herbal medicine industry</li>
                </ul>
                
                <h2>Salary and Growth</h2>
                <p>Salary prospects vary based on specialization and experience:</p>
                <ul>
                    <li><strong>MBBS:</strong> Generally higher starting salaries</li>
                    <li><strong>BAMS:</strong> Growing demand in wellness sector</li>
                    <li><strong>Both:</strong> Good growth potential with experience</li>
                </ul>
                
                <h3>Factors to Consider</h3>
                <p>When choosing between MBBS and BAMS, consider:</p>
                <ul>
                    <li>Your interest in modern vs traditional medicine</li>
                    <li>Career goals and aspirations</li>
                    <li>Financial considerations</li>
                    <li>Market demand and opportunities</li>
                    <li>Personal values and beliefs</li>
                </ul>
                
                <h2>Conclusion</h2>
                <p>Both MBBS and BAMS are excellent career choices with their own unique advantages. The decision should be based on your interests, career goals, and personal preferences. Both fields offer rewarding careers in healthcare.</p>
            `,
            author: 'MBBSYatra',
            date: '2024-03-15',
            readTime: '9',
            category: 'Career Guidance',
            image: 'https://cdn.pixabay.com/photo/2019/07/03/09/41/national-history-museum-4314035_1280.jpg'
        },
        '6': {
            id: '6',
            title: 'Medical College Admission Counseling',
            content: `
                <p>Professional counseling plays a crucial role in helping students make informed decisions about their medical education. With the increasing complexity of admission processes and numerous options available, expert guidance can make a significant difference.</p>
                
                <h2>Why Professional Counseling Matters</h2>
                <p>Medical college admission counseling helps students navigate through the complex admission process, understand various options, and make decisions that align with their career goals and financial capabilities.</p>
                
                <h3>Benefits of Professional Counseling</h3>
                <ul>
                    <li><strong>Expert Guidance:</strong> Professional counselors have extensive knowledge of admission processes</li>
                    <li><strong>Personalized Advice:</strong> Tailored recommendations based on individual profile</li>
                    <li><strong>Updated Information:</strong> Latest information about colleges, courses, and admission criteria</li>
                    <li><strong>Documentation Support:</strong> Help with application forms and required documents</li>
                    <li><strong>Career Planning:</strong> Long-term career guidance and planning</li>
                </ul>
                
                <h3>Services Offered</h3>
                <p>Professional counseling services typically include:</p>
                <ul>
                    <li>Profile assessment and analysis</li>
                    <li>College and course selection guidance</li>
                    <li>Application process assistance</li>
                    <li>Document preparation support</li>
                    <li>Interview preparation</li>
                    <li>Career counseling and planning</li>
                </ul>
                
                <h2>Choosing the Right Counselor</h2>
                <p>Selecting the right counselor is crucial for getting the best guidance:</p>
                
                <h3>Qualities to Look For</h3>
                <ul>
                    <li><strong>Experience:</strong> Years of experience in medical education counseling</li>
                    <li><strong>Expertise:</strong> Specialized knowledge in medical admissions</li>
                    <li><strong>Reputation:</strong> Good track record and positive reviews</li>
                    <li><strong>Transparency:</strong> Clear communication about services and fees</li>
                    <li><strong>Support:</strong> Ongoing support throughout the admission process</li>
                </ul>
                
                <h3>Red Flags to Avoid</h3>
                <ul>
                    <li>Unrealistic promises and guarantees</li>
                    <li>Lack of transparency in fees</li>
                    <li>No proper documentation or contracts</li>
                    <li>Pressure tactics and aggressive marketing</li>
                    <li>Lack of proper credentials and experience</li>
                </ul>
                
                <h2>Counseling Process</h2>
                <p>A typical counseling process includes:</p>
                <ol>
                    <li><strong>Initial Assessment:</strong> Understanding student's profile and requirements</li>
                    <li><strong>Options Analysis:</strong> Exploring various colleges and courses</li>
                    <li><strong>Shortlisting:</strong> Creating a list of suitable options</li>
                    <li><strong>Application Support:</strong> Assistance with applications and documents</li>
                    <li><strong>Follow-up:</strong> Regular updates and guidance throughout the process</li>
                </ol>
                
                <h3>Cost Considerations</h3>
                <p>Counseling fees vary based on services offered. Consider the value provided and ensure transparency in pricing. Some counselors offer package deals while others charge per service.</p>
                
                <h2>Success Stories</h2>
                <p>Professional counseling has helped thousands of students achieve their medical education dreams. Success stories include students who:</p>
                <ul>
                    <li>Got admission in top government colleges</li>
                    <li>Secured scholarships and financial aid</li>
                    <li>Successfully pursued MBBS abroad</li>
                    <li>Made informed career choices</li>
                    <li>Avoided common admission mistakes</li>
                </ul>
                
                <p>Professional counseling is an investment in your future that can help you make the right decisions and achieve your medical education goals.</p>
            `,
            author: 'MBBSYatra',
            date: '2024-03-10',
            readTime: '5',
            category: 'Admission Guidance',
            image: 'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_640.jpg'
        }
    }

    useEffect(() => {
        // Set the share URL when component mounts
        if (typeof window !== 'undefined') {
            setShareUrl(window.location.href)
        }

        // Simulate loading delay
        const timer = setTimeout(() => {
            const blogId = params.id
            const blog = demoBlogs[blogId]

            if (blog) {
                setBlogData(blog)
            }
            setLoading(false)
        }, 500)

        return () => clearTimeout(timer)
    }, [params.id])

    // Function to handle social media sharing
    const handleShare = (platform) => {
        const title = blogData?.title || 'MBBSYatra Blog Post'
        const url = encodeURIComponent(shareUrl)

        let shareLink = ''

        switch (platform) {
            case 'facebook':
                shareLink = `https://www.facebook.com/sharer/sharer.php?u=${url}`
                break
            case 'twitter':
                shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${url}`
                break
            case 'linkedin':
                shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
                break
            case 'whatsapp':
                shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + shareUrl)}`
                break
            case 'telegram':
                shareLink = `https://t.me/share/url?url=${url}&text=${encodeURIComponent(title)}`
                break
            case 'email':
                shareLink = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent('Check out this article: ' + shareUrl)}`
                break
            default:
                break
        }

        if (shareLink) {
            window.open(shareLink, '_blank', 'noopener,noreferrer')
        }
    }

    // Function to copy link to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl)
            .then(() => {
                alert('Link copied to clipboard!')
            })
            .catch((err) => {
                console.error('Failed to copy link: ', err)
            })
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        )
    }

    if (!blogData) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                <h1 className="text-2xl font-bold text-slate-800 mb-4">
                    Blog not found
                </h1>
                <Link
                    href="/blogs"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                    <FaArrowLeft className="mr-2" />
                    Back to Blogs
                </Link>
            </div>
        )
    }

    return (
        <article className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen py-16">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1400px]">
                {/* Back Button */}
                <Link
                    href="/blogs"
                    className="inline-flex items-center text-slate-600 hover:text-blue-700 mb-8 group transition-colors"
                >
                    <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Blogs
                </Link>

                {/* Blog Header */}
                <header className="mb-8">
                    <div className="mb-4">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                            {blogData.category}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        {blogData.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-6">
                        <div className="flex items-center">
                            <i className="bi bi-person-circle mr-2"></i>
                            {blogData.author}
                        </div>
                        <div className="flex items-center">
                            <i className="bi bi-calendar3 mr-2"></i>
                            {new Date(blogData.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </div>
                        <div className="flex items-center">
                            <i className="bi bi-clock mr-2"></i>
                            {blogData.readTime} min read
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                {blogData.image && (
                    <div className="relative h-[300px] md:h-[400px] w-full mb-8 rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={blogData.image}
                            alt={blogData.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                {/* Blog Content */}
                <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg">
                    <div
                        className="prose prose-lg max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-strong:text-slate-800 prose-ul:text-slate-600"
                        dangerouslySetInnerHTML={{ __html: blogData.content }}
                    />

                    {/* Social Share Section */}
                    <div className="mt-12 pt-8 border-t border-slate-200">
                        <h3 className="text-xl font-semibold mb-4 text-slate-800">Share this article</h3>

                        <div className="flex flex-wrap gap-3">
                            {/* Facebook */}
                            <button
                                onClick={() => handleShare('facebook')}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                                aria-label="Share on Facebook"
                            >
                                <FaFacebook />
                            </button>

                            {/* Twitter/X */}
                            <button
                                onClick={() => handleShare('twitter')}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
                                aria-label="Share on Twitter/X"
                            >
                                <FaTwitter />
                            </button>

                            {/* LinkedIn */}
                            <button
                                onClick={() => handleShare('linkedin')}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                                aria-label="Share on LinkedIn"
                            >
                                <FaLinkedin />
                            </button>

                            {/* WhatsApp */}
                            <button
                                onClick={() => handleShare('whatsapp')}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
                                aria-label="Share on WhatsApp"
                            >
                                <FaWhatsapp />
                            </button>

                            {/* Telegram */}
                            <button
                                onClick={() => handleShare('telegram')}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                                aria-label="Share on Telegram"
                            >
                                <FaTelegram />
                            </button>

                            {/* Email */}
                            <button
                                onClick={() => handleShare('email')}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-600 text-white hover:bg-slate-700 transition-colors"
                                aria-label="Share via Email"
                            >
                                <FaEnvelope />
                            </button>

                            {/* Copy Link */}
                            <button
                                onClick={copyToClipboard}
                                className="flex items-center justify-center px-4 h-10 rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors"
                                aria-label="Copy Link"
                            >
                                <FaLink className="mr-1" />
                                Copy Link
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}