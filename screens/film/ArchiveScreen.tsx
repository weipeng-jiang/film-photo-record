import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

const ArchiveScreen = ({ navigation }): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>ArchiveScreen</Text>
      <Button title="Go to Roll" onPress={() => navigation.navigate("Roll")} />
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

export default ArchiveScreen;
