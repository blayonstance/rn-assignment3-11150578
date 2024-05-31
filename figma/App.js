import { StatusBar } from "expo-status-bar";
import SearchBar from "./components/searchbar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";

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
        <SearchBar />
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
    width: 50,
    height: 50,
    borderRadius: 70 / 2,
  },
});
