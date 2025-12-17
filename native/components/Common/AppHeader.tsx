import { FlatList, View } from "react-native";
import { Feather } from "@expo/vector-icons/";
import AppText from "./AppText";

const AppHeader = () => {
  const headerData = [1, 2];
  return (
    <View className="flex flex-row gap-4 px-4 py-2">
      <View className="flex-1 flex-row gap-2">
        <FlatList
          data={headerData}
          horizontal
          renderItem={(item) => {
            return (
              <View className="flex-col gap-2 mx-2">
                <AppText className="text-textSecondary" textSize={14}>
                  NiFTY 50
                </AppText>
                <View className="flex-row gap-2 items-center">
                  <AppText className="text-danger" textSize={12}>
                    25,000
                  </AppText>
                  <View className="flex-row gap-2">
                    <AppText className="text-textMuted" textSize={12}>
                      0.00
                    </AppText>
                    <AppText className="text-textMuted" textSize={12}>
                      0.00
                    </AppText>
                    <AppText className="text-textMuted" textSize={12}>
                      (0.00)
                    </AppText>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View className="flex-row items-center gap-4">
        <Feather name="shopping-cart" size={20} color={"#484854"} />
        <Feather name="chevron-down" size={20} color={"#484854"} />
      </View>
    </View>
  );
};

export default AppHeader;
