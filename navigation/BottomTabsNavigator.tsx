import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ArchiveNavigator } from "./FilmNavigator";
import SettingsScreen from "../screens/settings/SettingsScreen";
import RecordScreen from "../screens/film/RecordScreen";

const BottomTabsNavigator = createBottomTabNavigator();

export const TabsNavigator = (): JSX.Element => {
  return (
    <BottomTabsNavigator.Navigator>
      <BottomTabsNavigator.Screen name="Record" component={RecordScreen} />
      <BottomTabsNavigator.Screen name="Achive" component={ArchiveNavigator} />
      <BottomTabsNavigator.Screen name="Settings" component={SettingsScreen} />
    </BottomTabsNavigator.Navigator>
  );
};
