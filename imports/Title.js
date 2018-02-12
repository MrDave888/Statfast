// React imports //
import React, { Component } from 'react';

// React-native imports //
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing
} from 'react-native';

/* Title Component
  Component contains the main question provided
  to the user from the App components. Once the
  user has reacted the last choice in the data
  tree, this component will display the statistical
  test the user should take based on there previous
  choices. */
export default class Title extends Component<{}> {
  render(){
    let { fadeIn } = this.props;
    let { slideIn } = this.props;

    return(
      <View style={titleStyles.titleContainer}>
        <Animated.Text
          style={[
            titleStyles.title,
            {
              ...this.props.style,
              opacity: fadeIn,
              transform: slideIn
            }
          ]}
        >
          {this.props.currentNode.text}
        </Animated.Text>
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
  title: {
    fontSize: 18,
  }
})
