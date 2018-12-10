import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Avatar} from 'react-native-elements';
import Header from './Components/header';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Todo from './Screen/Todo';
import Flexbox from './Screen/Flexbox';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Header textIwant={"hello"} />
      <View style={{ padding: 20, backgroundColor: "blue" }} />
      <Header textIwant={"hello2"} />
      <View style={{ padding: 20 }} />
      <Button title={"HI"} 
      onPress={()=>{ console.log('hello'); }}
      color="#deb887"
      />
        <Text style={styles.bigblue} >Click the button!</Text>
        <Avatar
  size="large"
  rounded
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Button
 title= "Go to Todo"
onPress={() => this.props.navigation.navigate("TodoScreen")} 
/>
<Button
title= "Go to Flexbox"
onPress={() => this.props.navigation.navigate("FlexboxScreen")}
/>
      </View> 
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App },
    TodoScreen: Todo,
    FlexboxScreen: Flexbox
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

export default AppContainer;