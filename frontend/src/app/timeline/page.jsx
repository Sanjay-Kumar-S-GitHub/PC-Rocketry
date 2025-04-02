import OurTimeline from "@/components/timeline/OurTimeline";
import TimelineTop from "@/components/timeline/TimelineTop";

import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

async function getTimeline() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'timeline.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading timeline.json:", error);
    return [];
  }
}

export default async function Timeline(){
    const events = await getTimeline();

    return(
        <>
            <TimelineTop/>
            <OurTimeline events={events}/>
        </>
    )
}