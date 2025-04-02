import BlogTop from "@/components/Blog/BlogTop";
import Updates from "@/components/Blog/Updates";
import Blogs from "@/components/Blog/Blogs";

import fs from 'fs';
import path from 'path';

export const dynamic = "force-static";

async function getBlogs(){
    try {
        const filePath = path.join(process.cwd(),'public', 'data', 'blogs.json');
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(jsonData);
    } catch (error) {
        console.error("Error reading blogs.json:", error);
        return [];
    }
}

async function getUpdates(){
    try {
        const filePath = path.join(process.cwd(),'public', 'data', 'updates.json');
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(jsonData);
    } catch (error) {
        console.error("Error reading updates.json:", error);
        return [];
    }
}

export default async function Blog() {
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