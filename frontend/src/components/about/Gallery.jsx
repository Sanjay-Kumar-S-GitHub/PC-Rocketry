import Image from "next/image"

export const dynamic = "force-static";

async function getGalleryImages(){
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    try{
        const res = await fetch(`${baseUrl}/data/gallery.json`);
        if(!res.ok) throw new Error("Failed to fetch gallery images");

        const data = await res.json();
        console.log("Fetched gallery data: ", data);
        return Array.isArray(data)? data : [];
    } catch(error){
        console.log("Error fetching gallery data: ",error);
        return [];
    }
}

const Gallery = async()=>{
    const images = await getGalleryImages();

    if(!images.length){
        return <p>No images to display</p>
    }

    return(
        <div>
            <h1>IMAGE GALLERY</h1>
            <div className="grid grid-cols-9gap-2 overflow-scroll h-180">
                {
                    images.map((image)=>(
                        <img key={image.id} src={image.image} className={`${image.colSpan} ${image.rowSpan} min-h-full min-w-full`}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Gallery;