import AppText from "@/components/Common/AppText";
import { useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { View } from "react-native";

const StatementScreen = () => {
  const { positions } = useAppSelector((state) => state.position);

  useEffect(() => {
    console.log(positions);
  }, [positions]);
  return (
    <View>
      <View>
        <AppText>Statement Screen</AppText>
      </View>
    </View>
  );
};

export default StatementScreen;
