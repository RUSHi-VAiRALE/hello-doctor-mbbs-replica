'use client'
import { Phone, MessageSquare, Users, Handshake, FileText, ClipboardList, UserCheck, Star } from 'lucide-react'

export default function HowItWorks() {
    const steps = [
        {
            number: 1,
            title: "Call",
            subtitle: "Inbound, Outbound",
            icon: Phone,
            description: "Reach out to us or we'll contact you to understand your educational aspirations",
            color: "from-red-500 to-orange-500"
        },
        {
            number: 2,
            title: "Explain",
            subtitle: "Service, Interest",
            icon: MessageSquare,
            description: "We explain our comprehensive services and understand your specific interests",
            color: "from-blue-500 to-indigo-500"
        },
        {
            number: 3,
            title: "Meet",
            subtitle: "Online, Offline",
            icon: Users,
            description: "Schedule a meeting with our experts either online or at our office",
            color: "from-yellow-500 to-amber-500"
        },
        {
            number: 4,
            title: "Discuss",
            subtitle: "Marks, Budget",
            icon: Handshake,
            description: "We discuss your academic performance and budget to find the best options",
            color: "from-green-500 to-emerald-500"
        },
        {
            number: 5,
            title: "Suggestion",
            subtitle: "A/C to Budget, A/C to Marks",
            icon: FileText,
            description: "Get personalized suggestions based on your budget and academic performance",
            color: "from-purple-500 to-violet-500"
        },
        {
            number: 6,
            title: "Deal",
            subtitle: "Documents, Formalities",
            icon: Handshake,
            description: "Complete all necessary documentation and formalities for your chosen program",
            color: "from-pink-500 to-rose-500"
        },
        {
            number: 7,
            title: "Expectation",
            subtitle: "Admission, Post Assistance",
            icon: ClipboardList,
            description: "We ensure smooth admission process and provide ongoing support",
            color: "from-cyan-500 to-teal-500"
        },
        {
            number: 8,
            title: "Client",
            subtitle: "Happy, Loyal",
            icon: UserCheck,
            description: "Become a satisfied and loyal client with our continued support",
            color: "from-orange-500 to-red-500"
        }
    ]

    return (
        <section className="py-16 bg-gradient-to-br from-teal-100 to-green-100 text-gray-800">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-gradient-to-r from-teal-50 to-green-50 px-8 py-4 rounded-full mb-6">
                        <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Our Process</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                        How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-green-600">Works?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our streamlined 8-step process ensures you get the best educational guidance and support
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {steps.map((step, index) => {
                        const IconComponent = step.icon
                        return (
                            <div
                                key={step.number}
                                className="group relative"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Step Card */}
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-300 group-hover:-translate-y-2">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                                        <span className="text-white font-bold text-lg">{step.number}</span>
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-3 font-medium">
                                            {step.subtitle}
                                        </p>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Arrow for desktop */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                                            <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-teal-200">
                                                <svg
                                                    className="w-4 h-4 text-teal-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Mobile Arrow */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden flex justify-center mt-4">
                                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-teal-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-8 shadow-lg border border-teal-200 max-w-4xl mx-auto">
                        <div className="flex items-center justify-center mb-4">
                            <Star className="w-8 h-8 text-yellow-500 mr-2" />
                            <h3 className="text-2xl font-bold text-gray-800">Ready to Start Your Journey?</h3>
                        </div>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Join thousands of successful students who have achieved their educational dreams with our expert guidance
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white font-bold rounded-full hover:from-teal-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Get Free Consultation
                            </button>
                            <button className="px-8 py-3 border-2 border-teal-500 text-teal-600 font-bold rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300">
                                Call Now: +91 9211607005
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
