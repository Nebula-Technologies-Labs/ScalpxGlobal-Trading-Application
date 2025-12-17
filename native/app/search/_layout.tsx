import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const SearcScreenLayout = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <Slot />
    </SafeAreaView>
  );
};

export default SearcScreenLayout;
