import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { cacheBustConfig } from "./configs/cachebust.js";
import { extractExcerptConfig } from "./configs/excerpts.js";
import { configureCollections } from "./configs/collections.js";
import { configureMarkdown } from "./configs/markdown.js";
import { configureFilters } from "./configs/filters.js";


export default function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");

  configureMarkdown(eleventyConfig);
  configureFilters(eleventyConfig);
  configureCollections(eleventyConfig);
  cacheBustConfig(eleventyConfig);
  extractExcerptConfig(eleventyConfig);
}
