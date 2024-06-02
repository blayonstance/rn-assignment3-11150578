import React from "react";
import { StatusBar } from "expo-status-bar";
import SearchBar from "./components/searchbar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
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
    category: "Code",
    taskCount: 12,
    imageSource: require("./assets/mega-creator.png"),
  },
  {
    id: 4,
    category: "Cook",
    taskCount: 12,
    imageSource: require("./assets/qsd.png"),
  },
  {
    id: 5,
    category: "Bug Bounty",
    taskCount: 12,
    imageSource: require("./assets/bug.png"),
  },
  {
    id: 6,
    category: "Learn",
    taskCount: 12,
    imageSource: require("./assets/learn.png"),
  },
  {
    id: 7,
    category: "Job Hunt",
    taskCount: 12,
    imageSource: require("./assets/job.png"),
  },
  {
    id: 8,
    category: "DevOps",
    taskCount: 12,
    imageSource: require("./assets/dev.png"),
  },
];
const DATA = [
  {
    id: "1",
    title: "Mobile Apllication Development",
  },
  {
    id: "2",
    title: "Web Development",
  },
  {
    id: "4",
    title: "Push Ups",
  },
  {
    id: "5",
    title: "Cardio",
  },
  {
    id: "6",
    title: "Hip Flexors",
  },
  {
    id: "7",
    title: "Renegade Run",
  },
  {
    id: "8",
    title: " Lunch",
  },
  {
    id: "9",
    title: "Combat Master",
  },
  {
    id: "10",
    title: "Edit Loadout",
  },
  {
    id: "11",
    title: "Recitation",
  },
  {
    id: "12",
    title: "Proposal",
  },
  {
    id: "13",
    title: "Dune",
  },
  {
    id: "14",
    title: "Testing",
  },
  {
    id: "15",
    title: "Health check",
  },
];

const renderItem = ({ item }) => (
  <View style={{ marginRight: 16 }}>
    <View style={{ backgroundColor: "#fff", borderRadius: 16, padding: 10 }}>
      <Text>{item.category}</Text>
      <Text>{`${item.taskCount} tasks`}</Text>
      <Image
        source={item.imageSource}
        style={
          item.id === 3
            ? styles.customImage
            : item.id === 4
            ? styles.customImageForId4
            : item.id === 5
            ? styles.customImageForId5
            : item.id === 6
            ? styles.customImageForId6
            : item.id === 7
            ? styles.customImageForId7
            : item.id === 8
            ? styles.customImageForId8
            : {}
        }
      />
    </View>
  </View>
);
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  return (
    <ScrollView>
      <SafeAreaView style={[styles.container, { backgroundColor: "#f0e2d3" }]}>
        <View>
          <View style={styles.header}>
            <Text
              style={{
                fontSize: 44,
                fontWeight: "bold",
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
          <View>
            <Text
              style={{
                marginTop: 10,
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              {" "}
              Ongoing Tasks.
            </Text>
          </View>
          <View>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

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
    borderRadius: 25,
  },
  imgg: {
    width: 50,
    height: 50,
    borderRadius: 25,
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
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    height: 100,
  },
  title: {
    fontSize: 22,
  },
  customImage: {
    width: 130,
    height: 130,
    resizeMode: "cover",
  },
  customImageForId4: {
    width: 130,
    height: 130,
    resizeMode: "cover",
  },
  customImageForId5: {
    width: 130,
    height: 130,
    resizeMode: "cover",
  },
  customImageForId6: {
    width: 130,
    height: 130,
    resizeMode: "cover",
  },
  customImageForId6: {
    width: 130,
    height: 130,
    resizeMode: "cover",
  },
  customImageForId7: {
    width: 130,
    height: 130,
    resizeMode: "cover",
  },
  customImageForId8: {
    width: 130,
    height: 130,
    resizeMode: "cover",
  },
});

export default App;
