import React from "react";
import { View } from "react-native";

import { Header } from "../../components/Header";
import { MessageList } from "../../components/MessageList/indes";
import { SendMessageForm } from "../../components/SendMessageForm";
import { SignInBox } from "../../components/SignInBox";

import { styles as S } from "./styles";

export function Home() {
  return (
    <View style={S.container}>
      <Header />
      <MessageList />
      {/* <SignInBox /> */}
      <SendMessageForm />
    </View>
  );
}
