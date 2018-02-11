// React imports //
import React, { Component } from 'react';

// React-native imports //
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Animated
} from 'react-native';

/* Info component
  Component contains information passed from
  the App component in order to help the user
  understand the question provided from the
  Title component, giving an explination to
  what the question is asking the user. */
export default class Info extends Component<{}> {

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
      <View style={infoStyles.infoContainer}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
        >
          <Animated.View
            style={[titleStyles.titleSlide, {
              transform: [
                {
                  translateX:this.state.x
                }
              ]
            }]}
          >
            {
              this.props.currentNode.info.map((infoObj, index)=>{
                return(
                  <View style={infoStyles.infoBox}>
                    <Text key={index} style={infoStyles.infoTitle}>
                      {infoObj.infoTitle}
                    </Text>
                    <Text key={index} style={infoStyles.infoText}>
                      {infoObj.infoText}
                    </Text>
                  </View>
                )
              })
            }
          </Animated.View>
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
