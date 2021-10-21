import React, { useState } from "react";
import { View, TextInput } from "react-native";

import { COLORS } from "../../theme";
import { Button } from "../Button";

import { styles as S } from "./styles";

export function SendMessageForm() {
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  return (
    <View style={S.container}>
      <TextInput
        style={S.input}
        keyboardAppearance='dark'
        placeholder='Qual sua expectativa para o evento'
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
      />
      <Button
        title='ENVIAR MENSAGEM'
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        isLoading={false}
      />
    </View>
  );
}
