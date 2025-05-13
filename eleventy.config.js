module.exports = function (eleventyConfig) {
    // Copy `css` folder to `_site`
    eleventyConfig.addPassthroughCopy("src/css");
  
    return {
      dir: {
        input: "src",
        output: "docs"
      }
    };
  };