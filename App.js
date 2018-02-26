import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlace from "./src/screens/SharePlace/SharePlace";
import FindPlace from "./src/screens/FindPlace/FindPlace";
import {Prvider} from "react-redux"
import configureStore from './src/store/configureStore'
const store =configureStore();
// Register Screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen,store,Prvider);
Navigation.registerComponent("awesome-places.SharePlace", () => SharePlace,store,Prvider);
Navigation.registerComponent("awesome-places.FindPlace", () => FindPlace,store,Prvider);


// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",

    title: "Login"
  }
});