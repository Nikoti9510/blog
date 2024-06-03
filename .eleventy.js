const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {

    let options = {
		html: true,
		breaks: true,
		linkify: true,
	};

    eleventyConfig.setLibrary("md", markdownIt(options));
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/style');
    eleventyConfig.addPassthroughCopy('./src/layouts');
    eleventyConfig.addPassthroughCopy('./src/scripts');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/_redirects');

    eleventyConfig.addFilter("postDate", (dateObj) => {
        const options = { year: "numeric", month: "long", day: "2-digit" };
        return new Date(dateObj).toLocaleDateString("fr-FR", options);
        // return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    // Import prior to `module.exports` within `.eleventy.js`
    const slugify = require("slugify");
    eleventyConfig.addFilter("slug", (str) => {
        if (!str) {
            return;
        }
        return slugify(str, {
            lower: true,
            strict: true,
            remove: /["]/g,
         });
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}