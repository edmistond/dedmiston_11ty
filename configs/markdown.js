import markdownIt from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";

function markdownConfig(eleventyConfig) {
    const markdownOptions = {
        html: true,
        breaks: true,
        linkify: true,
      };
    
      let markdownLibrary = markdownIt(markdownOptions).use(markdownItFootnote);
      eleventyConfig.setLibrary("md", markdownLibrary);    
}

export { markdownConfig };
