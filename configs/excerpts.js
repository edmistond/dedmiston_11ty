import striptags from "striptags";

function extractExcerptConfig(eleventyConfig) {
    eleventyConfig.addShortcode("excerpt", (article) => extractExcerpt(article));
}

function extractExcerpt(article) {
    if (!article.hasOwnProperty("content")) {
      console.warn(
        'Failed to extract excerpt: Document has no property "content".'
      );
      return "";
    }
  
    const content = article.content;
  
    // find index of "<!-- more -->" if it exists
    const smartExcerptIndex = content.indexOf("<!-- more -->");
  
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
  
  export { extractExcerptConfig };