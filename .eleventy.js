module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/images')
    eleventyConfig.addPassthroughCopy('src/admin')

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