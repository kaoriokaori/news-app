import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { ListItem } from "./components/ListItem";
// import articles from "./dummies/articles.json";

export default function App() {
  const [articles, setArticles] = useState([]);
  // const items = articles.map((article, index) => {
  //   return <ListItem imageUrl={article.urlToImage} title={article.title} author={article.author} key={index.toString()} />;
  // });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={articles} renderItem={({ item }) => (
      <ListItem imageUrl={item.urlToImage} title={item.title} author={item.author} />
      )}
      keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});

