/**
 * Note: configs in _data/temp.yml will replace configs in hexo.theme.config.
 */
hexo.on('generateBefore', function () {
    if (hexo.locals.get) {
        var data = hexo.locals.get('data')
        data && data.oasis && (hexo.theme.config = data.oasis)
    }

    const themeConfig = hexo.theme.config
    const hexoConfig = hexo.config
    themeConfig.hljs_settings = hexoConfig.highlight
    themeConfig.prismjs_settings = hexoConfig.prismjs
})
