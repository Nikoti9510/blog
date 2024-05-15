module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/style');
    eleventyConfig.addPassthroughCopy('./src/layouts');
    eleventyConfig.addPassthroughCopy('./src/scripts');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}