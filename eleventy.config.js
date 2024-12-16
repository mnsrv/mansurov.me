import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("src/static/style.css");
  eleventyConfig.addPassthroughCopy("src/static/fonts");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/static/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/static/favicon.svg");
  eleventyConfig.addPassthroughCopy("src/static/lichesslogo.svg");
  eleventyConfig.addPassthroughCopy("src/static/lichesslogowhite.svg");
  eleventyConfig.addPassthroughCopy(
    "src/static/letterboxd-decal-dots-pos-rgb.svg",
  );
  eleventyConfig.addPassthroughCopy(
    "src/static/letterboxd-decal-dots-neg-rgb.svg",
  );

  eleventyConfig.addPassthroughCopy("src/static/chess.js");
  eleventyConfig.addPassthroughCopy("src/static/lichess-pgn-viewer.js");
  eleventyConfig.addPassthroughCopy("src/static/lichess-pgn-viewer.css");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
}
