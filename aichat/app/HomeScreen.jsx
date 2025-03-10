import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import chatFaceItems from "./services/ChatFaceData";

const HomeScreen = () => {
  const [chatFaceData, setChatFaceData] = useState([]);
  const [selectedChatFaceData, setSelectedChatFaceData] = useState(null);

  useEffect(() => {
    setChatFaceData(chatFaceItems);
    setSelectedChatFaceData(chatFaceItems[3]);
  }, []);
  console.log(chatFaceData);


  const onChatFacePress = () => {
    
  }

  return (
    <View style={{ alignItems: "center", paddingTop: 70 }}>
      <Text style={[{ color: selectedChatFaceData?.primary, fontSize: 30 }]}>
        hello
      </Text>
      <Text
        style={[
          {
            color: selectedChatFaceData?.primary,
            fontSize: 30,
            fontWeight: "bold",
          },
        ]}
      >
        I'm {selectedChatFaceData?.name}
      </Text>
      <Image
        source={selectedChatFaceData?.image}
        style={{ height: 250, width: 250, marginTop: 20 }}
      />
      <Text style={{ marginTop: 10, fontSize: 25 }}>How can I help you</Text>
      <View
        style={{
          marginTop: 20,
          backgroundColor: "#F5F5F5",
          alignItems: "center",
          height: 130,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <FlatList
          style={{ marginTop: 20 }}
          data={chatFaceData}
          horizontal
          renderItem={({ item }) =>
            selectedChatFaceData.id != item.id && (
              <TouchableOpacity onPress={()=>onChatFacePress(item.id)}>
                <Image source={item.image} style={{ height: 70, width: 70 }} />
              </TouchableOpacity>
            )
          }
        />
        <Text style={{ marginTop: 2, fontSize: 17, color: "#B0B0B0" }}>
          Choose your favourite Chatbuddy
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;
