import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, Text } from "react-native";
import { ListItem } from "./components/ListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem imageUrl={"https://picsum.photos/id/1/200/300"} title="Here you can view all the images Lorem Picsum provides.Here you can view all the images Lorem Picsum provides." author="news-app" />
      <ListItem imageUrl={"https://picsum.photos/id/2/200/300"} title="Here you can view all the images Lorem Picsum provides." author="news-app" />
      <ListItem imageUrl={"https://picsum.photos/id/3/200/300"} title="Here you can view all the images Lorem Picsum provides." author="news-app" />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
});
