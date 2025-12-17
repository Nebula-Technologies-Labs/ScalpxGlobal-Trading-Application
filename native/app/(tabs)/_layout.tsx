import AppHeader from "@/components/Common/AppHeader";
import AppTab from "@/components/Common/AppTab";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  return (
    <SafeAreaView className="flex-1">
      <AppHeader />
      <AppTab />
    </SafeAreaView>
  );
}
 