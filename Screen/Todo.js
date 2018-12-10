import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

class Todo extends React.Component{
    render(){
        return (
            <View style ={{flex: 1, flexDirection: 'column'}}>
            <View style = {{ width: 50, height: 50, backgroundColor: "blue" }} />
            <View style = {{ width: 100, height: 100, backgroundColor: "pink" }} />
            <View style = {{ width: 150, height: 150, backgroundColor: "red" }} />
            </View>
        ) 
    }
}

export default Todo;
