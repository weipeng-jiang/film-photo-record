import React from "react";

import { View, Text } from "react-native";

export const add = (a: number, b: number): number => {
  return a + b;
};

const Test = (): JSX.Element => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

export default Test;
