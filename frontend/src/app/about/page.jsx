// import AboutDescription from "@/components/about/AboutDescription";
// import AboutTop from "@/components/about/AboutTop";
// import OurStory from "@/components/about/OurStory";
// import Heads from "@/components/about/Heads";

// export const dynamic = "force-static";
// export async function getTeamData() {
//     const baseUrl =
//       process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  
//     const res = await fetch(`${baseUrl}/data/team.json`);
  
//     if (!res.ok) {
//       throw new Error("Failed to fetch team data");
//     }
  
//     return res.json();
//   }
  
// const About = async () => {
//     const teamData = await getTeamData();

//     return(
//         <>
//             <AboutTop/>
//             <AboutDescription/>
//             <OurStory/>
//             <Heads heads={teamData}/>
//         </>
//     )
// }

// export default About;



import AboutDescription from "@/components/about/AboutDescription";
import AboutTop from "@/components/about/AboutTop";
import OurStory from "@/components/about/OurStory";
import Heads from "@/components/about/Heads";

export const dynamic = "force-static";

export async function getTeamData() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    try {
        const res = await fetch(`${baseUrl}/data/team.json`);
        if (!res.ok) throw new Error("Failed to fetch team data");

        const data = await res.json();
        console.log("Fetched team data:", data); 
        return Array.isArray(data) ? data : []; 
    } catch (error) {
        console.error("Error fetching team data:", error);
        return []; 
    }
}

const About = async () => {
    const teamData = await getTeamData();

    return (
        <>
            <AboutTop />
            <AboutDescription />
            <OurStory />
            <Heads teamData={teamData} />
        </>
    );
};

export default About;
