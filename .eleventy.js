module.exports = function (eleventyConfig) {
	
	eleventyConfig.addPassthroughCopy("./src/css/");
	eleventyConfig.addWatchTarget("./src/css/");
	
	eleventyConfig.addPassthroughCopy("./src/js/");
	eleventyConfig.addWatchTarget("./src/js/");
	
	eleventyConfig.addPassthroughCopy("./src/images/");
	eleventyConfig.addWatchTarget("./src/images/");
	
	eleventyConfig.addPassthroughCopy("./src/contracts/");
	eleventyConfig.addWatchTarget("./src/contracts/");
	
	return {
		dir: {
			input: "src",
			output:"public",
		},
	};
};
	