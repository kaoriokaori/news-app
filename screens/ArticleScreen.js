import { StyleSheet, SafeAreaView, Text } from "react-native";

export const ArticleScreen = () => {
  return(
    <SafeAreaView style={style.container}>
      <Text>This is Article Screen</Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

