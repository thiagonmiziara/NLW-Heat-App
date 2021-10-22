import React from "react";
import { View } from "react-native";
import { useAuth } from "../../hooks/auth";

import { COLORS } from "../../theme";
import { Button } from "../Button";

import { styles as S } from "./styles";

export function SignInBox() {
  const { signIn, isSigningIn } = useAuth();

  return (
    <View style={S.container}>
      <Button
        title='ENTRAR COM GITHUB'
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon='github'
        isLoading={isSigningIn}
        onPress={signIn}
      />
    </View>
  );
}
