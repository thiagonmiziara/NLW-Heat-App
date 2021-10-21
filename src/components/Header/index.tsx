import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import LogoSvg from "../../assets/logo.svg";
import { UserPhoto } from "../UserPhoto";

import { styles as S } from "./styles";

export function Header() {
  return (
    <View style={S.container}>
      <LogoSvg />
      <View style={S.logoutButton}>
        <TouchableOpacity>
          <Text style={S.logoutText}>Sair</Text>
        </TouchableOpacity>

        <UserPhoto imageUri='https://github.com/thiagonmiziara.png' />
      </View>
    </View>
  );
}
