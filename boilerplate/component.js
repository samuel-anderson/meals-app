import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentName = props => {
  return (
    <View style={styles.screen}>
      <Text>Text!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default ComponentName;
