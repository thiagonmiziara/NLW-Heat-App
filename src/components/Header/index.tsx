import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import LogoSvg from "../../assets/logo.svg";
import { useAuth } from "../../hooks/auth";
import { UserPhoto } from "../UserPhoto";

import { styles as S } from "./styles";

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <View style={S.container}>
      <LogoSvg />
      <View style={S.logoutButton}>
        {user && (
          <TouchableOpacity onPress={signOut}>
            <Text style={S.logoutText}>Sair</Text>
          </TouchableOpacity>
        )}

        <UserPhoto imageUri={user?.avatar_url} />
      </View>
    </View>
  );
}
