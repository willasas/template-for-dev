module.exports = {
  singleQuote: true,  //使用单引号
  semi: true, //句末使用分号
  trailingComma: 'all', //多行时尽可能打印尾随逗号
  printWidth: 120,    //单行长度
  tabWidth: 2,        //缩进长度
  useTabs: true,      //使用空格代替tab缩进
  bracketSpacing: true,  //在对象前后添加空格-eg: { foo: bar }
  arrowParens: 'always',    //单参数箭头函数参数周围使用圆括号-eg: (x) => x
  proseWrap: 'never', 
  endOfLine: 'auto',    //结束行形式
  embeddedLanguageFormatting: 'auto', //对引用代码进行格式化
  eslintIntegration: true,  
  insertPragma: false,    //在已被preitter格式化的文件顶部加上标注
  quoteProps: 'as-needed',    //仅在必需时为对象的key添加引号
  htmlWhitespaceSensitivity: 'ignore', //对HTML全局空白不敏感
  vueIndentScriptAndStyle: false, //不对vue中的script及style标签缩进
}