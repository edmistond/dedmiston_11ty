import { DateTime } from "luxon";

function configureFilters(eleventyConfig) {
    eleventyConfig.addFilter("readableDate", (date) => {
        return DateTime.fromJSDate(date, { zone: "utc" }).toFormat("dd LLL yyyy");
      });    
}

export { configureFilters };