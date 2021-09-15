/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import Homescreen from './src/screens/homeScreen';
 import ProfileScreen from './src/screens/profileScreen';
 import ItemDetailsScreen from './src/screens/itemDetailScreen';
 import Router from './src/router';
 import 'react-native-gesture-handler';
 import AddressScreen from './src/screens/addressScreen';
 import defaultStyle from './src/globalstyles/defaultStyles';
 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : defaultStyle.color.backgroundLight,
     flex: 1,
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
           <Router/>
     </SafeAreaView>
   );
 };
 
 export default App;
 