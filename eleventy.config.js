// eleventy.config.js
module.exports = function(eleventyConfig) {
  // Copy assets to output directory
  eleventyConfig.addPassthroughCopy("src/assets");

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/assets/css/");

  eleventyConfig.addCollection("project", function(collectionApi) {
    return collectionApi.getFilteredByTag("project");
  });

  // Define blog collection
  eleventyConfig.addCollection("blog", function(collectionApi) {
    const posts = collectionApi.getFilteredByTag("blog").sort((a, b) => b.date - a.date);
    console.log("Blog Posts:", posts.map(p => p.data.title));
    return posts;
  });

  // Add date filter
  eleventyConfig.addFilter("date", function(dateObj, format) {
    const date = new Date(dateObj);
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return format
      .replace("%B", month)
      .replace("%d", day)
      .replace("%Y", year);
  });

  // Configure directory structure
  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};