import markdownIt from "markdown-it";
import edmistondFootnote from "edmistond-footnotes";

function markdownConfig(eleventyConfig) {
  const markdownOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };

  let markdownLibrary = markdownIt(markdownOptions).use(edmistondFootnote);
  eleventyConfig.setLibrary("md", markdownLibrary);
}

export { markdownConfig };
