const striptags = require("striptags");
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const _ = require("lodash");
let markdownIt = require("markdown-it");
let markdownItFootnote = require("markdown-it-footnote");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  const markdownOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };
  
  let markdownLibrary = markdownIt(markdownOptions).use(markdownItFootnote);
  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addShortcode("excerpt", (article) => extractExcerpt(article));
  eleventyConfig.addFilter("readableDate", (date) => {
    return DateTime.fromJSDate(date, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addCollection("recent_posts", function (collection) {
    return collection.getFilteredByTag("post").reverse().slice(0, 8);
  });

  eleventyConfig.addCollection("postsByYear", (collection) => {
    return _.chain(collection.getAllSorted())
      .groupBy((post) => post.date.getFullYear())
      .toPairs()
      .reverse()
      .value();
  });
};

function extractExcerpt(article) {
  if (!article.hasOwnProperty("content")) {
    console.warn(
      'Failed to extract excerpt: Document has no property "content".'
    );
    return "";
  }

  let excerpt = null;
  const content = article.content;

  // find index of "<!-- more -->" if it exists
  const smartExcerptIndex = content.indexOf("<!-- more -->");

  excerpt = "";

  if (smartExcerptIndex >= 0) {
    const m = content.match(/([\s\S]+)<!-- more -->/);
    if (m) {
      return striptags(m[1]).trim().concat("...");
    }
  } else {
    return striptags(content)
      .substring(0, 500)
      .replace(/^\\s+|\\s+$|\\s+(?=\\s)/g, "")
      .trim()
      .concat("...");
  }
}
