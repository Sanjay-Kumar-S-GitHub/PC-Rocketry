// import Blogs from "@/components/Blog/Blogs";
// import BlogTop from "@/components/Blog/BlogTop";
// import Updates from "@/components/Blog/Updates";

// export default function Blog(){
//     return(
//         <>
//             <BlogTop/>
//             <Updates/>
//             <Blogs/>
//         </>
//     )
// }


import BlogTop from "@/components/Blog/BlogTop";
import Updates from "@/components/Blog/Updates";
import Blogs from "@/components/Blog/Blogs";

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

const Blog=async() => {
    const blogs = await getBlogs();

    return (
        <>
            <BlogTop />
            <Updates />
            <Blogs blogs={blogs} />
        </>
    );
}

export default Blog;
