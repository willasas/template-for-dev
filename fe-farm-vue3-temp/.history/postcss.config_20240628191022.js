module.exports = {
  // 配置PostCSS解析器，这里使用默认的'css'解析器
  parser: 'postcss-scss', // 或者'css'，根据你的项目实际使用的CSS预处理器选择

  // 插件列表
  plugins: {
    // 添加你项目中需要的PostCSS插件，例如自动添加浏览器前缀
    'autoprefixer': {}, // 这是一个常用的插件，用于自动添加厂商前缀
  },
};