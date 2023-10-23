declare global {
  interface ISyncContext {
    datasource_ids: string[];
    getInternalProductId: (product_id: string) => string;
  }
  const SyncContext: ISyncContext;
}

const product_ids = [
  "AUDUSD",
  "CFFEX_IC",
  "CFFEX_IF",
  "CFFEX_IH",
  "CFFEX_IM",
  "CFFEX_T",
  "CFFEX_TF",
  "CFFEX_TL",
  "CFFEX_TS",
  "CZCE_AP",
  "CZCE_CF",
  "CZCE_CJ",
  "CZCE_CY",
  "CZCE_FG",
  "CZCE_JR",
  "CZCE_LR",
  "CZCE_MA",
  "CZCE_OI",
  "CZCE_PF",
  "CZCE_PK",
  "CZCE_PM",
  "CZCE_RI",
  "CZCE_RM",
  "CZCE_RS",
  "CZCE_SA",
  "CZCE_SF",
  "CZCE_SM",
  "CZCE_SR",
  "CZCE_TA",
  "CZCE_UR",
  "CZCE_WH",
  "CZCE_ZC",
  "DCE_a",
  "DCE_b",
  "DCE_bb",
  "DCE_c",
  "DCE_cs",
  "DCE_eb",
  "DCE_eg",
  "DCE_fb",
  "DCE_i",
  "DCE_j",
  "DCE_jd",
  "DCE_jm",
  "DCE_l",
  "DCE_lh",
  "DCE_m",
  "DCE_p",
  "DCE_pg",
  "DCE_pp",
  "DCE_rr",
  "DCE_v",
  "DCE_y",
  "EURUSD",
  "GBPUSD",
  "GFEX_lc",
  "GFEX_si",
  "INE_bc",
  "INE_lu",
  "INE_nr",
  "INE_sc",
  "NZDUSD",
  "SHFE_ag",
  "SHFE_al",
  "SHFE_ao",
  "SHFE_au",
  "SHFE_br",
  "SHFE_bu",
  "SHFE_cu",
  "SHFE_fu",
  "SHFE_hc",
  "SHFE_ni",
  "SHFE_pb",
  "SHFE_rb",
  "SHFE_ru",
  "SHFE_sn",
  "SHFE_sp",
  "SHFE_ss",
  "SHFE_wr",
  "SHFE_zn",
  "US30",
  "USDCAD",
  "USDCHF",
  "USDCNH",
  "USDJPY",
  "XAGUSD",
  "XAUUSD",
  "XBRUSD",
  "XPTUSD",
  "CME_MINI:NQ1!", // 纳指
  "CME_MINI:ES1!", // 标普500
  "CME_MINI:EMY1!", // 日经225
  "CME_MINI:RTY1!", // 罗素2000
  "CME:LE1!", // 活牛
  "CME:GF1!", // 育牛
  "CME:HE1!", // 瘦猪,
  "CME:6N1!", // 纽元美元
  "CME:6A1!", // 澳元美元
  "CME:6J1!", // 日元美元
  "CME:6B1!", // 英镑美元
  "CME:6E1!", // 欧元美元
  "CME:6C1!", // 加元美元
  "CME:6S1!", // 瑞郎美元
  "CME:6M1!", // 美元墨西哥比索
  "CME:6L1!", // 美元巴西雷亚尔
  "CME:RMB1!", // 美元人民币
  "CME:RP1!", // 欧元英镑
  "CME:RY1!", // 欧元日元
  "CME:6Z1!", // 南非兰特
  "CBOT:YM1!", // 道指
  "CBOT:ZS1!", // 大豆
  "CBOT:ZC1!", // 玉米
  "CBOT:ZM1!", // 豆粕
  "CBOT:ZL1!", // 豆油
  "CBOT:ZW1!", // 小麦
  "CBOT:ZT1!", // 2年期美债
  "CBOT:Z3N1!", // 3年期美债
  "CBOT:ZF1!", // 5年期美债
  "CBOT:ZN1!", // 10年期美债
  "CBOT:ZB1!", // 30年期美债
  "HSI:HSI", // 恒生指数
  "HSI:HSTECH", // 恒生科技
  "HKEX:7226", // 南方东英恒生科技指数每日杠杆(2X)产品
  "HKEX:7552", // 南方东英恒生科技指数每日反向(-2x) 产品
];

const durations = ["PT1M", "PT5M", "PT15M", "PT30M", "PT1H", "PT4H", "P1D"];

export default function* () {
  for (let product_id of product_ids) {
    for (let datasource_id of SyncContext.datasource_ids) {
      for (let duration of durations) {
        yield {
          product_id: SyncContext.getInternalProductId(product_id),
          datasource_id,
          duration,
        };
      }
    }
  }
}
