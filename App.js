// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   Image
// } from 'react-native';
// import { Button, Header, Tile } from 'react-native-elements'


// const instructions = Platform.select({
//   ios: 'Image Monger',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
// const btnLabel = 'Learn More !'

// export default class App extends React.Component<{}> {
//   constructor(props, context) {
//     super(props, context);
//   }
//   _handlePress1() {
//     console.log('------------------------------------');
//     console.log('Hey I just clicked from my RN App..!');
//     console.log('------------------------------------');
//   }
//   _handlePress2() {
//       alert('Hey! this is an alert from RN app..')
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Header 
//           leftComponent={{ icon: 'menu', color: '#fff' }}
//           centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }} 
//           rightComponent={{ icon: 'home', color: '#fff' }}
//           outerContainerStyles={{ backgroundColor: '#3D6DCC' }} 
//           backgroundColor={'red'} // outer Container Styles overwrite backgroundColor 
//         />
//         <Text style={styles.welcome}> {instructions} </Text>

//        <Image style={styles.imageApp} source={require('./assets/A-Less-Civilized-Age.png')} />


//         <Button buttonStyle={styles.clickButton}
//           onPress={() => this._handlePress1()}
//           icon={{ name: 'code', type: 'octicon' }}
//           title={btnLabel}
//           accessibilityLabel="Learn more about this purple button" />
          
//         <Button buttonStyle={styles.clickButton1}
//           onPress={() => this._handlePress2()}
//           icon={{ name: 'beaker', type: 'octicon' }}
//           title='Click Me!' />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   welcome: {
//     fontSize: 30,
//     textAlign: 'center',
//     margin: 10,
//     fontWeight: '700',
//     color:'purple'
//   },
//   imageApp: {
//     width: 300,
//     height: 300,
//   },
//   clickButton: {
//     margin: 10,
//     backgroundColor: '#3D6DCC'
//   },
//   clickButton1: {
//     margin: 10,
//     backgroundColor: '#673AB7'
//   },

// });
