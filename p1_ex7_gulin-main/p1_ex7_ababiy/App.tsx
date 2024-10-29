import React from "react";
import { StyleSheet, View, Image } from "react-native";

const Flex = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 3, backgroundColor: "#e22200" }} />
      <View style={styles.middle}>
        </View>
      <View style={{ flex: 3, backgroundColor: "#FFFFFF" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  middle: {
    flex: 3,
    backgroundColor: "#1c8023",
    justifyContent: "center", 
    alignItems: "center", 
  },
  image: {
    width: 250,
    height: 250,
    marginLeft: 60,
  },
});

export default Flex;
