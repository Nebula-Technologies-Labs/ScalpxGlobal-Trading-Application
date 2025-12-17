import { View, FlatList, Pressable } from "react-native";
import React from "react";
import { OrderData } from "@/data/OrdersData";
import OrderItemContainer from "@/components/container/OrderItemContainer";
import AppText from "@/components/Common/AppText";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

export default function OrderScreen() {
  const Tabs = ["OPEN", "EXECUTED"];
  return (
    <View className="flex-1 py-4">
      {/*  */}
      <View className="flex-row items-center justify-start gap-6 px-4">
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
        <View className="flex-row justify-between items-center border-b border-border py-4 px-6">
          <Feather name="search" size={20} color={"#538BE3"} />
          <Pressable onPress={() => router.push("/tradebook")}>
            <AppText className="text-brand" textSize={14}>
              TradeBook
            </AppText>
          </Pressable>
        </View>

        {/*  */}
        <FlatList
          data={OrderData}
          showsVerticalScrollIndicator={false}
          contentContainerClassName="px-6"
          renderItem={({ item }) => {
            return <OrderItemContainer item={item} />;
          }}
        />
      </View>
    </View>
  );
}
