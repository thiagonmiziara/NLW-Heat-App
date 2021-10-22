import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { api } from "../../services/api";
import { io } from "socket.io-client";

import { Message, MessageProps } from "../Message";

import { styles as S } from "./styles";

let messageQueue: MessageProps[] = [];

const socket = io(String(api.defaults.baseURL));
socket.on("new_message", (newMessage) => {
  messageQueue.push(newMessage);
  console.log(newMessage);
});

export function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const messagesResponse = await api.get<MessageProps[]>("/messages/last3");
      setCurrentMessages(messagesResponse.data);
    }

    fetchMessages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messageQueue.length > 0) {
        setCurrentMessages((oldState) => [
          messageQueue[0],
          oldState[0],
          oldState[1],
        ]);
        messageQueue.shift();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ScrollView
      style={S.container}
      contentContainerStyle={S.content}
      keyboardShouldPersistTaps='never'
    >
      {currentMessages.map((message) => {
        return <Message data={message} key={message.id} />;
      })}
    </ScrollView>
  );
}
