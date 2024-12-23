import fs from "fs";
import path from "path";
import { DateTime } from "luxon";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("src/static/style.css");
  eleventyConfig.addPassthroughCopy("src/static/fonts");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/files");
  eleventyConfig.addPassthroughCopy("src/static/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/static/favicon.svg");

  eleventyConfig.addPassthroughCopy("src/static/calendar.js");
  eleventyConfig.addPassthroughCopy("src/static/chess.js");
  eleventyConfig.addPassthroughCopy("src/static/lichess-pgn-viewer.js");
  eleventyConfig.addPassthroughCopy("src/static/lichess-pgn-viewer.css");

  eleventyConfig.addFilter("bust", (url) => {
    const [urlPart, paramPart] = url.split("?");
    const params = new URLSearchParams(paramPart || "");
    const inputDir = eleventyConfig.dir.input || ".";
    const relativeUrl = path.join(inputDir, urlPart);

    try {
      const fileStats = fs.statSync(relativeUrl);
      const dateTimeModified = new DateTime(fileStats.mtime).toFormat("X");

      params.set("v", dateTimeModified);
    } catch (error) {}
    return `${urlPart}?${params}`;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
}
