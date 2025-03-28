'use client'

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from 'framer-motion';
import SlideIn from "../slidein/SlideIn";

export default function Blogs(){
    const [blogs, setBlogs]=useState([]);
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        fetch('/data/blogs.json')
        .then((res)=>res.json())
        .then((data)=>{
            setBlogs(data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log('Error loading blogs: ',error);
            setLoading(false);
        });
    },[]);
    
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
    };

    if (loading) return <p>Loading blogs...</p>;
    if (blogs.length === 0) return <p>No blogs available.</p>;

    return (
        <div className="flex flex-col justify-center items-center my-20">
            <SlideIn direction="down" delay={200}>
                <h1 className="text-7xl">BLOGS</h1>
            </SlideIn>
            <SlideIn direction="up">
                <div className="relative">
                    {(index>0) && (<button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-4xl"
                    >
                        ◀
                    </button>
                    )}

                    <div className="overflow-hidden w-full flex justify-center items-center gap-14 h-95 px-5">
                        <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4 }}
                            className="text-start shadow-xl h-75 w-85"
                        >
                            <img src={blogs[index]?.image} className="h-40 w-85 mb-3"/>
                            <div className="mt-3 ml-3">
                                <h1 className="text-lg font-medium">{blogs[index+2]?.title}</h1>
                                <p className="text-sm font-extralight">{blogs[index+2]?.description}</p>
                            </div>
                            <button className="border rounded-sm text-center h-8 w-77 m-4 hover:text-white hover:bg-black cursor-pointer">READ MORE</button>
                        </motion.div>
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                        <motion.div
                            key={index+1}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4 }}
                            className="text-start shadow-xl h-75 w-85"
                        >
                            <img src={blogs[index+1]?.image} className="h-40 w-85 mb-3"/>
                            <div className="mt-3 ml-3">
                                <h1 className="text-lg font-medium">{blogs[index+2]?.title}</h1>
                                <p className="text-sm font-extralight">{blogs[index+2]?.description}</p>
                            </div>
                            <button className="border rounded-sm text-center h-8 w-77 m-4 hover:text-white hover:bg-black cursor-pointer">READ MORE</button>
                        </motion.div>
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                        <motion.div
                            key={index+2}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4 }}
                            className="text-start shadow-xl h-75 w-85"
                        >
                            <img src={blogs[index+2]?.image} className="h-40 w-85"/>
                            <div className="mt-3 ml-3">
                                <h1 className="text-lg font-medium">{blogs[index+2]?.title}</h1>
                                <p className="text-sm font-extralight">{blogs[index+2]?.description}</p>
                            </div>
                            <button className="border rounded-sm text-center h-8 w-77 m-4 hover:text-white hover:bg-black cursor-pointer">READ MORE</button>
                        </motion.div>
                        </AnimatePresence>
                    </div>

                    {(index<blogs.length-3) && (<button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-4xl"
                    >
                        ▶
                    </button>
                    )}
                </div>
            </SlideIn>
        </div>
    );
}