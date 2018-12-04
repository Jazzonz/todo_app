import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Avatar} from 'react-native-elements'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Button title={"HI"} 
      onPress={()=>{ console.log('hello'); }}
      color="#deb887"
     ></Button>
        <Text style={styles.bigblue} >Click the button!</Text>
        <Avatar
  size="large"
  rounded
  icon={{name: 'meetup', color: 'red', type: 'font-awesome'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{flex: 2, marginLeft: 20, marginTop: 50}}
/>
      </View>
    );
  }
}

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
