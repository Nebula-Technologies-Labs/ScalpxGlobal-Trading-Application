import { FlatList, Pressable, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import AppText from "@/components/Common/AppText";
import { IntrumentData } from "@/data/InstrumentData";
import SearchedItemContainer from "@/components/container/SearchedItemContainer";
import { router } from "expo-router";

const SearchScreen = () => {
  return (
    <View>
      {/* SearchBar */}
      <View className="flex-row items-center justify-between border-b border-border py-2 px-4">
        <Feather
          name="chevron-left"
          size={28}
          color={"#434250"}
          onPress={() => router.back()}
        />
        <TextInput
          placeholder="Search & Add"
          className="flex-1"
          autoFocus 
          style={{ fontFamily: "inter", fontSize: 16 }}
        />
        <Pressable>
          <AppText className="text-brand" textSize={14}>
            Clear
          </AppText>
        </Pressable>
      </View>

      {/* Lists of Items */}
      <FlatList
        data={IntrumentData}
        renderItem={({ item }) => {
          return <SearchedItemContainer item={item} />;
        }}
      />
    </View>
  );
};

export default SearchScreen;
