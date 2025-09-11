'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { collection, getDocs, query, where, getFirestore, orderBy } from 'firebase/firestore'
import { app } from '@/firebase'
import ClatiansLogo from '../../public/CLATiansLogo.webp'
import mbbslogo from '../../public/mbbslogo.png'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isStudyIndiaOpen, setIsStudyIndiaOpen] = useState(false)
  const [isMbbsAbroadOpen, setIsMbbsAbroadOpen] = useState(false)
  const [isStudyAbroadOpen, setIsStudyAbroadOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [selectedStudyType, setSelectedStudyType] = useState('medical')
  const [selectedSubcategory, setSelectedSubcategory] = useState(null)
  const [expandedMobileType, setExpandedMobileType] = useState(null)
  const [expandedMobileSubcategory, setExpandedMobileSubcategory] = useState(null)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [notifications, setNotifications] = useState([])
  const [fetchLoading, setFetchLoading] = useState(false)
  const [mbbsPrograms, setMbbsPrograms] = useState([])
  const [studyAbroadPrograms, setStudyAbroadPrograms] = useState([])
  const [mbbsAbroadPrograms, setMbbsAbroadPrograms] = useState([])

  // Generate study types from fetched data
  const generateStudyIndiaTypes = () => {
    const types = {};

    console.log('Generating study types from programs:', mbbsPrograms);

    // First, group by subcategory
    mbbsPrograms.forEach(program => {
      if (program.subcategory && !types[program.subcategory]) {
        types[program.subcategory] = {
          label: program.subcategory.toUpperCase(),
          subcategories: {}
        };
      }
    });

    // Then, group by subsubcategory within each subcategory
    mbbsPrograms.forEach(program => {
      if (program.subcategory && types[program.subcategory]) {
        // Use consistent field name - check both possible field names
        const subSubcategoryValue = program.subSubcategory || program.subsubcategory || 'general';
        const subcategoryKey = subSubcategoryValue.toLowerCase().replace(/\s+/g, '-');

        console.log('Processing program:', {
          title: program.title,
          subcategory: program.subcategory,
          subSubcategory: program.subSubcategory,
          subsubcategory: program.subsubcategory,
          subSubcategoryValue,
          subcategoryKey
        });

        if (!types[program.subcategory].subcategories[subcategoryKey]) {
          types[program.subcategory].subcategories[subcategoryKey] = {
            name: subSubcategoryValue,
            programs: []
          };
        }

        // Add the program to the appropriate subsubcategory
        const programData = {
          name: program.title,
          href: `/mbbs-india/${program.slug}`,
          slug: program.slug
        };

        // Check if program already exists
        const existingProgram = types[program.subcategory].subcategories[subcategoryKey].programs.find(p => p.name === program.title);
        if (!existingProgram) {
          types[program.subcategory].subcategories[subcategoryKey].programs.push(programData);
        }
      }
    });

    console.log('Final generated types:', types);
    return types;
  };

  const studyIndiaTypes = Object.keys(generateStudyIndiaTypes()).length > 0 ? generateStudyIndiaTypes() : {
    medical: {
      label: 'MEDICAL',
      subcategories: {
        mbbs: {
          name: 'MBBS',
          programs: [
            { name: 'MBBS in Rajasthan', href: '/mbbs-india/mbbs-rajasthan', slug: 'mbbs-rajasthan' },
            { name: 'MBBS in Maharashtra', href: '/mbbs-india/mbbs-maharashtra', slug: 'mbbs-maharashtra' },
            { name: 'MBBS in Bihar', href: '/mbbs-india/mbbs-bihar', slug: 'mbbs-bihar' }
          ]
        },
        bds: {
          name: 'BDS',
          programs: [
            { name: 'BDS in Rajasthan', href: '/mbbs-india/bds-rajasthan', slug: 'bds-rajasthan' },
            { name: 'BDS in Maharashtra', href: '/mbbs-india/bds-maharashtra', slug: 'bds-maharashtra' },
            { name: 'BDS in Bihar', href: '/mbbs-india/bds-bihar', slug: 'bds-bihar' }
          ]
        },
        bams: {
          name: 'BAMS',
          programs: [
            { name: 'BAMS in Rajasthan', href: '/mbbs-india/bams-rajasthan', slug: 'bams-rajasthan' }
          ]
        }
      }
    },
    engineering: {
      label: 'ENGINEERING',
      subcategories: {
        biotechnology: {
          name: 'Biotechnology Engineering',
          programs: [
            { name: 'Biotechnology Engineering', href: '/mbbs-india/biotechnology-engineering', slug: 'biotechnology-engineering' }
          ]
        },
        aerospace: {
          name: 'Aerospace Engineering',
          programs: [
            { name: 'Aerospace Engineering', href: '/mbbs-india/aerospace-engineering', slug: 'aerospace-engineering' }
          ]
        }
      }
    }
  };

  // Generate MBBS Abroad courses from fetched data
  const mbbsAbroadCourses = mbbsAbroadPrograms.length > 0 ? mbbsAbroadPrograms.map(program => ({
    name: program.title,
    href: `/mbbs-india/${program.slug}`
  })) : [
    { name: 'MBBS in Nepal', href: '/mbbs-rajasthan' },
    { name: 'MBBS in Russia', href: '/mbbs-rajasthan' }
  ];

  // Generate Study Abroad courses from fetched data
  const studyAbroadCourses = studyAbroadPrograms.length > 0 ? studyAbroadPrograms.map(program => ({
    name: program.title,
    href: `/mbbs-india/${program.slug}`
  })) : [
    { name: 'Study in US', href: '/mbbs-rajasthan' },
    { name: 'Study in UK', href: '/mbbs-rajasthan' }
  ];

  const aboutSubmenus = [
    { name: 'Photo Gallery', href: '/about/gallery' }
  ]

  const pathname = usePathname()

  // Fetch data from Firebase
  useEffect(() => {
    const db = getFirestore(app, 'hellodoctor')

    const fetchData = async () => {
      setFetchLoading(true);
      try {
        // Fetch notifications
        const notificationsSnapshot = await getDocs(collection(db, "notifications"));
        const notificationsData = notificationsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setNotifications(notificationsData);

        // Fetch MBBS programs
        const mbbsProgramsSnapshot = await getDocs(collection(db, "mbbsPrograms"));
        const mbbsProgramsData = mbbsProgramsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log('Fetched programs:', mbbsProgramsData);
        setMbbsPrograms(mbbsProgramsData);

        // Filter programs by category
        const studyInIndia = mbbsProgramsData.filter(program => program.category === 'study-in-india');
        const mbbsAbroad = mbbsProgramsData.filter(program => program.category === 'mbbs-abroad');
        const studyAbroad = mbbsProgramsData.filter(program => program.category === 'study-abroad');

        console.log('Fetched programs:', {
          total: mbbsProgramsData.length,
          studyInIndia: studyInIndia.length,
          mbbsAbroad: mbbsAbroad.length,
          studyAbroad: studyAbroad.length
        });

        setMbbsPrograms(studyInIndia);
        setMbbsAbroadPrograms(mbbsAbroad);
        setStudyAbroadPrograms(studyAbroad);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setFetchLoading(false);
      }
    };

    fetchData();
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsStudyIndiaOpen(false)
    setIsMbbsAbroadOpen(false)
    setIsStudyAbroadOpen(false)
    setIsAboutOpen(false)
    setExpandedMobileType(null)
    setExpandedMobileSubcategory(null)
    setActiveDropdown(null)
    setSelectedSubcategory(null)
  }, [pathname])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us', hasDropdown: false, isAbout: true },
    { href: '/study-india', label: 'Study in India', hasDropdown: true, isStudyIndia: true },
    { href: '/mbbs-abroad', label: 'MBBS Abroad', hasDropdown: true, isMbbsAbroad: true },
    { href: '/study-abroad', label: 'Study Abroad', hasDropdown: true, isStudyAbroad: true },
    { href: '/blogs', label: 'Blog' },
    { href: '/careers', label: 'Careers' },
    { href: '/contactUs', label: 'Contact Us' }
  ]

  const isActive = (path) => {
    if (path === '/' && pathname !== '/') return false
    return pathname.startsWith(path)
  }

  return (
    <>
      {/* Top Navbar */}
      <div className="container mx-auto px-4 bg-gradient-to-r from-teal-50 to-green-50">
        <div className="flex flex-col lg:flex-row justify-between items-center py-2 border-b border-teal-200">
          {/* Left: Notification Marquee */}
          <div className="w-full lg:w-auto overflow-hidden mb-2 lg:mb-0">
            <marquee className="py-1.5 text-sm">
              <>
                <span
                  className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3"
                  onMouseOver={(e) => {
                    const marquee = e.target.closest('marquee');
                    if (marquee) marquee.stop();
                  }}
                  onMouseOut={(e) => {
                    const marquee = e.target.closest('marquee');
                    if (marquee) marquee.start();
                  }}
                >
                  🎓 New Admissions Open!
                </span>
                <span
                  className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3"
                  onMouseOver={(e) => {
                    const marquee = e.target.closest('marquee');
                    if (marquee) marquee.stop();
                  }}
                  onMouseOut={(e) => {
                    const marquee = e.target.closest('marquee');
                    if (marquee) marquee.start();
                  }}
                >
                  🌟 Apply Now
                </span>
                <span
                  className="bg-teal-700 text-white px-3 py-1 rounded-full text-sm font-semibold"
                  onMouseOver={(e) => {
                    const marquee = e.target.closest('marquee');
                    if (marquee) marquee.stop();
                  }}
                  onMouseOut={(e) => {
                    const marquee = e.target.closest('marquee');
                    if (marquee) marquee.start();
                  }}
                >
                  🏆 Best Education Consultancy
                </span>
              </>
            </marquee>
          </div>

          {/* Right: Contact Information */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Study Abroad */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687" />
                </svg>
                <div className="text-sm">
                  {/* <div className="font-semibold text-teal-800">Study Abroad</div> */}
                  <div className="text-teal-600">+91 9211607005</div>
                </div>
              </div>
            </div>

            {/* Study in India */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <div className="text-sm">
                  {/* <div className="font-semibold text-green-800">Study in India</div> */}
                  <div className="text-green-600">+91 9211607005</div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <div className="text-sm">
                  <div className="text-teal-600">info@hellodoctor.site</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 bg-white shadow-lg z-50 border-t-2 border-teal-500">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between py-2 lg:py-3">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-1 mr-4">
              <Image
                src={mbbslogo}
                alt="Hello Doctor Medical Education Consultancy Logo"
                width={220}
                height={112}
                className="w-auto h-[85px] sm:h-[95px] lg:h-[112px]"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-teal-600 leading-tight">Hello Doctor</span>
                <span className="text-xs sm:text-sm font-medium text-gray-700 leading-tight">Medical Education Consultancy</span>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-teal-50 z-50 text-teal-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'transform rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 flex-1 justify-center">
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  {link.hasDropdown ? (
                    <button
                      onClick={() => {
                        if (link.isAbout) {
                          setIsAboutOpen(!isAboutOpen)
                          setIsStudyIndiaOpen(false)
                          setIsMbbsAbroadOpen(false)
                          setIsStudyAbroadOpen(false)
                          setSelectedSubcategory(null)
                        } else if (link.isStudyIndia) {
                          setIsStudyIndiaOpen(!isStudyIndiaOpen)
                          setIsAboutOpen(false)
                          setIsMbbsAbroadOpen(false)
                          setIsStudyAbroadOpen(false)
                          setSelectedSubcategory(null)
                        } else if (link.isMbbsAbroad) {
                          setIsMbbsAbroadOpen(!isMbbsAbroadOpen)
                          setIsAboutOpen(false)
                          setIsStudyIndiaOpen(false)
                          setIsStudyAbroadOpen(false)
                          setSelectedSubcategory(null)
                        } else if (link.isStudyAbroad) {
                          setIsStudyAbroadOpen(!isStudyAbroadOpen)
                          setIsAboutOpen(false)
                          setIsStudyIndiaOpen(false)
                          setIsMbbsAbroadOpen(false)
                          setSelectedSubcategory(null)
                        }
                      }}
                      onMouseEnter={() => {
                        if (link.isAbout) {
                          setIsAboutOpen(true)
                          setIsStudyIndiaOpen(false)
                          setIsMbbsAbroadOpen(false)
                          setIsStudyAbroadOpen(false)
                          setSelectedSubcategory(null)
                        } else if (link.isStudyIndia) {
                          setIsStudyIndiaOpen(true)
                          setIsAboutOpen(false)
                          setIsMbbsAbroadOpen(false)
                          setIsStudyAbroadOpen(false)
                          setSelectedSubcategory(null)
                        } else if (link.isMbbsAbroad) {
                          setIsMbbsAbroadOpen(true)
                          setIsAboutOpen(false)
                          setIsStudyIndiaOpen(false)
                          setIsStudyAbroadOpen(false)
                          setSelectedSubcategory(null)
                        } else if (link.isStudyAbroad) {
                          setIsStudyAbroadOpen(true)
                          setIsAboutOpen(false)
                          setIsStudyIndiaOpen(false)
                          setIsMbbsAbroadOpen(false)
                          setSelectedSubcategory(null)
                        }
                      }}
                      className={`relative font-medium text-sm lg:text-md transition-colors flex items-center gap-1 whitespace-nowrap ${isActive(link.href) ||
                        (link.isAbout ? isAboutOpen :
                          link.isStudyIndia ? isStudyIndiaOpen :
                            link.isMbbsAbroad ? isMbbsAbroadOpen :
                              link.isStudyAbroad ? isStudyAbroadOpen : false)
                        ? 'text-teal-700'
                        : 'text-gray-700 hover:text-teal-700'
                        }`}
                    >
                      <span>{link.label}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className={`w-3 h-3 transition-transform duration-200 ${(link.isAbout ? isAboutOpen :
                          link.isStudyIndia ? isStudyIndiaOpen :
                            link.isMbbsAbroad ? isMbbsAbroadOpen :
                              link.isStudyAbroad ? isStudyAbroadOpen : false) ? 'rotate-180' : ''
                          }`}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                      {(isActive(link.href) ||
                        (link.isAbout ? isAboutOpen :
                          link.isStudyIndia ? isStudyIndiaOpen :
                            link.isMbbsAbroad ? isMbbsAbroadOpen :
                              link.isStudyAbroad ? isStudyAbroadOpen : false)) && (
                          <span className="absolute -bottom-3 left-0 w-full h-0.5 bg-teal-500 rounded-full"></span>
                        )}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative font-medium text-sm lg:text-md transition-colors whitespace-nowrap ${isActive(link.href)
                        ? 'text-teal-700'
                        : 'text-gray-700 hover:text-teal-700'
                        }`}
                    >
                      {link.label}
                      {isActive(link.href) && (
                        <span className="absolute -bottom-3 left-0 w-full h-0.5 bg-blue-500 rounded-full"></span>
                      )}
                    </Link>
                  )}

                  {/* About Us Dropdown */}
                  {link.hasDropdown && link.isAbout && isAboutOpen && (
                    <div
                      className="absolute top-full left-0 mt-3 w-64 bg-white shadow-xl rounded-lg overflow-hidden border border-teal-100"
                      onMouseLeave={() => setIsAboutOpen(false)}
                    >
                      <div className="p-4">
                        {aboutSubmenus.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Study in India Dropdown */}
                  {link.hasDropdown && link.isStudyIndia && isStudyIndiaOpen && (
                    <div
                      className="absolute top-full left-0 mt-3 w-[800px] bg-white shadow-xl rounded-lg overflow-hidden border border-teal-100"
                      onMouseLeave={() => {
                        setIsStudyIndiaOpen(false)
                        setSelectedSubcategory(null)
                      }}
                    >
                      <div className="flex">
                        {/* Study Types (Subcategories) */}
                        <div className="w-1/3 bg-teal-50 border-r border-teal-100">
                          {Object.entries(studyIndiaTypes).map(([type, { label }]) => (
                            <button
                              key={type}
                              className={`w-full flex justify-between items-center text-left py-4 px-4 ${selectedStudyType === type
                                ? 'bg-teal-100 text-teal-800 font-semibold border-r-2 border-teal-500'
                                : 'hover:bg-teal-100 text-gray-700'
                                }`}
                              onMouseEnter={() => {
                                setSelectedStudyType(type)
                                setSelectedSubcategory(null)
                              }}
                            >
                              <span>{label}</span>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                              </svg>
                            </button>
                          ))}
                        </div>
                        {/* Subsubcategories */}
                        <div className="w-1/3 bg-green-50 border-r border-green-200">
                          {studyIndiaTypes[selectedStudyType] && studyIndiaTypes[selectedStudyType].subcategories && Object.entries(studyIndiaTypes[selectedStudyType].subcategories).map(([subcategoryKey, { name }]) => (
                            <button
                              key={subcategoryKey}
                              className={`w-full flex justify-between items-center text-left py-3 px-4 ${selectedSubcategory === subcategoryKey
                                ? 'bg-green-100 text-green-800 font-semibold border-r-2 border-green-400'
                                : 'hover:bg-green-100 text-gray-700'
                                }`}
                              onMouseEnter={() => setSelectedSubcategory(subcategoryKey)}
                            >
                              <span className='uppercase'>{name}</span>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                              </svg>
                            </button>
                          ))}
                        </div>
                        {/* Programs List */}
                        <div className="w-1/3 p-4">
                          <div className="max-h-64 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-teal-50 hover:scrollbar-thumb-teal-400">
                            {selectedSubcategory && studyIndiaTypes[selectedStudyType] && studyIndiaTypes[selectedStudyType].subcategories[selectedSubcategory] && studyIndiaTypes[selectedStudyType].subcategories[selectedSubcategory].programs.map((program, index) => (
                              <Link
                                key={index}
                                href={program.href}
                                className="block px-3 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all shadow-md font-medium text-sm"
                              >
                                {program.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* MBBS Abroad Dropdown */}
                  {link.hasDropdown && link.isMbbsAbroad && isMbbsAbroadOpen && (
                    <div
                      className="absolute top-full left-0 mt-3 w-80 bg-white shadow-xl rounded-lg overflow-hidden border border-teal-100"
                      onMouseLeave={() => setIsMbbsAbroadOpen(false)}
                    >
                      <div className="p-4">
                        <div className="max-h-64 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-teal-50 hover:scrollbar-thumb-teal-400">
                          {mbbsAbroadCourses.map((course, index) => (
                            <Link
                              key={index}
                              href={course.href}
                              className="block px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all shadow-md font-medium"
                            >
                              {course.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Study Abroad Dropdown */}
                  {link.hasDropdown && link.isStudyAbroad && isStudyAbroadOpen && (
                    <div
                      className="absolute top-full left-0 mt-3 w-80 bg-white shadow-xl rounded-lg overflow-hidden border border-teal-100"
                      onMouseLeave={() => setIsStudyAbroadOpen(false)}
                    >
                      <div className="p-4">
                        <div className="max-h-64 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-teal-50 hover:scrollbar-thumb-teal-400">
                          {studyAbroadCourses.map((course, index) => (
                            <Link
                              key={index}
                              href={course.href}
                              className="block px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow-md font-medium"
                            >
                              {course.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Right Buttons */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0">
              <button className="px-3 xl:px-5 py-2 border-2 border-teal-600 text-teal-600 font-medium text-sm lg:text-md rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300 whitespace-nowrap">
                <a href='tel:+919211607005'>Call Us</a>
              </button>
              <Link href="https://play.google.com/store/apps/details?id=com.educationhub&pcampaignid=web_share" target="_blank" className="px-3 xl:px-5 py-2 bg-teal-600 text-white font-medium text-sm lg:text-md rounded-full hover:bg-teal-700 hover:shadow-lg transition-all duration-300 shadow-md whitespace-nowrap">
                Download App
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="py-4 space-y-4 border-t border-teal-200">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => {
                          if (link.isAbout) {
                            if (activeDropdown === 'about') {
                              setActiveDropdown(null)
                            } else {
                              setActiveDropdown('about')
                            }
                            setIsAboutOpen(!isAboutOpen)
                          } else if (link.isStudyIndia) {
                            if (activeDropdown === 'studyIndia') {
                              setActiveDropdown(null)
                            } else {
                              setActiveDropdown('studyIndia')
                            }
                            setIsStudyIndiaOpen(!isStudyIndiaOpen)
                          } else if (link.isMbbsAbroad) {
                            if (activeDropdown === 'mbbsAbroad') {
                              setActiveDropdown(null)
                            } else {
                              setActiveDropdown('mbbsAbroad')
                            }
                            setIsMbbsAbroadOpen(!isMbbsAbroadOpen)
                          } else if (link.isStudyAbroad) {
                            if (activeDropdown === 'studyAbroad') {
                              setActiveDropdown(null)
                            } else {
                              setActiveDropdown('studyAbroad')
                            }
                            setIsStudyAbroadOpen(!isStudyAbroadOpen)
                          }
                          setExpandedMobileType(null)
                          setExpandedMobileSubcategory(null)
                          setSelectedSubcategory(null)
                        }}
                        className={`w-full flex justify-between items-center text-left px-4 py-3 rounded-lg transition-colors ${isActive(link.href) ||
                          (link.isAbout ? isAboutOpen :
                            link.isStudyIndia ? isStudyIndiaOpen :
                              link.isMbbsAbroad ? isMbbsAbroadOpen :
                                link.isStudyAbroad ? isStudyAbroadOpen : false)
                          ? 'bg-teal-50 text-teal-700 font-semibold'
                          : 'text-gray-700 hover:bg-teal-50'
                          }`}
                      >
                        <span>{link.label}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className={`w-4 h-4 transition-transform duration-200 ${(link.isAbout ? isAboutOpen :
                            link.isStudyIndia ? isStudyIndiaOpen :
                              link.isMbbsAbroad ? isMbbsAbroadOpen :
                                link.isStudyAbroad ? isStudyAbroadOpen : false) ? 'rotate-180' : ''
                            }`}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>

                      {/* About Mobile Dropdown */}
                      {link.isAbout && isAboutOpen && (
                        <div className="mt-2 mx-2">
                          <div className="bg-teal-50 rounded-lg shadow-lg p-3">
                            {aboutSubmenus.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-3 py-2 text-gray-700 hover:text-teal-700 hover:bg-white rounded transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Study in India Mobile Dropdown */}
                      {link.isStudyIndia && isStudyIndiaOpen && (
                        <div className="mt-2 mx-2">
                          <div className="bg-blue-50 rounded-lg shadow-lg overflow-hidden">
                            {Object.entries(studyIndiaTypes).map(([type, { label, subcategories }]) => (
                              <div key={type} className="border-b last:border-b-0 border-blue-200">
                                <button
                                  onClick={() => {
                                    if (expandedMobileType === type) {
                                      setExpandedMobileType(null)
                                    } else {
                                      setExpandedMobileType(type)
                                    }
                                  }}
                                  className={`w-full flex justify-between items-center text-left py-3 px-4 ${expandedMobileType === type
                                    ? 'bg-teal-100 text-teal-800 font-semibold'
                                    : 'hover:bg-teal-100 text-gray-700'
                                    }`}
                                >
                                  <span>{label}</span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className={`w-4 h-4 transition-transform duration-200 ${expandedMobileType === type ? 'rotate-180' : ''}`}
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                  </svg>
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 bg-white ${expandedMobileType === type ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                                  }`}>
                                  <div className="p-4 max-h-64 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-teal-50 hover:scrollbar-thumb-teal-400">
                                    {subcategories && Object.entries(subcategories).map(([subcategoryKey, { name, programs }]) => (
                                      <div key={subcategoryKey} className="border-b last:border-b-0 border-teal-200 pb-3">
                                        <button
                                          onClick={() => {
                                            if (expandedMobileSubcategory === subcategoryKey) {
                                              setExpandedMobileSubcategory(null)
                                            } else {
                                              setExpandedMobileSubcategory(subcategoryKey)
                                            }
                                          }}
                                          className="w-full flex justify-between items-center text-left py-2 px-3 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
                                        >
                                          <span className="font-semibold text-lg text-teal-800 uppercase">{name}</span>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className={`w-4 h-4 transition-transform duration-200 text-teal-600 ${expandedMobileSubcategory === subcategoryKey ? 'rotate-180' : ''}`}
                                          >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                          </svg>
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ${expandedMobileSubcategory === subcategoryKey ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                          }`}>
                                          <div className="mt-3 max-h-48 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-teal-50 hover:scrollbar-thumb-teal-400">
                                            {programs.map((program, index) => (
                                              <Link
                                                key={index}
                                                href={program.href}
                                                className="block px-3 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all text-center font-medium text-sm"
                                              >
                                                {program.name}
                                              </Link>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* MBBS Abroad Mobile Dropdown */}
                      {link.isMbbsAbroad && isMbbsAbroadOpen && (
                        <div className="mt-2 mx-2">
                          <div className="bg-teal-50 rounded-lg shadow-lg p-3">
                            <div className="max-h-48 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-teal-50 hover:scrollbar-thumb-teal-400">
                              {mbbsAbroadCourses.map((course, index) => (
                                <Link
                                  key={index}
                                  href={course.href}
                                  className="block px-3 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all text-center font-medium"
                                >
                                  {course.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Study Abroad Mobile Dropdown */}
                      {link.isStudyAbroad && isStudyAbroadOpen && (
                        <div className="mt-2 mx-2">
                          <div className="bg-teal-50 rounded-lg shadow-lg p-3">
                            <div className="max-h-48 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-teal-50 hover:scrollbar-thumb-teal-400">
                              {studyAbroadCourses.map((course, index) => (
                                <Link
                                  key={index}
                                  href={course.href}
                                  className="block px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all text-center font-medium"
                                >
                                  {course.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg transition-colors ${isActive(link.href)
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-gray-700 hover:bg-blue-50'
                        }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Buttons */}
              <div className="px-4 py-3 space-y-3">
                <button className="w-full px-4 py-3 border-2 border-teal-600 text-teal-600 font-semibold rounded-full hover:bg-teal-600 hover:text-white transition-colors">
                  <a href='tel:9039038655' className='w-full'>Call Us</a>
                </button>
                <Link href="https://play.google.com/store/apps/details?id=com.educationhub&pcampaignid=web_share" target="_blank" className="block w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-full text-center hover:bg-teal-700 transition-all shadow-md">
                  Download App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}