import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const AppTab = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#538BE3",
        tabBarInactiveTintColor: "#A3A3B3",
        tabBarLabelStyle: { fontFamily: "inter", fontSize: 10 },
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 72,
          borderTopWidth: 2,
          borderColor: "#EBECED",
          padding: 6,
        },
        tabBarIconStyle: {
          borderRadius: 12,
          margin: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Watchlists",
          tabBarIcon: ({ color, size }) => (
            <Feather name="bookmark" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ size, color }) => (
            <Feather name="layers" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="position"
        options={{
          title: "Positons",
          tabBarIcon: ({ color, size }) => (
            <Feather name="activity" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default AppTab;
