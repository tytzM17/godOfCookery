module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/js/')
  eleventyConfig.addWatchTarget('./src/js/')
  eleventyConfig.addPassthroughCopy('./src/contracts/')
  eleventyConfig.addWatchTarget('./src/contracts/')
  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  }
}
