import {DateTime} from "luxon";
import _ from "lodash";
import striptags from "striptags";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownIt from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";

export default function (eleventyConfig) {
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
        return DateTime.fromJSDate(date, {zone: "utc"}).toFormat("dd LLL yyyy");
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

    eleventyConfig.addCollection("captions_project", function (collection) {
        return collection.getFilteredByTag("captions").reverse();
    });
};

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
