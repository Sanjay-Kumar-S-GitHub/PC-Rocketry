import BlogTop from "@/components/Blog/BlogTop";
import Updates from "@/components/Blog/Updates";
import Blogs from "@/components/Blog/Blogs";

export const dynamic = "force-static";

export async function getBlogs() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    
    try {
        const res = await fetch(`${baseUrl}/data/blogs.json`);
        if (!res.ok) throw new Error("Failed to fetch blogs");

        const data = await res.json();
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
}

export async function getUpdates() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    
    try {
        const res = await fetch(`${baseUrl}/data/updates.json`);
        if (!res.ok) throw new Error("Failed to fetch updates");

        const data = await res.json();
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error("Error fetching update:", error);
        return [];
    }
}

const Blog=async() => {
    const blogs = await getBlogs();
    const updates = await getUpdates();

    return (
        <>
            <BlogTop />
            <Updates updates={updates}/>
            <Blogs blogs={blogs} />
        </>
    );
}

export default Blog;
