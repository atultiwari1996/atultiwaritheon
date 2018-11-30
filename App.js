import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import First from "./src/Splash/Splash";
import Second from "./src/Login/Second";
//import example from "./src/Login/example";
import Requesterlogin from "./src/Wli_Login/Requesterlogin";
import Reqlogin from "./src/Home/Reqlogin";
import Forgot from "./src/Forgotpwd/Reqforgot";
import Splash from "./src/Screen/Splash";
import FingerprintPopup from "./Thumb/example";
import Adhar_Add from "./src/Adhar_Add/Adhar_Add"
import { DrawerNavigator, createStackNavigator } from "react-navigation";

export default class App extends Component {
  render() {
    
    return(
      
      <Navigation />
      );
   /* return(
      < MyApp />
    );*/
    
  }
}

 const MyApp = DrawerNavigator(
  {
    home: {
      screen: Reqlogin
    },
    notifications: {
      screen: Second
    },
   /* scan: {
      screen: FingerprintScanner
    }*/
  },
  {
    drawerWidth: 300,
    drawerBackgroundColor: "white"
    //contentComponent: props => <Text style={{color:'blue'}} >text </Text>,
  }
);
 const Navigation = createStackNavigator({
  Welcome: {
    screen: Splash,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Requesterlogin,
    navigationOptions: {
      title: "Login",
      headerTitleStyle: {
        alignSelf: "center",
        textAlign: "center",
        width: "77%"
      },
      headerStyle: {
        backgroundColor: "#095473"
      },
      headerTintColor: "white"
    }
  },
  Forgot: {
    screen: Forgot,
    navigationOptions: {
      title: "Forgot Password",
      headerTitleStyle: {
        alignSelf: "center",
        textAlign: "center",
        width: "77%"
      },
      headerStyle: {
        backgroundColor: "#095473"
      },
      headerTintColor: "white"
    }
  },
  Adhar: {
    screen:Adhar_Add,
    navigationOptions: {
      title: "Add Adhar number",
      headerTitleStyle: {
        alignSelf: "center",
        textAlign: "center",
        width: "77%"
      },
      headerStyle: {
        backgroundColor: "#095473"
      },
      headerTintColor: "white"
    }
  },

  Userwelcome: {
    screen: Reqlogin,
    navigationOptions: {
      header: null
    }
  },
  
  Thumb: {
    screen: FingerprintPopup,
    navigationOptions: {
      header: null
    }
  },
 /* Thumb2: {
    screen: example,
    navigationOptions: {
      header: null
    }
  }*/
});

//export default Navigation;
