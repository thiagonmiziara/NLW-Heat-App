import React from "react";
import { ScrollView } from "react-native";
import { Message } from "../Message";

import { styles as S } from "./styles";

export function MessageList() {
  const message = {
    id: "2",
    text: "Uma mensagem de teste",
    user: {
      name: "Thiago",
      avatar_url: "https://github.com/thiagonmiziara.png",
    },
  };
  return (
    <ScrollView
      style={S.container}
      contentContainerStyle={S.content}
      keyboardShouldPersistTaps='never'
    >
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}
