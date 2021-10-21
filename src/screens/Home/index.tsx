import React from "react";
import { View } from "react-native";

import { Header } from "../../components/Header";

import { styles as S } from "./styles";

export function Home() {
  return (
    <View style={S.container}>
      <Header />
    </View>
  );
}
