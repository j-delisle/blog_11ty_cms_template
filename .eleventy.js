module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('images')
    eleventyConfig.addPassthroughCopy('admin')

    return {
        addPassthroughCopy: true,
        templateFormats: ['njk', 'html', 'md'],
        markdownTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: '_site',
            includes: 'includes'
        }
    }
}