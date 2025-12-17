import { FC, ReactNode } from "react";
import { Text } from "react-native";
import { moderateScale } from "react-native-size-matters";

interface AppTextProps {
  children: ReactNode;
  textSize?: number;
  style?: any;
  className?: string;
}

const AppText: FC<AppTextProps> = ({
  children,
  className,
  style,
  textSize = 12,
}) => {
  return (
    <Text
      className={`${className}`}
      style={{
        fontFamily: "inter",
        ...style,
        fontSize: moderateScale(textSize),
      }}
    >
      {children}
    </Text>
  );
};

export default AppText;
