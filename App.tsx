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
   StatusBar,
   useColorScheme,
 } from 'react-native';
 
 import {
   Colors,
 } from 'react-native/Libraries/NewAppScreen';
 import Router from './src/navigation';
 import 'react-native-gesture-handler';
 import color from './src/constants/color';
 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : color.backgroundLight,
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
 