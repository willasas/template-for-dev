// 定义语言数据结构的接口
interface LanguageData {
  enName: string;
  cnName: string;
  code: string;
  description: string;
  added: string;
  customSpeechSupport: string;
  Scope: string | undefined;
}

// 声明一个数组来保存提取的 cnName 和 code 字段
const langArr: Array<{ cnName: string; code: string }> = [];

// 假设原始数据存储在一个名为 languages 的数组中
const languages = [
  {"enName": "", "cnName": "南非荷兰语(南非)", "code": "af-ZA", "description": "Afrikaans (South Africa)", "added": "2005-10-16", "customSpeechSupport": "Plain text"},
  {"enName": "", "cnName": "阿姆哈拉语(埃塞俄比亚)", "code": "am-ET", "description": "Amharic (Ethiopia)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "阿拉伯语(阿拉伯联合酋长国)", "code": "ar-AE", "description": "Arabic (United Arab Emirates)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "阿拉伯语(巴林)", "code": "ar-BH", "description": "Arabic (Bahrain)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": ""},
  {"enName": "", "cnName": "阿拉伯语(阿尔及利亚)", "code": "ar-DZ", "description": "Arabic (Algeria)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": ""},
  {"enName": "", "cnName": "阿拉伯语(埃及)", "code": "ar-EG", "description": "Arabic (Egypt)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": ""},
  {"enName": "", "cnName": "阿拉伯语(以色列)", "code": "ar-IL", "description": "Arabic (Israel)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "阿拉伯语(伊拉克)", "code": "ar-IQ", "description": "Arabic (Iraq)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "阿拉伯语(约旦)", "code": "ar-JO", "description": "Arabic (Jordan)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "阿拉伯语(科威特)", "code": "ar-KW", "description": "Arabic (Kuwait)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "阿拉伯语(黎巴嫩)", "code": "ar-LB", "description": "Arabic (Lebanon)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "阿拉伯语(利比亚)", "code": "ar-LY", "description": "Arabic (Libya)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "阿拉伯语(摩洛哥)", "code": "ar-MA", "description": "Arabic (Morocco)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": ""},
  {"enName": "", "cnName": "阿拉伯语(阿曼)", "code": "ar-OM", "description": "Arabic (Oman)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "阿拉伯语(巴勒斯坦领土)", "code": "ar-PS", "description": "Arabic (Palestinian Territories)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "阿拉伯语(卡塔尔)", "code": "ar-QA", "description": "Arabic (Qatar)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "阿拉伯语(沙特阿拉伯)", "code": "ar-SA", "description": "Arabic (Saudi Arabia)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": ""},
  {"enName": "", "cnName": "阿拉伯语(叙利亚)", "code": "ar-SY", "description": "Arabic (Syria)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "阿拉伯语(突尼斯)", "code": "ar-TN", "description": "Arabic (Tunisia)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": ""},
  {"enName": "", "cnName": "阿拉伯语(也门)", "code": "ar-YE", "description": "Arabic (Yemen)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": ""},
  {"enName": "", "cnName": "阿塞拜疆语(拉丁语，阿塞拜疆)", "code": "az-AZ", "description": "Azerbaijani (Latin, Azerbaijan)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  
  {"enName": "", "cnName": "保加利亚语(保加利亚)", "code": "bg-BG", "description": "Bulgarian (Bulgaria)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "孟加拉语(印度)", "code": "bn-IN", "description": "Bengali (India)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "波斯尼亚语(拉丁文，波斯尼亚和黑塞哥维那)", "code": "bs-BA", "description": "Bosnian (Bosnia and Herzegovina)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  
  {"enName": "", "cnName": "加泰罗尼亚语(西班牙)", "code": "ca-ES", "description": "Catalan (Spain)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "捷克语(捷克)", "code": "cs-CZ", "description": "Czech (Czechia)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "威尔士语(英国)", "code": "cy-GB", "description": "Welsh (United Kingdom)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},

  {"enName": "", "cnName": "丹麦语(丹麦)", "code": "da-DK", "description": "Danish (Denmark)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "德语(奥地利)", "code": "de-AT", "description": "German (Austria)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Structured text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "德语(瑞士)", "code": "de-CH", "description": "German (Switzerland)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "德语(德国)", "code": "de-DE", "description": "German (Germany)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Structured text,Pronunciation", "Scope": ""},

  {"enName": "", "cnName": "希腊语(希腊)", "code": "el-GR", "description": "Greek (Greece)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "英语(澳大利亚)", "code": "en-AU", "description": "English (Australia)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Audio,Plain text,Structured text,Pronunciation,Phrase list", "Scope": ""},
  {"enName": "", "cnName": "英语(加拿大)", "code": "en-CA", "description": "English (Canada)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Audio,Plain text,Structured text,Pronunciation,Phrase list", "Scope": ""},
  {"enName": "", "cnName": "英语(英国)", "code": "en-GB", "description": "English (United Kingdom)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Audio,Plain text,Structured text,Pronunciation,Phrase list", "Scope": ""},
  {"enName": "", "cnName": "英语(加纳)", "code": "en-GH", "description": "English (Ghana)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Audio,Plain text,Structured text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "英语(香港特别行政区)", "code": "en-HK", "description": "English (Hong Kong SAR)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Audio,Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "英语(爱尔兰)", "code": "en-IE", "description": "English (Ireland)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Audio,Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "英语(印度)", "code": "en-IN", "description": "English (India)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Structured text,Pronunciation,Phrase list", "Scope": ""},
  {"enName": "", "cnName": "英语(肯尼亚)", "code": "en-KE", "description": "English (Kenya)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Audio,Plain text,Structured text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "英语(尼日利亚)", "code": "en-NG", "description": "English (Nigeria)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Audio,Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "英语(新西兰)", "code": "en-NZ", "description": "English (New Zealand)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Audio,Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "英语(菲律宾)", "code": "en-PH", "description": "English (Philippines)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Audio,Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "英语(新加坡)", "code": "en-SG", "description": "English (Singapore)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Audio,Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "英语(坦桑尼亚)", "code": "en-TZ", "description": "English (Tanzania)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Audio,Plain text,Structured text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "英语(美国)", "code": "en-US", "description": "English (United States)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Audio,Plain text,Structured text,Pronunciation,Phrase list", "Scope": ""},
  {"enName": "", "cnName": "英语(南方)", "code": "en-ZA", "description": "English (South Africa)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Audio,Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(阿根廷)", "code": "es-AR", "description": "Spanish (Argentina)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Structured text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(玻利维亚)", "code": "es-BO", "description": "Spanish (Bolivia)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Structured text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(智利)", "code": "es-CL", "description": "Spanish (Chile)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Structured text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(哥伦比亚)", "code": "es-CO", "description": "Spanish (Colombia)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Structured text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(哥斯达黎加)", "code": "es-CR", "description": "Spanish (Costa Rica)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Structured text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(古巴)", "code": "es-CU", "description": "Spanish (Cuba)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Structured text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(多米尼加共和国)", "code": "es-DO", "description": "Spanish (Dominican Republic)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Structured text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(厄瓜多尔)", "code": "es-EC", "description": "Spanish (Ecuador)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Structured text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(西班牙)", "code": "es-ES", "description": "Spanish (Spain)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Structured text,Pronunciation,Phrase list", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(赤道几内亚)", "code": "es-GQ", "description": "Spanish (Equatorial Guinea)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Structured text", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(危地马拉)", "code": "es-GT", "description": "Spanish (Guatemala)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Structured text", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(洪都拉斯)", "code": "es-HN", "description": "Spanish (Honduras)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Structured text", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(墨西哥)", "code": "es-MX", "description": "Spanish (Mexico)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Structured text,Pronunciation,Phrase list", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(尼加拉瓜)", "code": "es-NI", "description": "Spanish (Nicaragua)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Structured text", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(巴拿马)", "code": "es-PA", "description": "Spanish (Panama)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Structured text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(秘鲁)", "code": "es-PE", "description": "Spanish (Peru)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Structured text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(波多黎各)", "code": "es-PR", "description": "Spanish (Puerto Rico)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Structured text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(巴拉圭)", "code": "es-PY", "description": "Spanish (Paraguay)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Structured text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(萨尔瓦多)", "code": "es-SV", "description": "Spanish (El Salvador)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(美国)", "code": "es-US", "description": "Spanish (United States)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Structured text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(乌拉圭)", "code": "es-UY", "description": "Spanish (Uruguay)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Structured text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "西班牙语(委内瑞拉)", "code": "es-VE", "description": "Spanish (Venezuela)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Structured text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "爱沙尼亚语(爱沙尼亚)", "code": "et-EE", "description": "Estonian (Estonia)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "巴士克语", "code": "eu-ES", "description": "Basque", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  
  {"enName": "", "cnName": "波斯语(伊朗)", "code": "fa-IR", "description": "Persian (Iran)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "芬兰语(芬兰)", "code": "fi-FI", "description": "Finnish (Finland)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "菲律宾语(菲律宾)", "code": "fil-PH", "description": "Filipino (Philippines)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "法语(比利时)", "code": "fr-BE", "description": "French (Belgium)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": ""},
  {"enName": "", "cnName": "法语(加拿大)", "code": "fr-CA", "description": "French (Canada)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": ""},
  {"enName": "", "cnName": "法语(瑞士)", "code": "fr-CH", "description": "French (Switzerland)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "法语(法国)", "code": "fr-FR", "description": "French (France)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Structured text,Pronunciation,Phrase list", "Scope": ""},

  {"enName": "", "cnName": "爱尔兰语(爱尔兰)", "code": "ga-IE", "description": "Irish (Ireland)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "加利西亚语", "code": "gl-ES", "description": "Galician", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "古吉拉特语(印度)", "code": "gu-IN", "description": "Gujarati (India)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  
  {"enName": "", "cnName": "希伯来语(以色列)", "code": "he-IL", "description": "Hebrew (Israel)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "印地语(印度)", "code": "hi-IN", "description": "Hindi (India)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Phrase list", "Scope": ""},
  {"enName": "", "cnName": "克罗地亚语(克罗地亚)", "code": "hr-HR", "description": "Croatian (Croatia)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "匈牙利语(匈牙利)", "code": "hu-HU", "description": "Hungarian (Hungary)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "亚美尼亚语(亚美尼亚)", "code": "hy-AM", "description": "Armenian (Armenia)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  
  {"enName": "", "cnName": "印度尼西亚语(印度尼西亚)", "code": "id-ID", "description": "Indonesian (Indonesia)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "冰岛语(冰岛)", "code": "is-IS", "description": "Icelandic (Iceland)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "意大利语(瑞士)", "code": "it-CH", "description": "Italian (Switzerland)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": ""},
  {"enName": "", "cnName": "意大利语(意大利)", "code": "it-IT", "description": "Italian (Italy)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Structured text,Pronunciation,Phrase list", "Scope": ""},
  
  {"enName": "", "cnName": "日语(日本)", "code": "ja-JP", "description": "Japanese (Japan)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Structured text,Phrase list", "Scope": ""},
  {"enName": "", "cnName": "爪哇语(拉丁语，印度尼西亚)", "code": "jv-ID", "description": "Javanese (Latin, Indonesia)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},

  {"enName": "", "cnName": "格鲁吉亚语(格鲁吉亚)", "code": "ka-GE", "description": "Georgian (Georgia)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "哈萨克语(哈萨克斯坦)", "code": "kk-KZ", "description": "Kazakh (Kazakhstan)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "高棉语(柬埔寨)", "code": "km-KH", "description": "Khmer (Cambodia)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "卡纳达语(印度)", "code": "kn-IN", "description": "Kannada (India)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "韩语(韩国)", "code": "ko-KR", "description": "Korean (Korea)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Structured text,Phrase list", "Scope": ""},

  {"enName": "", "cnName": "老挝(老挝)", "code": "lo-LA", "description": "Lao (Laos)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"enName": "", "cnName": "立陶宛语(立陶宛)", "code": "lt-LT", "description": "Lithuanian (Lithuania)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": ""},
  {"enName": "", "cnName": "拉脱维亚语(拉脱维亚)", "code": "lv-LV", "description": "Latvian (Latvia)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": "macro"},
  
  {"enName": "", "cnName": "马其顿语(北马其顿)", "code": "mk-MK", "description": "Macedonian (North Macedonia)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "马拉雅拉姆语(印度)", "code": "ml-IN", "description": "Malayalam (India)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "蒙古语(蒙古)", "code": "mn-MN", "description": "Mongolian (Mongolia)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "马拉地语(印度)", "code": "mr-IN", "description": "Marathi (India)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "马来语(马来西亚)", "code": "ms-MY", "description": "Malay (Malaysia)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "马耳他语(马耳他)", "code": "mt-MT", "description": "Maltese (Malta)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "缅甸语(缅甸)", "code": "my-MM", "description": "Burmese (Myanmar)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},

  {"enName": "", "cnName": "挪威语博克马尔语(挪威)", "code": "nb-NO", "description": "Norwegian Bokmål (Norway)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "尼泊尔语(尼泊尔)", "code": "ne-NP", "description": "Nepali (Nepal)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "荷兰语(比利时)", "code": "nl-BE", "description": "Dutch (Belgium)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "荷兰语(荷兰)", "code": "nl-NL", "description": "Dutch (Netherlands)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Pronunciation", "Scope": "macro"},

  {"enName": "", "cnName": "波兰语(波兰)", "code": "pl-PL", "description": "Polish (Poland)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Pronunciation", "Scope": "macro"},
  {"enName": "", "cnName": "普什图语(阿富汗)", "code": "ps-AF", "description": "Pashto (Afghanistan)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "葡萄牙语(巴西)", "code": "pt-BR", "description": "Portuguese (Brazil)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Structured text,Pronunciation,Phrase list", "Scope": "macro"},
  {"enName": "", "cnName": "葡萄牙语(葡萄牙)", "code": "pt-PT", "description": "Portuguese (Portugal)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Pronunciation", "Scope": "macro"},

  {"enName": "", "cnName": "罗马尼亚语(罗马尼亚)", "code": "ro-RO", "description": "Romanian (Romania)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": "macro"},
  {"enName": "", "cnName": "俄语(俄罗斯)", "code": "ru-RU", "description": "Russian (Russia)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},

  {"enName": "", "cnName": "僧伽罗语(斯里兰卡)", "code": "si-LK", "description": "Sinhala (Sri Lanka)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "斯洛伐克语(斯洛伐克)", "code": "sk-SK", "description": "Slovak (Slovakia)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": "macro"},
  {"enName": "", "cnName": "斯洛文尼亚语(斯洛文尼亚)", "code": "sl-SI", "description": "Slovenian (Slovenia)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": "macro"},
  {"enName": "", "cnName": "索马里语(索马里)", "code": "so-SO", "description": "Somali (Somalia)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "阿尔巴尼亚语(阿尔巴尼亚)", "code": "sq-AL", "description": "Albanian (Albania)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "塞尔维亚语(西里尔字母，塞尔维亚)", "code": "sr-RS", "description": "Serbian (Cyrillic, Serbia)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "瑞典语(瑞典)", "code": "sv-SE", "description": "Swedish (Sweden)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Pronunciation", "Scope": "macro"},
  {"enName": "", "cnName": "斯瓦希里语(肯尼亚)", "code": "sw-KE", "description": "Swahili (Kenya)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "斯瓦希里语(坦桑尼亚)", "code": "sw-TZ", "description": "Swahili (Tanzania)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},

  {"enName": "", "cnName": "泰米尔语(印度)", "code": "ta-IN", "description": "Tamil (India)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "泰卢固语(印度)", "code": "te-IN", "description": "Telugu (India)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "泰语(泰国)", "code": "th-TH", "description": "Thai (Thailand)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "土耳其语(土耳其)", "code": "tr-TR", "description": "Turkish (Turkey)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Structured text", "Scope": "macro"},

  {"enName": "", "cnName": "乌克兰语(乌克兰)", "code": "uk-UA", "description": "Ukrainian (Ukraine)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "乌兹别克语(拉丁语，乌兹别克斯坦)", "code": "uz-UZ", "description": "Uzbek (Latin, Uzbekistan)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  
  {"enName": "", "cnName": "越南语(越南)", "code": "vi-VN", "description": "Vietnamese (Vietnam)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},
  
  {"enName": "", "cnName": "中文(吴语，简体)", "code": "wuu-CN", "description": "Chinese (Wu, Simplified)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},
  
  {"enName": "", "cnName": "中文(粤语、简体)", "code": "yue-CN", "description": "Chinese (Cantonese, Simplified)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},
  
  {"enName": "", "cnName": "中文(普通话、简体)", "code": "zh-CN", "description": "Chinese (Mandarin, Simplified)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Structured text,Phrase list", "Scope": "macro"},
  {"enName": "", "cnName": "中文(简体吉鲁普通话)", "code": "zh-CN-shandong", "description": "Chinese (Jilu Mandarin, Simplified)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "中文(西南普通话，简体)", "code": "zh-CN-sichuan", "description": "Chinese (Southwestern Mandarin, Simplified)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "中文(粤语、繁体)", "code": "zh-HK", "description": "Chinese (Cantonese, Traditional)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "中文(台湾普通话，繁体)", "code": "zh-TW", "description": "Chinese (Taiwanese Mandarin, Traditional)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},
  {"enName": "", "cnName": "祖鲁语(南非)", "code": "zu-ZA", "description": "Zulu (South Africa)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"}
];

// 遍历原始数据并填充 langArr 数组
// languages.forEach((lang: LanguageData) => {
//   langArr.push({ cnName: lang.cnName, code: lang.code });
// });

// 现在 langArr 包含了所有需要的 cnName 和 code 字段，可以用于后续操作

export { languages };