import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// This is a stateless functional componenet
// const Header = (props) => <Text>{props.textIwant}</Text>;

// This is a stateful functional component
class Header extends React.Component {
    constructor(props){
        super(props);
        this.textIwant = props.textIwant;
        this.state = {
            number: 0
        }

        this.addNumberWhenPressed = this.addNumberWhenPressed.bind(this);
    }

    componentDidUpdate(){
        console.log(this.state.number);
    }
addNumberWhenPressed() {
    const previousNumber = this.state.number;
    this.setState({
        number: previousNumber + 1 
    });
}
    render(){
        return(<Text onPress={this.addNumberWhenPressed}>{this.textIwant}</Text>);    
    }
}
export default Header;
