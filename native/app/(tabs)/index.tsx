import AppText from "@/components/Common/AppText";
import { FlatList, Pressable, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import WatchlistItemContainer from "@/components/container/WatchlistItemContainer";
import { IntrumentData } from "@/data/InstrumentData";
import { router } from "expo-router";

const HomeScreen = () => {
  const watchlistData = [1, 2, 3, 4, 5, 6, 7];
  return (
    <View className="flex-1 bg-background flex-col gap-2 px-4 py-6">
      <View className="flex-col bg-background gap-4">
        <FlatList
          data={watchlistData}
          horizontal
          contentContainerClassName="flex-row gap-8"
          renderItem={({ item }) => {
            return (
              <View>
                <AppText
                  className="text-brand"
                  textSize={16}
                  style={{ fontFamily: "interSemiBold" }}
                >
                  Watchlist {String(item)}
                </AppText>
                <View
                  style={{
                    height: 2,
                    width: 40,
                    marginTop: 4,
                    backgroundColor: "#538BE3",
                  }}
                />
              </View>
            );
          }}
        />

        {/* Search & Add Section */}
        <Pressable
          className="flex-row gap-2 items-center justify-between px-4 py-4 rounded border border-border"
          onPress={() => router.push("/search")}
        >
          <Feather name="search" size={20} color={"#A3A3B3"} />
          <View className="flex-1 flex-row items-center justify-between">
            <AppText className="text-textMuted" textSize={14}>
              Search & Add
            </AppText>
            <AppText className="text-textMuted" textSize={14}>
              7/100
            </AppText>
          </View>
        </Pressable>
      </View>

      {/*  */}
      <FlatList
        data={IntrumentData}
        renderItem={({ item }) => {
          return <WatchlistItemContainer item={item} />;
        }}
      />
    </View>
  );
};

export default HomeScreen;
