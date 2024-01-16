import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("./src/static/style.css")
  eleventyConfig.addPassthroughCopy("./src/static/fonts")
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy({ "./src/static/favicon.svg": "/" })

  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}