// 一屏适配（基于根字体的rem适配）
function remAdapt() {
  // 定义多种设计稿尺寸
  const designDimensions = [
    { width: 3840, height: 2560, rootFontSize: 100 },
    { width: 2560, height: 1440, rootFontSize: 100 },
    { width: 1920, height: 1080, rootFontSize: 100 },
    { width: 750, height: 1624, rootFontSize: 100 }
  ];

  // 获取当前屏幕尺寸
  const clientWidth = document.documentElement.clientWidth;
  const clientHeight = document.documentElement.clientHeight;

  // 找到最接近的设计稿尺寸
  let closestDesign = designDimensions.reduce((closest, current) => {
    const currentAspectRatio = current.width / current.height;
    const closestAspectRatio = closest.width / closest.height;
    const currentDiff = Math.abs(clientWidth / clientHeight - currentAspectRatio);
    const closestDiff = Math.abs(clientWidth / clientHeight - closestAspectRatio);

    return currentDiff < closestDiff ? current : closest;
  }, designDimensions[0]);

  // 计算字体大小
  let fontSize;
  if (clientWidth / clientHeight < closestDesign.width / closestDesign.height) {
    fontSize = (clientWidth / closestDesign.width) * closestDesign.rootFontSize;
  } else {
    fontSize = (clientHeight / closestDesign.height) * closestDesign.rootFontSize;
  }

  // 设置字体大小
  document.documentElement.style.fontSize = `${fontSize}px`;
}

// 使用rem适配，初始化
remAdapt();
// 页面加载时调整
document.addEventListener('DOMContentLoaded', remAdapt);
// 窗口大小改变时重新调整
window.addEventListener('resize', remAdapt);
// 页面完全加载时再调整一次
window.addEventListener('load', remAdapt);