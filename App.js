import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Avatar} from 'react-native-elements';
import Header from './Components/header';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Todo from './Screen/Todo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Header textIwant={"hello"} />
      <Header textIwant={"hello2"} />
      <Button title={"HI"} 
      onPress={()=>{ console.log('hello'); }}
      color="#deb887"
     ></Button>
        <Text style={styles.bigblue} >Click the button!</Text>
        <Avatar
  size="large"
  rounded
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
title= "Go to Todo"
onPress={() => this.props.navigation.navigate('TodoScreen')}
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    TodoScreen: Todo,
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffebcd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigblue: {
    color: "blue",
    fontWeight: 'bold',
  }
});
export default AppNavigator
export default AppContainer