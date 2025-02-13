import Image from 'next/image'
import Link from 'next/link'

export default function Milestones() {
  const milestones = [
    {
      title: "CLAT",
      description: "Crack CLAT with expert coaching—your gateway to top NLUs!",
      image: "/images/milestone.png",
      link: "/clat/about-clat.html"
    },
    {
      title: "AILET",
      description: "Crack AILET with expert coaching—your path to NLU Delhi.",
      image: "/images/milestone1.png",
      link: "/clat/about-ailet.html"
    },
    {
      title: "MH-CET",
      description: "Ace MH-CET with expert coaching—your path to top law colleges in Maharashtra.",
      image: "/images/milestone2.png",
      link: "/clat/about-mhcet.html"
    },
    {
      title: "LSAT",
      description: "Crack LSAT with expert coaching—your gateway to top law schools globally.",
      image: "/images/milestone3.png",
      link: "/clat/about-lsat.html"
    },
    {
      title: "AIL-LET",
      description: "Crack AIL-LET with expert coaching—your path to the Army Institute of Law.",
      image: "/images/milestone4.png",
      link: "/clat/about-ail-let.html"
    },
    {
      title: "CUET",
      description: "Prepare for CUET with expert coaching—your gateway to top universities.",
      image: "/images/milestone5.png",
      link: "/about-cuet.html"
    }
  ]

  return (
    <section className="bg-[#e7edff] py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white px-4 py-2 rounded-md">KNOW</span> YOUR MILESTONE
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {milestones.map((milestone, index) => (
            <div className="milestone-step flex flex-col items-center" key={index}>
              <div className="milestone-circle w-30 h-30 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-transparent bg-clip-padding transition-transform duration-300 hover:scale-110">
                <Link href={milestone.link}>
                  <Image 
                    src={milestone.image} 
                    alt={milestone.title} 
                    width={60} 
                    height={60} 
                    className="milestone-img w-15 h-15 object-contain transition-transform duration-300 hover:scale-110"
                  />
                </Link>
              </div>
              <div className="milestone-text mt-2 text-center max-w-xs">
                <h4 className="text-lg font-semibold text-gray-800">{milestone.title}</h4>
                <p className="text-sm text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 