const { root } = require("./.eslintrc");

module.exports = {
  // 配置PostCSS解析器，这里使用默认的'css'解析器
  parser: 'postcss-scss', // 或者'css'，根据你的项目实际使用的CSS预处理器选择

  // 插件列表
  plugins: {
    // 添加你项目中需要的PostCSS插件，例如自动添加浏览器前缀
    'autoprefixer': {}, // 这是一个常用的插件，用于自动添加厂商前缀
    'postcss-import': {},
    'postcss-pxtorem': {
      rootValue: 16,  // 根字体大小
      propList: ['*'],  // 所有属性都转换
      selectorBlackList: ['html'],  // 忽略html根字体大小转换
      replace: true,  // 指定是否替换原有的px值，默认为true，表示需要替换
      mediaQuery: false,    // 媒体查询里的px不转换
      minPixelValue: 2  // 指定需要转换的最小像素值，默认为0。
    }
  },
};