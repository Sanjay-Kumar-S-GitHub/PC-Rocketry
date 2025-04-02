import HomeTop from "@/components/home/HomeTop";
import Middle from "@/components/home/Middle";
import ContactUs from "@/components/home/ContactUs";
import NewsUpdates from "@/components/home/NewsUpdates";

import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

async function getUpdates() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'updates.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading updates.json:", error);
    return [];
  }
}

export default async function Home() {
  const updates = await getUpdates();
  
  return (
    <>
      <HomeTop />
      <Middle />
      <NewsUpdates updates={updates} />
      <ContactUs />
    </>
  );
}