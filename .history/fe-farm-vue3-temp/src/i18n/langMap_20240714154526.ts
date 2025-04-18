// 语言映射，通过Map的key和value来控制语言的切换，也就是键值对控制
export const langMap = new Map([
  ['zh-CN', 'zh'],
  ['en-US', 'en'],
  ['zh-TW', 'zh-TW'],
  ["af-ZA", "南非荷兰语(南非)"],
  ["am-ET", "阿姆哈拉语(埃塞俄比亚)"],
  ["ar-AE", "阿拉伯语(阿拉伯联合酋长国)"],
  ["Arabic (United Arab Emirates)", "阿拉伯语(巴林)"],
  ["ar-BH", "Arabic (Bahrain)"],
  ["ar-DZ", "阿拉伯语(阿尔及利亚)"],
  ["Arabic (Algeria)", "阿拉伯语(埃及)"],
  ["ar-EG", "Arabic (Egypt)"],
  ["ar-IL", "阿拉伯语(以色列)"],
  ["ar-IQ", "阿拉伯语(伊拉克)"],
  ["ar-JO", "阿拉伯语(约旦)"],
  ["ar-KW", "阿拉伯语(科威特)"],
  ["Arabic (Kuwait)", "阿拉伯语(黎巴嫩)"],
  ["ar-LB", "Arabic (Lebanon)"],
  ["ar-LY", "阿拉伯语(利比亚)"],
  ["ar-MA", "阿拉伯语(摩洛哥)"],
  ["ar-OM", "阿拉伯语(阿曼)"],
  ["ar-PS", "阿拉伯语(巴勒斯坦领土)"],
  ["ar-QA", "阿拉伯语(卡塔尔)"],
  ["ar-SA", "阿拉伯语(沙特阿拉伯)"],
  ["ar-SY", "阿拉伯语(叙利亚)"],
  ["ar-TN", "阿拉伯语(突尼斯)"],
  ["ar-YE", "阿拉伯语(也门)"],
  ["az-AZ", "阿塞拜疆语(拉丁语，阿塞拜疆)"],

  ["bg-BG", "保加利亚语(保加利亚)"],
  ["bn-IN", "孟加拉语(印度)"],
  ["bs-BA", "波斯尼亚语(拉丁文，波斯尼亚和黑塞哥维那)"],

  ["ca-ES", "加泰罗尼亚语(西班牙)"],
  ["cs-CZ", "捷克语(捷克)"],
  ["cy-GB", "威尔士语(英国)"],
  ["", ""],

  ["da-DK", "丹麦语(丹麦)"],
  ["de-AT", "德语(奥地利)"],
  ["de-CH", "德语(瑞士)"],
  ["de-DE", "德语(德国)"],
 
  ["希腊语(希腊)", "el-GR", ],
  ["英语(澳大利亚)", "en-AU",],
  ["英语(加拿大)", "en-CA",],
  ["英语(英国)", "en-GB",],
  ["英语(加纳)", "en-GH",],
  ["英语(香港特别行政区)", "en-HK", ],
  ["英语(爱尔兰)", "en-IE", ],
  ["英语(印度)", "en-IN", ],
  ["英语(肯尼亚)", "en-KE", ],
  ["英语(尼日利亚)", "en-NG", ],
  ["英语(新西兰)", "en-NZ",  ],
  ["英语(菲律宾)", "en-PH",],
  ["英语(新加坡)", "en-SG",],
  ["英语(坦桑尼亚)", "en-TZ",],
  ["英语(美国)", "en-US", ],
  ["英语(南方)", "en-ZA", ],
  ["西班牙语(阿根廷)", "es-AR", ],
  ["西班牙语(玻利维亚)", "es-BO", ],
  ["西班牙语(智利)", "es-CL", ],
  ["西班牙语(哥伦比亚)", "es-CO", ],
  ["西班牙语(哥斯达黎加)", "es-CR", ],
  ["西班牙语(古巴)", "es-CU", ],
  ["西班牙语(多米尼加共和国)", "es-DO", ],
  ["西班牙语(厄瓜多尔)", "es-EC", ],
  ["西班牙语(西班牙)", "es-ES", ],
  ["西班牙语(赤道几内亚)", "es-GQ", ],
  ["西班牙语(危地马拉)", "es-GT", ],
  ["西班牙语(洪都拉斯)", "es-HN", ],
  ["西班牙语(墨西哥)", "es-MX", ],
  ["西班牙语(尼加拉瓜)", "es-NI", ],
  ["西班牙语(巴拿马)", "es-PA",],
  ["西班牙语(秘鲁)", "es-PE", ],
  ["西班牙语(波多黎各)", "es-PR",],
  ["西班牙语(巴拉圭)", "es-PY", ],
  ["西班牙语(萨尔瓦多)", "es-SV", ],
  ["西班牙语(美国)", "es-US", ],
  ["西班牙语(乌拉圭)", "es-UY", ],
  ["西班牙语(委内瑞拉)", "es-VE", ],
  ["爱沙尼亚语(爱沙尼亚)", "et-EE",],
  ["巴士克语", "eu-ES", ],
  
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],

  {"cnName": "波斯语(伊朗)", "fa-IR", "description": "Persian (Iran)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"cnName": "芬兰语(芬兰)", "fi-FI", "description": "Finnish (Finland)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": ""},
  {"cnName": "菲律宾语(菲律宾)", "fil-PH", "description": "Filipino (Philippines)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Pronunciation", "Scope": ""},
  {"cnName": "法语(比利时)", "fr-BE", "description": "French (Belgium)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": ""},
  {"cnName": "法语(加拿大)", "fr-CA", "description": "French (Canada)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": ""},
  {"cnName": "法语(瑞士)", "fr-CH", "description": "French (Switzerland)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": ""},
  {"cnName": "法语(法国)", "fr-FR", "description": "French (France)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Structured text,Pronunciation,Phrase list", "Scope": ""},

  {"cnName": "爱尔兰语(爱尔兰)", "ga-IE", "description": "Irish (Ireland)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": ""},
  {"cnName": "加利西亚语", "gl-ES", "description": "Galician", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"cnName": "古吉拉特语(印度)", "gu-IN", "description": "Gujarati (India)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  
  {"cnName": "希伯来语(以色列)", "he-IL", "description": "Hebrew (Israel)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"cnName": "印地语(印度)", "hi-IN", "description": "Hindi (India)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Phrase list", "Scope": ""},
  {"cnName": "克罗地亚语(克罗地亚)", "hr-HR", "description": "Croatian (Croatia)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": ""},
  {"cnName": "匈牙利语(匈牙利)", "hu-HU", "description": "Hungarian (Hungary)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Pronunciation", "Scope": ""},
  {"cnName": "亚美尼亚语(亚美尼亚)", "hy-AM", "description": "Armenian (Armenia)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  
  {"cnName": "印度尼西亚语(印度尼西亚)", "id-ID", "description": "Indonesian (Indonesia)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": ""},
  {"cnName": "冰岛语(冰岛)", "is-IS", "description": "Icelandic (Iceland)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"cnName": "意大利语(瑞士)", "it-CH", "description": "Italian (Switzerland)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": ""},
  {"cnName": "意大利语(意大利)", "it-IT", "description": "Italian (Italy)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Structured text,Pronunciation,Phrase list", "Scope": ""},
  
  {"cnName": "日语(日本)", "ja-JP", "description": "Japanese (Japan)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Structured text,Phrase list", "Scope": ""},
  {"cnName": "爪哇语(拉丁语，印度尼西亚)", "jv-ID", "description": "Javanese (Latin, Indonesia)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},

  {"cnName": "格鲁吉亚语(格鲁吉亚)", "ka-GE", "description": "Georgian (Georgia)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"cnName": "哈萨克语(哈萨克斯坦)", "kk-KZ", "description": "Kazakh (Kazakhstan)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"cnName": "高棉语(柬埔寨)", "km-KH", "description": "Khmer (Cambodia)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"cnName": "卡纳达语(印度)", "kn-IN", "description": "Kannada (India)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"cnName": "韩语(韩国)", "ko-KR", "description": "Korean (Korea)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Structured text,Phrase list", "Scope": ""},

  {"cnName": "老挝(老挝)", "lo-LA", "description": "Lao (Laos)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": ""},
  {"cnName": "立陶宛语(立陶宛)", "lt-LT", "description": "Lithuanian (Lithuania)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": ""},
  {"cnName": "拉脱维亚语(拉脱维亚)", "lv-LV", "description": "Latvian (Latvia)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": "macro"},
  
  {"cnName": "马其顿语(北马其顿)", "mk-MK", "description": "Macedonian (North Macedonia)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"cnName": "马拉雅拉姆语(印度)", "ml-IN", "description": "Malayalam (India)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"cnName": "蒙古语(蒙古)", "mn-MN", "description": "Mongolian (Mongolia)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"cnName": "马拉地语(印度)", "mr-IN", "description": "Marathi (India)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"cnName": "马来语(马来西亚)", "ms-MY", "description": "Malay (Malaysia)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},
  {"cnName": "马耳他语(马耳他)", "mt-MT", "description": "Maltese (Malta)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"cnName": "缅甸语(缅甸)", "my-MM", "description": "Burmese (Myanmar)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},

  {"cnName": "挪威语博克马尔语(挪威)", "nb-NO", "description": "Norwegian Bokmål (Norway)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},
  {"cnName": "尼泊尔语(尼泊尔)", "ne-NP", "description": "Nepali (Nepal)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"cnName": "荷兰语(比利时)", "nl-BE", "description": "Dutch (Belgium)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"cnName": "荷兰语(荷兰)", "nl-NL", "description": "Dutch (Netherlands)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Pronunciation", "Scope": "macro"},

  {"cnName": "波兰语(波兰)", "pl-PL", "description": "Polish (Poland)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Pronunciation", "Scope": "macro"},
  {"cnName": "普什图语(阿富汗)", "ps-AF", "description": "Pashto (Afghanistan)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"cnName": "葡萄牙语(巴西)", "pt-BR", "description": "Portuguese (Brazil)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Structured text,Pronunciation,Phrase list", "Scope": "macro"},
  {"cnName": "葡萄牙语(葡萄牙)", "pt-PT", "description": "Portuguese (Portugal)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Pronunciation", "Scope": "macro"},

  {"cnName": "罗马尼亚语(罗马尼亚)", "ro-RO", "description": "Romanian (Romania)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": "macro"},
  {"cnName": "俄语(俄罗斯)", "ru-RU", "description": "Russian (Russia)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},

  {"cnName": "僧伽罗语(斯里兰卡)", "si-LK", "description": "Sinhala (Sri Lanka)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"cnName": "斯洛伐克语(斯洛伐克)", "sk-SK", "description": "Slovak (Slovakia)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": "macro"},
  {"cnName": "斯洛文尼亚语(斯洛文尼亚)", "sl-SI", "description": "Slovenian (Slovenia)", "added": "2005-10-16", "customSpeechSupport": "Plain text,Pronunciation", "Scope": "macro"},
  {"cnName": "索马里语(索马里)", "so-SO", "description": "Somali (Somalia)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"cnName": "阿尔巴尼亚语(阿尔巴尼亚)", "sq-AL", "description": "Albanian (Albania)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"cnName": "塞尔维亚语(西里尔字母，塞尔维亚)", "sr-RS", "description": "Serbian (Cyrillic, Serbia)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"cnName": "瑞典语(瑞典)", "sv-SE", "description": "Swedish (Sweden)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Pronunciation", "Scope": "macro"},
  {"cnName": "斯瓦希里语(肯尼亚)", "sw-KE", "description": "Swahili (Kenya)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},
  {"cnName": "斯瓦希里语(坦桑尼亚)", "sw-TZ", "description": "Swahili (Tanzania)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},

  {"cnName": "泰米尔语(印度)", "ta-IN", "description": "Tamil (India)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"cnName": "泰卢固语(印度)", "te-IN", "description": "Telugu (India)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"cnName": "泰语(泰国)", "th-TH", "description": "Thai (Thailand)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},
  {"cnName": "土耳其语(土耳其)", "tr-TR", "description": "Turkish (Turkey)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text,Structured text", "Scope": "macro"},

  {"cnName": "乌克兰语(乌克兰)", "uk-UA", "description": "Ukrainian (Ukraine)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  {"cnName": "乌兹别克语(拉丁语，乌兹别克斯坦)", "uz-UZ", "description": "Uzbek (Latin, Uzbekistan)", "added": "2005-10-16", "customSpeechSupport": "Plain text", "Scope": "macro"},
  
  {"cnName": "越南语(越南)", "vi-VN", "description": "Vietnamese (Vietnam)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},
  
  {"cnName": "中文(吴语，简体)", "wuu-CN", "description": "Chinese (Wu, Simplified)", "added": "2005-10-16", "customSpeechSupport": "Audio + human-labeled transcript,Plain text", "Scope": "macro"},
  
  ["yue-CN","中文(粤语、简体)"],
  
  ["zh-CN", "中文(普通话、简体)"],
  ["zh-CN-shandong", "中文(简体吉鲁普通话)"],
  ["zh-CN-sichuan", "中文(西南普通话，简体)"],
  ["zh-HK", "中文(粤语、繁体)"],
  ["zh-TW", "中文(台湾普通话，繁体)"],
  ["zu-ZA", "祖鲁语(南非)"],
]);
