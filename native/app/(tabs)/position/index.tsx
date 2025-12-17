import { View, FlatList, Pressable } from "react-native";
import React from "react";
import AppText from "@/components/Common/AppText";
import { OrderData } from "@/data/OrdersData";
import PositionItemContainer from "@/components/container/PositionItemContainer";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function PositionScreen() {
  const Tabs = ["Holdings", "Positions"];
  return (
    <View className="flex-1 py-4">
      {/*  */}
      <View className="flex-row items-center justify-center gap-6 px-4">
        {Tabs.map((item, index) => {
          return (
            <View key={index}>
              <View>
                <AppText
                  className="text-brand"
                  textSize={14}
                  style={{ fontFamily: "interSemiBold" }}
                >
                  {item}
                </AppText>
                <View className="w-6 h-[2px] mt-2 bg-brand" />
              </View>
            </View>
          );
        })}
      </View>

      <View className=" bg-background flex-1">
        {/*  */}
        <View className="px-8 py-6">
          <View className="border border-border h-24 flex items-center justify-center">
            <View className="flex-col items-center justify-center gap-2">
              <AppText className="text-textMuted" textSize={14}>
                Total P&L
              </AppText>
              <AppText className="text-sucess" textSize={20}>
                1.75
              </AppText>
            </View>
          </View>
        </View>

        <View className=" bg-background flex-1">
          {/*  */}
          <View className="flex-row justify-between items-center border-b border-border py-4 px-6">
            <Feather name="search" size={20} color={"#538BE3"} />
            <Pressable onPress={() => router.push("/tradebook")}>
              <AppText className="text-brand" textSize={14}>
                Analytics
              </AppText>
            </Pressable>
          </View>

          {/*  */}
          <FlatList
            data={OrderData}
            showsVerticalScrollIndicator={false}
            contentContainerClassName="px-6"
            renderItem={({ item }) => {
              return <PositionItemContainer item={item} />;
            }}
          />
        </View>
      </View>
    </View>
  );
}
