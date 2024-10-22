import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { cacheBustConfig } from "./configs/cachebust.js";
import { extractExcerptConfig } from "./configs/excerpts.js";
import { collectionConfig } from "./configs/collections.js";
import { markdownConfig } from "./configs/markdown.js";
import { filterConfig } from "./configs/filters.js";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");

  markdownConfig(eleventyConfig);
  filterConfig(eleventyConfig);
  collectionConfig(eleventyConfig);
  cacheBustConfig(eleventyConfig);
  extractExcerptConfig(eleventyConfig);
}
