// React imports //
import React, { Component } from 'react';

// React-native imports //
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Animated,
  Easing
} from 'react-native';

/* Info component
  Component contains information passed from
  the App component in order to help the user
  understand the question provided from the
  Title component, giving an explination to
  what the question is asking the user. */
export default class Info extends Component<{}> {

  render(){
    let { fadeIn } = this.props;

    return(
      <View style={infoStyles.infoContainer}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
        >
          {
            this.props.currentNode.info.map((infoObj, index)=>{
              return(
                <View style={infoStyles.infoBox}>
                  <Animated.Text
                    key={index}
                    style={
                      infoStyles.infoTitle,
                      {
                        ...this.props.style,
                        opacity: fadeIn
                      }
                    }
                  >
                    {infoObj.infoTitle}
                  </Animated.Text>
                  <Animated.Text
                    key={index}
                    style={[
                      infoStyles.infoText,
                      {
                        ...this.props.style,
                        opacity: fadeIn
                      }
                    ]}
                  >
                    {infoObj.infoText}
                  </Animated.Text>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }
}

// StyleSheet for the Info component //
const infoStyles = StyleSheet.create({
  infoContainer:{
    flex: 7,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 16,
    marginLeft: 32,
    marginRight: 32,
  },
  infoTitle:{
    fontSize: 14,
    paddingBottom: 4,
  },
  infoText:{
    paddingBottom: 16,
  }
})
