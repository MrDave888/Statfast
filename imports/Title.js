// React imports //
import React, { Component } from 'react';

// React-native imports //
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

/* Title Component
  Component contains the main question provided
  to the user from the App components. Once the
  user has reacted the last choice in the data
  tree, this component will display the statistical
  test the user should take based on there previous
  choices. */
export default class Title extends Component<{}> {

  state = {
   visible: false,
   x: new Animated.Value(-100),
 };

 slide = () => {
   Animated.spring(this.state.x, {
     toValue: 0,
   }).start();
   this.setState({
     visible: true,
   });
 };

  render(){
    return(
      <View style={titleStyles.titleContainer}>
        <Animated.View
          style={[titleStyles.titleSlide, {
            transform: [
              {
                translateX:this.state.x
              }
            ]
          }]}
        >
          <Text style={titleStyles.title}>
            {this.props.currentNode.text}
          </Text>
        </Animated.View>
      </View>
    )
  }

}

// StyleSheet for the Title component //
const titleStyles = StyleSheet.create({
  titleContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#487eb0',
    marginLeft: 32,
    marginRight: 32,
  },
  title:{
    fontSize: 18
  }
})
