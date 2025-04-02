import AboutDescription from "@/components/about/AboutDescription";
import AboutTop from "@/components/about/AboutTop";
import OurStory from "@/components/about/OurStory";
import Heads from "@/components/about/Heads";
import Executives from "@/components/about/Executives";
import Gallery from "@/components/about/Gallery";

import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

async function getTeam(){
    try {
        const filePath = path.join(process.cwd(),'public', 'data', 'team.json');
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(jsonData);
    } catch (error) {
        console.error("Error reading team.json:", error);
        return [];
    }
}

export default async function About() {
    const teamData = await getTeam();

    return (
        <>
            <AboutTop />
            <AboutDescription />
            <OurStory />
            <Heads teamData={teamData} />
            <Executives teamData={teamData} />
            {/* <Gallery /> */}
        </>
    );
};