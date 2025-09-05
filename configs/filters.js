import { DateTime } from "luxon";

function filterConfig(eleventyConfig) {
  eleventyConfig.addFilter("readableDate", (date) => {
    return DateTime.fromJSDate(date, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter("machineDate", (date) => {
    return DateTime.fromJSDate(date, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addShortcode("buildYear", () => {
    return `${new Date().getFullYear()}`;
  });
}

export { filterConfig };
