'use client';

import { motion, AnimatePresence } from 'framer-motion';
import SlideIn from "../slidein/SlideIn";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Blogs({ blogs }) {
    const [index, setIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(1);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
            
            if (width >= 1024) {
                setVisibleCount(3);
            } else if (width >= 768) {
                setVisibleCount(2);
            } else {
                setVisibleCount(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        if (index < blogs.length - visibleCount) {
            setIndex(prev => prev + 1);
        } else {
            setIndex(0);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex(prev => prev - 1);
        } else {
            setIndex(blogs.length - visibleCount);
        }
    };

    const getCardWidth = () => {
        if (windowWidth >= 1024) return 'calc(33.333% - 1.5rem)';   
        if (windowWidth >= 768) return 'calc(50% - 1.5rem)';      
        return 'calc(100% - 2rem)';                                
    };

    return (
        <div className="flex flex-col justify-center items-center my-10 px-4 sm:px-6">
            <SlideIn direction="down" delay={200}>
                <h1 className="text-5xl font-semibold">BLOGS</h1>
            </SlideIn>

            <SlideIn direction="up">
                <div className="relative w-full max-w-5xl">
                    {index > 0 && (
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 sm:left-4 top-1/2 -translate-y-1/2 bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200 transition z-10"
                            aria-label="Previous"
                        >
                            ◀
                        </button>
                    )}

                    <div className="w-full py-10 overflow-visible">
                        <div className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)]">
                            <AnimatePresence initial={false} mode="wait">
                                <motion.div
                                    key={`${index}-${visibleCount}`}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="flex gap-6 w-full"  
                                >
                                    {Array.from({ length: visibleCount }).map((_, offset) => {
                                        const blog = blogs[(index + offset) % blogs.length];
                                        return (
                                            <motion.div
                                                key={blog?.id}
                                                className="bg-white rounded-lg shadow-xl flex-shrink-0 overflow-visible mx-auto"
                                                style={{ width: getCardWidth() }}
                                                whileHover={{ y: -5 }}
                                            >
                                                <div className="p-6">
                                                    <Image
                                                        src={blog.image}
                                                        alt="blog image"
                                                        width={400}
                                                        height={250}
                                                        className="h-40 w-full object-cover mb-4 rounded-md"
                                                    />
                                                    <h2 className="text-lg font-medium mb-2">{blog?.title}</h2>
                                                    <p className="text-sm font-light mb-4 line-clamp-3">{blog?.description}</p>
                                                    <button className="w-full py-2 border border-black rounded-sm hover:bg-black hover:text-white transition-colors">
                                                        READ MORE
                                                    </button>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {index < blogs.length - visibleCount && (
                        <button
                            onClick={nextSlide}
                            className="absolute right-6 sm:right-4 top-1/2 -translate-y-1/2 bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200 transition z-10"
                            aria-label="Next"
                        >
                            ▶
                        </button>
                    )}
                </div>
            </SlideIn>
        </div>
    );
}