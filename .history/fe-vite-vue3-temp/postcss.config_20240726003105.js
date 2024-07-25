const { root } = require("./.eslintrc");

module.exports = {
  // 配置PostCSS解析器，这里使用默认的'css'解析器
  parser: 'postcss-scss', // 或者'css'，根据你的项目实际使用的CSS预处理器选择

  // 插件列表
  plugins: {
    // 添加你项目中需要的PostCSS插件，例如自动添加浏览器前缀
    'autoprefixer': {}, // 这是一个常用的插件，用于自动添加厂商前缀
    'postcss-import': {},
    // 'postcss-pxtorem': {
    //   rootValue: 16,  // 根字体大小
    //   propList: ['*'],  // 所有属性都转换
    //   selectorBlackList: ['html'],  // 忽略html根字体大小转换
    //   replace: true,  // 指定是否替换原有的px值，默认为true，表示需要替换
    //   mediaQuery: false,    // 媒体查询里的px不转换
    //   minPixelValue: 2  // 指定需要转换的最小像素值，默认为0。
    // },
    'postcss-px-to-viewport': {
      unitToConvert: 'px', // 要转换的单位
      viewportWidth: 1920, // 视口宽度，对应设计稿的宽度，理想视口宽度为375（高清屏一个点为两个像素）
      // viewportHeight: 1080, // 视口高度，对应设计稿的高度
      unitPrecision: 5, // 转换后的精度，小数点后保留几位
      propList: ['*'], // 可以转换的属性列表，'*' 表示所有属性
      viewportUnit: 'vw', // 希望转换成的视口单位
      fontViewportUnit: 'vw', // 字体相关的视口单位
      selectorBlackList: ['ignore-'], // 忽略某些类名的转换
      minPixelValue: 1, // 最小的像素值不转换
      mediaQuery: false, // 是否在媒体查询的 CSS 代码中也转换 px
      replace: true, // 是否直接替换，不允许 px 存在
      exclude: [/node_modules/], // 排除不需要转换的文件正则匹配
      excludeIfViewportEqual: null, // 如果视口等于某个值时排除转换
      include: undefined, // 包含需要转换的文件正则匹配
      landscape: false, // 是否处理横屏情况，是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'vw', // 横屏时使用的单位
      landscapeWidth: 1624, // 横屏时使用的视口宽度
    }
  },
};