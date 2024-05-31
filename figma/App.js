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
import { Button } from "react-native-elements";

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

      <View style={styles.bar}>
        <SearchBar />

        <Image source={require("./assets/Filter.png")} />
      </View>
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 25 }}>
          Categories
        </Text>
      </View>

      <View style={styles.workr}>
        <View style={{}}>
          <Text> Study </Text>
          <Text> 12 tasks</Text>
          <Image source={require("./assets/photo_2024-05-31_08-25-28.jpg")} />
        </View>
        <View>
          <Text> Study</Text>
          <Text> 12 tasks</Text>
          <Image source={require("./assets/photo_2024-05-31_08-22-06.jpg")} />
        </View>
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
    marginLeft: 10,
    marginRight: 10,
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
  bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    marginRight: 10,
  },
  workr: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
});
