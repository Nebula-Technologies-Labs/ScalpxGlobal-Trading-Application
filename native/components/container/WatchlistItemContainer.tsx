import { View } from "react-native";
import AppText from "../Common/AppText";
import { FC } from "react";
import { InstrumentType } from "@/types/InstrumentTypes";

interface WatchlistItemContainerProps {
  item: InstrumentType;
}

const WatchlistItemContainer: FC<WatchlistItemContainerProps> = ({ item }) => {
  return (
    <View className="flex-col border-b border-border py-4 gap-2">
      <View className="flex-row justify-between items-center">
        <AppText className="text-textPrimary" textSize={16}>
          {item.symbol}
        </AppText>
        <AppText className="text-sucess" textSize={16}>
          3,1234
        </AppText>
      </View>
      <View className="flex-row item-center justify-between">
        <AppText className="text-textMuted" textSize={14}>
          {item.exchangeSegment}
        </AppText>
        <View className="flex-row gap-2 items-center">
          <AppText className="text-textSecondary" textSize={14}>
            0.00
          </AppText>
          <AppText className="text-textSecondary" textSize={14}>
            (0.00)
          </AppText>
        </View>
      </View>
    </View>
  );
};

export default WatchlistItemContainer;
