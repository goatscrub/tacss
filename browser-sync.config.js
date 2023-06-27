/*
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 */
module.exports = {
    files: ["**/*.css", "**/*.html", "**/*.js", "**/*.php"],
    port: 5555,
    watch: true,
    server: false,
    serveStatic: [{
        route: '/fonts',
        dir:'/home/gnuk/workflow/common/fonts/',
    }],
    ui:false,
    open: false,
    notify: false,
}
