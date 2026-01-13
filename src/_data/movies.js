import Parser from "rss-parser";

const parser = new Parser();

function extractImageFromContent(content) {
  if (!content) return null;

  const imgMatch = content.match(/<img[^>]+src="([^"]+)"/i);
  return imgMatch ? imgMatch[1] : null;
}

export default async function () {
  try {
    const feed = await parser.parseURL("https://letterboxd.com/mansurov/rss");

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
