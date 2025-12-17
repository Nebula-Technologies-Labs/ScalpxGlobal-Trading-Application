import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const TradebookScreenLayout = () => {
  return (
    <SafeAreaView>
      <Slot />
    </SafeAreaView>
  );
};

export default TradebookScreenLayout;
