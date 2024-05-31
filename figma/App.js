import { StatusBar } from "expo-status-bar";
import SearchBar from "./components/searchbar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const data = [
    {
      id: 1,
      category: "Exercise",
      taskCount: 12,
      imageSource: require("./assets/photo_2024-05-31_08-25-28.jpg"),
    },
    {
      id: 2,
      category: "Study",
      taskCount: 12,
      imageSource: require("./assets/photo_2024-05-31_08-22-06.jpg"),
    },
    {
      id: 3,
      category: "Study",
      taskCount: 12,
      imageSource: require("./assets/photo_2024-05-31_08-22-06.jpg"),
    },
    {
      id: 4,
      category: "Study",
      taskCount: 12,
      imageSource: require("./assets/photo_2024-05-31_08-22-06.jpg"),
    },
    {
      id: 5,
      category: "Study",
      taskCount: 12,
      imageSource: require("./assets/photo_2024-05-31_08-22-06.jpg"),
    },
    {
      id: 6,
      category: "Study",
      taskCount: 12,
      imageSource: require("./assets/photo_2024-05-31_08-22-06.jpg"),
    },
    {
      id: 7,
      category: "Study",
      taskCount: 12,
      imageSource: require("./assets/photo_2024-05-31_08-22-06.jpg"),
    },
    {
      id: 8,
      category: "Study",
      taskCount: 12,
      imageSource: require("./assets/photo_2024-05-31_08-22-06.jpg"),
    },
  ];
  const flatlistData = [
    { id: "1", title: "All" },
    { id: "2", title: "All" },
    { id: "3", title: "All" },
    { id: "4", title: "All" },
    { id: "5", title: "All" },
    { id: "6", title: "All" },
    { id: "7", title: "All" },
    { id: "8", title: "All" },
    { id: "9", title: "All" },
    { id: "10", title: "All" },
    { id: "11", title: "All" },
    { id: "12", title: "All" },
    { id: "13", title: "All" },
    { id: "14", title: "All" },
    { id: "15", title: "All" },
  ];

  const renderItem = ({ item }) => (
    <View style={{ marginRight: 16 }}>
      <View style={{ backgroundColor: "#fff", borderRadius: 16, padding: 10 }}>
        <Text>{item.category}</Text>
        <Text>{`${item.taskCount} tasks`}</Text>
        <Image source={item.imageSource} />
      </View>
    </View>
  );

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
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
        <FlatList
          vertical
          data={flatlistData}
          contentContainerStyle={{ paddingTop: 20 }}
          renderItem={({ item }) => (
            <View style={styles.ongoingTaskCard}>
              <View>
                <Text>{item.title}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
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

    marginTop: 10,
  },
});
