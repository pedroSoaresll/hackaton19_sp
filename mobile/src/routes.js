import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import MapPage from "./pages/Map";
import SchoolPage from "./pages/School";
import CoursePage from "./pages/Course";
import MyCoursesPage from "./pages/MyCourses";

const MainStack = createStackNavigator({
  MapPage,
  SchoolPage,
  CoursePage
});

const MyCoursesStack = createStackNavigator({
  MyCoursesPage
})

const TabNavigator = createBottomTabNavigator({
  MainStack,
  MyCoursesStack
});

export default createAppContainer(TabNavigator);
