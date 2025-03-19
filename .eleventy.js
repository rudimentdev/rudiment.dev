module.exports = function (eleventy) {
    eleventy.addPassthroughCopy("assets");

    return {
        templateFormats: ["html", "md"],
        dir: {
            input: ".",
            output: "_site",
        }
    };
}