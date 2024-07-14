// 定义国家/地区的数据结构接口
interface Country {
  sn: string;
  chineseShortName: string;
  englishShortName: string;
  iso2: string;
  iso3: string;
  numericalCode: string;
  telephoneAreaCode: string;
  domainSuffix: string;
  note: string;
}

// 创建一个国家/地区数据数组
const countries: Country[] = [
  {
    sn: "1",
    chineseShortName: "阿富汗",
    englishShortName: "Afghanistan",
    iso2: "AF",
    iso3: "AFG",
    numericalCode: "004",
    telephoneAreaCode: "93",
    domainSuffix: ".af",
    note: "the Islamic Republic of Afghanistan"
  },
  {
    sn: "2",
    chineseShortName: "奥兰群岛",
    englishShortName: "Aland Islands",
    iso2: "AX",
    iso3: "ALA",
    numericalCode: "248",
    telephoneAreaCode: "358 18",
    domainSuffix: ".ax",
    note: "ISO 3166-1:2006新增"
  },
  // ... 其他国家/地区的数据按照上面的格式添加
];

// 导出接口和数组
export { countries };
export type { Country };
