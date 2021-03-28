import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ArchiveScreen from "../screens/film/ArchiveScreen";
import RecordScreen from "../screens/film/RecordScreen";
import RollScreen from "../screens/film/RollScreen";

const FilmStackNavigator = createStackNavigator();

export const FilmNavigator = (): JSX.Element => {
  return (
    <FilmStackNavigator.Navigator>
      <FilmStackNavigator.Screen name="Record" component={RecordScreen} />
      <FilmStackNavigator.Screen name="Archive" component={ArchiveScreen} />
      <FilmStackNavigator.Screen name="Roll" component={RollScreen} />
    </FilmStackNavigator.Navigator>
  );
};
