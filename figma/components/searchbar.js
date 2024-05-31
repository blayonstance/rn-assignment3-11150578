import React from "react";
import { View, TextInput, Text } from "react-native";

const SearchBar = () => {
  return (
    <View style={{ marginLeft: 17, marginTop: 20 }}>
      <TextInput
        style={{
          height: 40,
          width: 288,
          borderColor: "#fff",
          borderWidth: 2,
          borderRadius: "50 / 2",
          backgroundColor: "#fff",
        }}
        placeholder="🔍  search"
      />
    </View>
  );
};

export default SearchBar;
