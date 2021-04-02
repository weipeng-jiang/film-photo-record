import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ArchiveScreen from "../screens/film/ArchiveScreen";
import RollScreen from "../screens/film/RollScreen";

const FilmStackNavigator = createStackNavigator();

export const ArchiveNavigator = (): JSX.Element => {
  return (
    <FilmStackNavigator.Navigator>
      <FilmStackNavigator.Screen name="Archive" component={ArchiveScreen} />
      <FilmStackNavigator.Screen name="Roll" component={RollScreen} />
    </FilmStackNavigator.Navigator>
  );
};
