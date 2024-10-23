import { DateTime } from "luxon";

function filterConfig(eleventyConfig) {
  eleventyConfig.addFilter("readableDate", (date) => {
    return DateTime.fromJSDate(date, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addShortcode("buildYear", () => {
    return `${new Date().getFullYear()}`;
  });
}

export { filterConfig };
