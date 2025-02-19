import AboutHero from "@/components/AboutHero";
import BlogSection from "@/components/BlogSection";
import BlogSectionPage from "@/components/blog/BlogSectionPage";

export default function Blogs() {
    return (
        <>
            <AboutHero route="Home" page="Blogs" />
            <BlogSection />
            <BlogSectionPage />
        </>
    )
}
