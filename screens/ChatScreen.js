import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, Text, View, Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import {GiftedChat} from 'react-native-gifted-chat';
import Fire from '../firebase/Fire';
// import Fire from '../firebase/Fire';

const ChatScreen = ({navigation,route}) => {

    const {name} = route.params;
    const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'This chat app is not finished yet',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}

export default ChatScreen;

const styles = StyleSheet.create({})
