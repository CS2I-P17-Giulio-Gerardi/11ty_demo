// -------------------------- 11ty config -------------------

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  // Référencement du dossier d'images
  eleventyConfig.addPassthroughCopy("src/images");

  // Référencement du dossier de fonts
  eleventyConfig.addPassthroughCopy("src/fonts");

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addWatchTarget("./src/_includes/styles/tailwind.css");
  eleventyConfig.addNunjucksAsyncFilter("postcss", postcssFilter);

  // Configuration
  return {
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};

// -------------------------- TailWind CSS config -------------------
const tailwind = require("tailwindcss");
const postCss = require("postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssFilter = (cssCode, done) => {
  postCss([
    tailwind(require("./tailwind.config")),
    autoprefixer(),
    cssnano({ preset: "default" }),
  ])
    .process(cssCode, {
      from: "./src/_includes/styles/tailwind.css",
    })
    .then(
      (r) => done(null, r.css),
      (e) => done(e, null)
    );
};
