export const pathBase = () => {
  if (process.env.NODE_ENV === 'production') {
    // 生产环境静态资源路径
    return '/';
  } else {
    // 开发环境静态资源路径
    return './src/';
  }
};