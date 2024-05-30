import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { SearchBar } from "react-native-elements";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "#f0e2d3" }]}>
      <View>
        <View style={styles.header}>
          <Text
            style={{
              fontSize: 44,
              fontWeight: "bold",
              marginTop: "10%",
            }}
          >
            Hello, Devs
          </Text>

          <View style={styles.imgcont}>
            <Image
              style={styles.imgg}
              source={require("./assets/icons8-user-94.png")}
            />
          </View>
        </View>
        <Text> 14 task today </Text>
      </View>

      <View>
        <SearchBar
          style={{ backgroundColor: "#fff" }}
          placeholder="Type Here..."
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  imgcont: {
    backgroundColor: "#fff",
    borderRadius: "50/2",
  },
  imgg: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
});
