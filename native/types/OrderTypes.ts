export type orderType = "BUY" | "SELL";
export type orderStatus = "COMPLETED" | "CANCELLED" | "REJECTED" | "PENDING";
export type tradeType = "CNC" | "MIS";
export type orderoption = "MARKET" | "LIMIT" | "STOPLOSS";
export type stoplossOption = "ST-M" | "ST-L";

export interface OrderResponse {
  orderType: orderType;
  orderStatus: orderStatus;
  tradeType: tradeType;
  stoplossOption: stoplossOption;
  orderOption: orderoption;
  symbol: string;
  quantity: number;
  exchangeType: string;
  average: number;
  createdAt: string;
}
