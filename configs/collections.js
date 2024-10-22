import _ from "lodash";

function configureCollections(eleventyConfig) {
  eleventyConfig.addCollection("recent_posts", function (collection) {
    return collection.getFilteredByTag("post").reverse().slice(0, 8);
  });

  eleventyConfig.addCollection("captions_project", function (collection) {
    return collection.getFilteredByTag("captions").reverse();
  });

  eleventyConfig.addCollection("postsByYear", (collection) => {
    return _.chain(collection.getAllSorted())
      .groupBy((post) => post.date.getFullYear())
      .toPairs()
      .reverse()
      .value();
  });
}

export { configureCollections };
