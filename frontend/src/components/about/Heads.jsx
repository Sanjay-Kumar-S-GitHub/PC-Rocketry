// import Image from "next/image";

import { memo } from "react";

// const Heads=({teamData})=>{

//     const heads=teamData.filter((member)=>member.head===true);

//     return(
//         <>
//             <h1>HEADS</h1>
//             {
//            heads.map((head)=>(
//                 <div key={head.id}>
//                     <Image src={head.image} alt={head.name} width={100} height={100}/>
//                     <h2>{head.name}</h2>
//                     <p>{head.position}</p>
//                     <a href={head.linkedin}><button>CONNECT</button></a>
//                 </div>
//            ))
//         }
//         </>
//     )
// }

// export default Heads;

import Image from "next/image";

const Heads = ({ teamData = [] }) => {
    console.log("Heads Prop:", teamData); 

    if (!teamData.length) {
        return <p>No team members found.</p>;
    }

    const heads = teamData.filter((member)=>(member.head===true));

    return (
        <div className="flex flex-col justify-center items-center">
            <h1>HEADS</h1>
            <div className={`flex ${heads.length < 3 ? "flex-row justify-around" : "grid grid-cols-3"}`}>
                {
                    
                    heads.map((head)=>(
                        <div key={head.id} className="mx-30">
                            <Image src={head.image} alt={head.name} width={100} height={100}/>
                            <h2>{head.name}</h2>
                            <p>{head.position}</p>
                            <a href={head.linkedin}><button>CONNECT</button></a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Heads;
