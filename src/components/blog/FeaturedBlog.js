import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
 const slides = [
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2018/11/13/18/03/blog-3813603_1280.jpg",
      alt: "Slide 1"
    },
    {
      id: 2, 
      image: "https://cdn.pixabay.com/photo/2016/02/18/15/19/new-life-1207327_1280.jpg",
      alt: "Slide 2"
    },
    {
      id: 3,
      image: "https://cdn.pixabay.com/photo/2015/06/01/09/04/blog-793047_1280.jpg", 
      alt: "Slide 3"
    }
  ]
export default function FeaturedBlog() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-red-50 py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1380px]">
        <Hero slides={slides} height={"300px"}/>
      </div>
    </section>
  )
}