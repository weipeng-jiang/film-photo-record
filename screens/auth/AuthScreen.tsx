import React from "react";

import { View, Text, StyleSheet } from "react-native";

const AuthScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>AuthScreen</Text>
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

export default AuthScreen;
