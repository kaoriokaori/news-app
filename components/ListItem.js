import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, Text } from "react-native";

export const ListItem = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: "https://picsum.photos/id/3/200/300" }} />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          忙しいビジネスマンも10分でできる簡単投資術 忙しいビジネスマンも10分でできる簡単投資術 忙しいビジネスマンも10分でできる簡単投資術 忙しいビジネスマンも10分でできる簡単投資術
        </Text>
        <Text style={styles.subText}>News-app</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});
