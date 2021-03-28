import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FilmNavigator } from "./FilmNavigator";
import SettingsScreen from "../screens/settings/SettingsScreen";

const BottomTabsNavigator = createBottomTabNavigator();

export const TabsNavigator = (): JSX.Element => {
  return (
    <BottomTabsNavigator.Navigator>
      <BottomTabsNavigator.Screen name="Film" component={FilmNavigator} />
      <BottomTabsNavigator.Screen name="Settings" component={SettingsScreen} />
    </BottomTabsNavigator.Navigator>
  );
};
