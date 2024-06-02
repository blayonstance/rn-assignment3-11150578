import React from "react";
import { View, TextInput, Text } from "react-native";

const SearchBar = () => {
  return (
    <View style={{ marginLeft: 17, marginTop: 20 }}>
      <TextInput
        style={{
          height: 40,
          width: 310,
          borderColor: "#fff",
          borderWidth: 2,
          borderRadius: 25,
          backgroundColor: "#fff",
        }}
        placeholder="🔍  search"
      />
    </View>
  );
};

export default SearchBar;
