// //'use client'

// import { motion, AnimatePresence } from 'framer-motion';
// import SlideIn from "../slidein/SlideIn";
// //import { useState } from 'react';

// export const dynamic = "force-static";

// async function getBlogs(){
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

//     try{
//         const res = await fetch(`${baseUrl}/data/blogs.json`);
//         if(!res.ok) throw new Error("Failed to fetch blogs");

//         const data = await res.json();
//         console.log("Fetched blogs data: ", data);
//         return Array.isArray(data)? data : [];
//     } catch(error){
//         console.log("Error fetching blogs data: ",error);
//         return [];
//     }
// }

// const Blogs=async()=>{
//     const blogs = await getBlogs();

//     if(!blogs.length){
//         return <p>No images to display</p>
//     }
    
//     // const [index, setIndex] = useState(0);

//     // const nextSlide = () => {
//     //     setIndex((prevIndex) => (prevIndex + 1) % blogs.length);
//     // };

//     // const prevSlide = () => {
//     //     setIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
//     // };

//     let index=0;
//     const nextSlide=()=>{
//         index=(index+1)%blogs.length;
//     }
//     const prevSlide=()=>{
//         index=(index-1+blogs.length)%blogs.length;
//     }

//     return (
//         <div className="flex flex-col justify-center items-center my-20">
//             <SlideIn direction="down" delay={200}>
//                 <h1 className="text-7xl">BLOGS</h1>
//             </SlideIn>
//             <SlideIn direction="up">
//                 <div className="relative">
//                     {(index>0) && (<button
//                         onClick={prevSlide}
//                         className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-4xl"
//                     >
//                         ◀
//                     </button>
//                     )}

//                     <div className="overflow-hidden w-full flex justify-center items-center gap-14 h-95 px-5">
//                         <AnimatePresence mode="wait">
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, x: 50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             exit={{ opacity: 0, x: -50 }}
//                             transition={{ duration: 0.4 }}
//                             className="text-start shadow-xl h-75 w-85"
//                         >
//                             <img src={blogs[index]?.image} className="h-40 w-85 mb-3"/>
//                             <div className="mt-3 ml-3">
//                                 <h1 className="text-lg font-medium">{blogs[index+2]?.title}</h1>
//                                 <p className="text-sm font-extralight">{blogs[index+2]?.description}</p>
//                             </div>
//                             <button className="border rounded-sm text-center h-8 w-77 m-4 hover:text-white hover:bg-black cursor-pointer">READ MORE</button>
//                         </motion.div>
//                         </AnimatePresence>
//                         <AnimatePresence mode="wait">
//                         <motion.div
//                             key={index+1}
//                             initial={{ opacity: 0, x: 50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             exit={{ opacity: 0, x: -50 }}
//                             transition={{ duration: 0.4 }}
//                             className="text-start shadow-xl h-75 w-85"
//                         >
//                             <img src={blogs[index+1]?.image} className="h-40 w-85 mb-3"/>
//                             <div className="mt-3 ml-3">
//                                 <h1 className="text-lg font-medium">{blogs[index+2]?.title}</h1>
//                                 <p className="text-sm font-extralight">{blogs[index+2]?.description}</p>
//                             </div>
//                             <button className="border rounded-sm text-center h-8 w-77 m-4 hover:text-white hover:bg-black cursor-pointer">READ MORE</button>
//                         </motion.div>
//                         </AnimatePresence>
//                         <AnimatePresence mode="wait">
//                         <motion.div
//                             key={index+2}
//                             initial={{ opacity: 0, x: 50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             exit={{ opacity: 0, x: -50 }}
//                             transition={{ duration: 0.4 }}
//                             className="text-start shadow-xl h-75 w-85"
//                         >
//                             <img src={blogs[index+2]?.image} className="h-40 w-85"/>
//                             <div className="mt-3 ml-3">
//                                 <h1 className="text-lg font-medium">{blogs[index+2]?.title}</h1>
//                                 <p className="text-sm font-extralight">{blogs[index+2]?.description}</p>
//                             </div>
//                             <button className="border rounded-sm text-center h-8 w-77 m-4 hover:text-white hover:bg-black cursor-pointer">READ MORE</button>
//                         </motion.div>
//                         </AnimatePresence>
//                     </div>

//                     {(index<blogs.length-3) && (<button
//                         onClick={nextSlide}
//                         className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-4xl"
//                     >
//                         ▶
//                     </button>
//                     )}
//                 </div>
//             </SlideIn>
//         </div>
//     );
// }

// export default Blogs;


'use client';

import { motion, AnimatePresence } from 'framer-motion';
import SlideIn from "../slidein/SlideIn";
import { useState } from 'react';

export default function Blogs({ blogs }) {
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((prev) => (prev + 1) % blogs.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + blogs.length) % blogs.length);

    return (
        <div className="flex flex-col justify-center items-center my-20">
            <SlideIn direction="down" delay={200}>
                <h1 className="text-4xl font-bold">BLOGS</h1>
            </SlideIn>

            <SlideIn direction="up">
                <div className="relative flex justify-center items-center w-full max-w-5xl overflow-hidden">
                    {index > 0 && (
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 px-3 py-2 rounded-full hover:bg-gray-300 transition"
                        >
                            ◀
                        </button>
                    )}

                    <div className="flex justify-center items-center w-full px-5 my-10">
                        <AnimatePresence initial={false} mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="grid grid-cols-1 sm:grid-cols-3 gap-10"
                            >
                                {[0, 1, 2].map((offset) => {
                                    const blog = blogs[(index + offset) % blogs.length];
                                    return (
                                        <div
                                            key={blog?.id}
                                            className="text-start shadow-xl h-auto w-72 p-4 bg-white rounded-lg"
                                        >
                                            <img
                                                src={blog?.image}
                                                className="h-40 w-full mb-3 rounded-md object-cover"
                                                alt={blog?.title}
                                            />
                                            <h1 className="text-lg font-medium">{blog?.title}</h1>
                                            <p className="text-sm font-light">{blog?.description}</p>
                                            <button className="border rounded-sm text-center h-8 w-full mt-4 hover:text-white hover:bg-black transition cursor-pointer">
                                                READ MORE
                                            </button>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {index < blogs.length - 3 && (
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 px-3 py-2 rounded-full hover:bg-gray-300 transition"
                        >
                            ▶
                        </button>
                    )}
                </div>
            </SlideIn>
        </div>
    );
}
