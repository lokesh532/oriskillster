import React from "react";
import { Platform, StatusBar } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons'

import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import DeckList from "./screens/DeckList";
import Quiz from "./screens/Quiz";

import Profile from "./screens/Profile";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
      headerStyle
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In",
      headerStyle
    }
  }
});

export const Home = createStackNavigator({
  DeckList: {
    screen: DeckList,
      navigationOptions: {
        header:null
      }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz",
      tabBarVisible: false
    }
  }
});

Home.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};
//  console.log(routeName);
  if (routeName === 'Quiz') {
    navigationOptions.tabBarVisible = false;
  }

  return navigationOptions;
};


export const SignedIn =  createBottomTabNavigator({
  Home:{
    screen:Home,
    navigationOptions: {
      tabBarLabel:'HOME',
      tabBarIcon: ({ tintColor })=>(
        <Icon name="ios-search-outline" color={tintColor} size={24}/>
      )
    }
  },
  Profile:{
    screen:Profile,
    navigationOptions: {
      tabBarLabel:'PROFILE',
      tabBarIcon: ({ tintColor })=>(
        <Icon name="ios-person-outline" color={tintColor} size={24}/>
      )
    }
  }
},{
  tabBarOptions:{
    activeTintColor:'red',
    inactiveTintColor:'grey',
    style:{
      backgroundColor:'white',
      borderTopWidth:0,
      elevation:5
    }
  }
});

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
