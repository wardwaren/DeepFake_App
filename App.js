import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, Image, ScrollView, TextInput, Button } from "react-native";

const getFullName = (name = "", sname = "", tname = "") => {
  return name + " " + sname + " " + tname;
};

const App = (props) => {
  const [isActive, setIsActive] = useState(true);
  const [text, setText] = useState("");
  return (
    <ScrollView>
      <Text>
        Hello, I am {getFullName(props.name, props.sname, props.tname)} and I am{" "}
        {text} years old
      </Text>
      <View>
        <Text>{!isActive ? "Currently not active" : "Currently active"}</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        placeholder="Enter your age"
        defaultValue={text}
        onChangeText={(text) => setText(text)}
      />
      <Button
        onPress={() => {
          if (isActive) {
            setIsActive(false);
          } else {
            setIsActive(true);
          }
        }}
        title={isActive ? "I am active" : "I am not active"}
      />
    </ScrollView>
  );
};

const Cafe = () => {
  return (
    <View>
      <Text>Parent func</Text>
      <App name="Alisher" sname="Sultanov" tname="Tolimbekovich" />
    </View>
  );
};

export default Cafe;
