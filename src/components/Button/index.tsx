import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ColorValue,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles as S } from "./styles";
import Svg from "react-native-svg";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>["name"];
};

export function Button({
  title,
  color,
  backgroundColor,
  icon,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity style={[S.button, { backgroundColor }]} {...rest}>
      <AntDesign name={icon} size={24} style={S.icon} />
      <Text style={[S.title, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
}
