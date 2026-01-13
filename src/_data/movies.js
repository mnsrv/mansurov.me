import Fetch from "@11ty/eleventy-fetch";
import Parser from "rss-parser";

const parser = new Parser();

function extractImageFromContent(content) {
  if (!content) return null;

  const imgMatch = content.match(/<img[^>]+src="([^"]+)"/i);
  return imgMatch ? imgMatch[1] : null;
}

export default async function () {
  try {
    // Use Eleventy Fetch to get RSS XML with proper caching and waiting
    const rssXml = await Fetch("https://letterboxd.com/mansurov/rss", {
      duration: "1h", // Cache for 1 hour
      type: "text", // Get as text (XML)
      removeUrlQueryParams: true, // Ignore cache-busting query params
    });

    // Parse the RSS XML
    const feed = await parser.parseString(rssXml);

    return feed.items
      .sort((a, b) => {
        const dateA = a.isoDate ? new Date(a.isoDate) : new Date(a.pubDate);
        const dateB = b.isoDate ? new Date(b.isoDate) : new Date(b.pubDate);
        return dateB - dateA;
      })
      .filter((item) => item.content)
      .slice(0, 3)
      .map((item) => ({
        title: item.title,
        link: item.link,
        image: extractImageFromContent(item.content),
      }))
      .filter((item) => item.image);
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return [];
  }
}
