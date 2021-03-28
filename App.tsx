import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { TabsNavigator } from "./navigation/BottomTabsNavigator";

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
}
