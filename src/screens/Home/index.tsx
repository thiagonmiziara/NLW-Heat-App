import React from "react";
import { View } from "react-native";

import { Header } from "../../components/Header";
import { MessageList } from "../../components/MessageList/indes";

import { styles as S } from "./styles";

export function Home() {
  return (
    <View style={S.container}>
      <Header />
      <MessageList />
    </View>
  );
}
