import fetch from "@11ty/eleventy-fetch";

const extractImgTag = (htmlString) => {
  const imgRegex = /<img[^>]+>/;
  const match = htmlString.match(imgRegex);
  return match ? match[0] : null;
};

export default async function () {
  let url = "https://letterboxd.com/mansurov/rss/";
  let response = [];

  try {
    response = await fetch(url, {
      duration: "1d",
      type: "parsed-xml",
    });
    response = response.children[0].children
      .find((el) => el.type === "element")
      .children.filter((el) => el.type === "element")
      .filter((el) => el.name === "item")
      .slice(0, 4)
      .map((el) =>
        el.children
          .filter((el) => el.type === "element")
          .reduce((acc, curr) => {
            acc[curr.name] = curr.children[0].text;
            if (curr.name === "description") {
              acc[curr.name] = extractImgTag(curr.children[0].text);
            }
            return acc;
          }, {}),
      );
  } catch (error) {
    console.error(`Fetch failed in rss.js. ${error}`);
  }

  // more code
  return response;
}
