import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, FlatList, TextInput, TouchableOpacity } from 'react-native';
const dummyData = [{
  id: '1',
  user: 'John Doe',
  timestamp: '2021-09-15T14:48:00.000Z',
  callTime: '5 mins'
}, {
  id: '2',
  user: 'Jane Doe',
  timestamp: '2021-09-14T12:30:00.000Z',
  callTime: '15 mins'
} // Add more dummy data here
];
const friends = ['Friend 1', 'Friend 2', 'Friend 3']; // Add more friends here

const VideoCallScreen = () => {
  return <SafeAreaView style={_styles.rFQjyoOZ}>
      <TextInput placeholder="Search" style={_styles.ChuGAwkr} />
      <FlatList data={friends} renderItem={({
      item
    }) => <TouchableOpacity style={_styles.LsSGAXNZ}>
            <Text>{item}</Text>
          </TouchableOpacity>} keyExtractor={item => item} />
      <FlatList data={dummyData} renderItem={({
      item
    }) => <View style={_styles.pvDZlktQ}>
            <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.RKiCkLhk} />
            <View>
              <Text>{item.user}</Text>
              <Text>{new Date(item.timestamp).toLocaleString()}</Text>
              <Text>{item.callTime}</Text>
            </View>
            <View>
              <Button title="Call back" onPress={() => {}} />
              <Button title="Remove" onPress={() => {}} color="red" />
            </View>
          </View>} keyExtractor={item => item.id} />
      <Button title="New call" onPress={() => {}} />
    </SafeAreaView>;
};

export default VideoCallScreen;

const _styles = StyleSheet.create({
  rFQjyoOZ: {
    flex: 1,
    backgroundColor: "#fff"
  },
  ChuGAwkr: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  LsSGAXNZ: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  pvDZlktQ: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  RKiCkLhk: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
});