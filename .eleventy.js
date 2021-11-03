module.exports = function (eleventyConfig) {
	
	eleventyConfig.addPassthroughCopy("./src/css/");
	eleventyConfig.addWatchTarget("./src/css/");
	
	eleventyConfig.addPassthroughCopy("./src/js/");
	eleventyConfig.addWatchTarget("./src/js/");
	
	eleventyConfig.addPassthroughCopy("./src/images/");
	eleventyConfig.addWatchTarget("./src/images/");
	
	return {
		dir: {
			input: "src",
			output:"public",
		},
	};
};
	