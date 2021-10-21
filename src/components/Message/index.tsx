import React from "react";
import { View, Text } from "react-native";
import { MotiView } from "moti";

import { UserPhoto } from "../UserPhoto";

import { styles as S } from "./styles";

export type MessageProps = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

type DataProps = {
  data: MessageProps;
};

export function Message({ data }: DataProps) {
  return (
    <>
      <MotiView
        from={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 700 }}
        style={S.container}
      >
        <Text style={S.message}>{data.text}</Text>
      </MotiView>

      <View style={S.footer}>
        <UserPhoto sizes='SMALL' imageUri={data.user?.avatar_url} />
        <Text style={S.userName}>{data.user?.name}</Text>
      </View>
    </>
  );
}
