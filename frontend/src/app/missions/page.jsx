import MissionsTop from "@/components/missions/MissionsTop";
import PreviousProjects from "@/components/missions/PreviousProjects";
import UpcomingProjects from "@/components/missions/UpcomingProjects";

import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

async function getPreviousProjects() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'previousProjects.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading previousProjects.json:", error);
    return [];
  }
}

async function getUpcomingProjects() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'upcomingProjects.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading upcomingProjects.json:", error);
    return [];
  }
}

export default async function Missions(){
    const previousProjects = await getPreviousProjects();
    const upcomingProjects = await getUpcomingProjects();

    return(
        <>
            <MissionsTop/>
            <PreviousProjects previousProjects={previousProjects}/>
            <UpcomingProjects upcomingProjects={upcomingProjects}/>
        </>
    )
}