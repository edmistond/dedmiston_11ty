import { DateTime } from "luxon";
import _ from "lodash";
import striptags from "striptags";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownIt from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function (eleventyConfig) {
  const hashCache = {};

  // cache bust changed files while running watch
  eleventyConfig.on("eleventy.beforeWatch", async (changedFiles) => {
    for (const file of changedFiles) {
      delete hashCache[file];
    }
  });

  eleventyConfig.addFilter("digest", async (filePath) => {
    if (hashCache[filePath]) {
      return hashCache[filePath];
    }

    var absolutePath = path.join(__dirname, filePath);

    const fileBuffer = fs.readFileSync(absolutePath);
    const hash = crypto.createHash("sha256").update(fileBuffer).digest("hex");
    // const digestFileName = `${hash}-${filePath}`;

    const baseName = path.basename(absolutePath);
    const extName = path.extname(absolutePath);
    const nameOnly = path.basename(absolutePath, path.extname(absolutePath));

    // get relative path without the file name
    const relativePath = path.dirname(filePath);

    const digestFileName = `${nameOnly}-${hash}${extName}`;
    const digestFilePath = path.join(
      __dirname,
      "_site",
      relativePath,
      digestFileName
    );

    console.log("dumping debug data from digest filter");
    console.dir({
      filePath,
      absolutePath,
      hash,
      digestFileName,
      digestFilePath,
      relativePath,
      baseName: path.basename(absolutePath),
      extName: path.extname(absolutePath),
      nameOnly: path.basename(absolutePath, path.extname(absolutePath)),
    });

    hashCache[filePath] = filePath;
    if (!fs.existsSync(digestFilePath)) {
      if (!fs.existsSync(path.dirname(digestFilePath))) {
        fs.mkdirSync(path.dirname(digestFilePath), { recursive: true });
      }
      fs.copyFileSync(absolutePath, digestFilePath);
    }
    // Return the digest file name
    // console.log(`Copied ${filePath} to ${digestFilePath}`);
    return `${relativePath}/${digestFileName}`;
  });

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
}

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
