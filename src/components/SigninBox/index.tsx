import React from "react";
import { View } from "react-native";

import { COLORS } from "../../theme";
import { Button } from "../Button";

import { styles as S } from "./styles";

export function SignInBox() {
  return (
    <View style={S.container}>
      <Button
        title='ENTRAR COM GITHUB'
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon='github'
        isLoading={false}
      />
    </View>
  );
}
