import { Stream } from "stream";

/** @description 本地存储键名 */
const LOCAL_KEY = {
  /** 版本自动更新状态，为0则下次版本更新时自动刷新浏览器 */
  AUTO_UPDATE_STATUS: "auto_update_status",
  /** 文件版本 */
  VERSION_DIST: "version_dist",
  /** 数据版本 */
  VERSION_DATA: "version_data",
  /** 多语言 */
  LANGUAGE: "language",
  /** 数据时间，用于在固定时间强制更新本地所有数据 */
  DATA_TIME: "data_time",
  /** 当前用户信息 */
  USER_DATA: "user_data",
  /** 记住用户信息 */
  REMEMBER_USER: "remember_user",
 
  /* 常用 */ 
  home: "主页",
  back: "返回",
  next: "下一个",
  prev: "上一个",
  refresh: "刷新",
  news: "消息",
  search: "搜索",
  follow: "关注",
  fans: "粉丝",
  follower: "粉丝",
  followed: "已关注",
  weiBo: "微博",
  tikTok: "抖音",
  littleRedBook: "小红书",
  bilibili: "哔哩哔哩",
  zhiHu: "知乎",
  qq: "QQ",
  Moments: "朋友圈",
  weChat: "微信",
  faceBook: "脸书",
  twitter: "推特",
  instagram: "instagram",
  youtube: "油管",
  google: "谷歌",
  googlePlay: "谷歌Play",
  stream: "Stream",
  epic: "Epic",
  appStore: "AppStore",
  app: "应用",
  MiniApp: "小程序",

  icon: "图标",
  name: "名称",
  type: "类型",
  effect: "效果",
  color: "颜色",
};

export { LOCAL_KEY };
