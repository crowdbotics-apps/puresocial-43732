import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
const data = [{
  id: '1',
  profilePic: 'https://tinyurl.com/42evm3m3',
  userName: 'John Doe',
  handle: '@johndoe',
  award: 'Gold',
  timestamp: '2h ago',
  content: 'This is a sample post',
  upvotes: 123
} // Add more data here
];

const Post = ({
  item
}) => <View style={_styles.CnsrRLIl}>
    <View style={_styles.lyFaoVuA}>
      <Image source={{
      uri: item.profilePic
    }} style={_styles.QccEYXYL} />
      <View style={_styles.UTeLWMdQ}>
        <Text style={_styles.ilZbHrDj}>{item.userName}</Text>
        <Text style={_styles.aWfjYkLZ}>{item.handle}</Text>
      </View>
    </View>
    <Text style={_styles.YbZSfKWR}>{item.content}</Text>
    <View style={_styles.tXdWViKj}>
      <View style={_styles.HNMIyTbx}>
        <TouchableOpacity>
          <Text>Upvote</Text>
        </TouchableOpacity>
        <Text style={_styles.ziShjXKX}>{item.upvotes}</Text>
      </View>
      <View style={_styles.jbLwlICu}>
        <TouchableOpacity>
          <Text>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.HOjxfale}>
          <Text>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.INkVHztj}>
          <Text>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.ZEFlCFYM}>
          <Text>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>;

const App = () => <SafeAreaView style={_styles.HTkYEQkb}>
    <FlatList data={data} renderItem={Post} keyExtractor={item => item.id} />
  </SafeAreaView>;

export default App;

const _styles = StyleSheet.create({
  CnsrRLIl: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  lyFaoVuA: {
    flexDirection: "row",
    alignItems: "center"
  },
  QccEYXYL: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  UTeLWMdQ: {
    marginLeft: 10
  },
  ilZbHrDj: {
    fontSize: 18
  },
  aWfjYkLZ: {
    color: "#888"
  },
  YbZSfKWR: {
    marginTop: 10
  },
  tXdWViKj: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  HNMIyTbx: {
    flexDirection: "row",
    alignItems: "center"
  },
  ziShjXKX: {
    marginLeft: 5
  },
  jbLwlICu: {
    flexDirection: "row"
  },
  HOjxfale: {
    marginLeft: 10
  },
  INkVHztj: {
    marginLeft: 10
  },
  ZEFlCFYM: {
    marginLeft: 10
  },
  HTkYEQkb: {
    flex: 1
  }
});