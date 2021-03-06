import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

const RollScreen = ({ navigation }): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>RollScreen</Text>
      <Button title="Go to main" onPress={() => navigation.popToTop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RollScreen;
