declare global {
  interface ISyncContext {
    datasource_ids: string[];
    getInternalProductId: (string) => string;
  }
  const SyncContext: ISyncContext;
}

const product_ids = [
  "AUDUSD",
  "CFFEX_IC",
  // "CFFEX_IF",
  // "CFFEX_IH",
  // "CFFEX_IM",
  // "CFFEX_T",
  // "CFFEX_TF",
  // "CFFEX_TL",
  // "CFFEX_TS",
  // "CZCE_AP",
  // "CZCE_CF",
  // "CZCE_CJ",
  // "CZCE_CY",
  // "CZCE_FG",
  // "CZCE_JR",
  // "CZCE_LR",
  // "CZCE_MA",
  // "CZCE_OI",
  // "CZCE_PF",
  // "CZCE_PK",
  // "CZCE_PM",
  // "CZCE_RI",
  // "CZCE_RM",
  // "CZCE_RS",
  // "CZCE_SA",
  // "CZCE_SF",
  // "CZCE_SM",
  // "CZCE_SR",
  // "CZCE_TA",
  // "CZCE_UR",
  // "CZCE_WH",
  // "CZCE_ZC",
  // "DCE_a",
  // "DCE_b",
  // "DCE_bb",
  // "DCE_c",
  // "DCE_cs",
  // "DCE_eb",
  // "DCE_eg",
  // "DCE_fb",
  // "DCE_i",
  // "DCE_j",
  // "DCE_jd",
  // "DCE_jm",
  // "DCE_l",
  // "DCE_lh",
  // "DCE_m",
  // "DCE_p",
  // "DCE_pg",
  // "DCE_pp",
  // "DCE_rr",
  // "DCE_v",
  // "DCE_y",
  // "EURUSD",
  // "GBPUSD",
  // "GFEX_lc",
  // "GFEX_si",
  // "INE_bc",
  // "INE_lu",
  // "INE_nr",
  // "INE_sc",
  // "NZDUSD",
  // "SHFE_ag",
  // "SHFE_al",
  // "SHFE_ao",
  // "SHFE_au",
  // "SHFE_br",
  // "SHFE_bu",
  // "SHFE_cu",
  // "SHFE_fu",
  // "SHFE_hc",
  // "SHFE_ni",
  // "SHFE_pb",
  // "SHFE_rb",
  // "SHFE_ru",
  // "SHFE_sn",
  // "SHFE_sp",
  // "SHFE_ss",
  // "SHFE_wr",
  // "SHFE_zn",
  // "US30",
  // "USDCAD",
  // "USDCHF",
  // "USDCNH",
  // "USDJPY",
  // "XAGUSD",
  // "XAUUSD",
  // "XBRUSD",
  // "XPTUSD",
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
