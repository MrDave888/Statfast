// React imports //
import React, { Component } from 'react';

// React-native imports //
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View
} from 'react-native';

// Icon imports //
import Icon from 'react-native-vector-icons/EvilIcons';

/* Choices component
  Component contains buttons and functions
  that handle the choices the user will make
  to determine the statistical tests they should
  use depending on questions and information
  provided in the Title component. */
export default class Choices extends Component<{}> {

  /* handleChange function
    Function handles variable passed from
    the choice buttons and passes it to
    main App component in order to appropriately
    set state. */
  handleChange(newPosition){
    this.props.changePosition(newPosition);
  }

  render(){
    if(this.props.currentNode.type === "question"){
      return(
        <View style={choicesStyles.choicesContainer}>
          {
            this.props.currentButtons.map((button, index) =>{
              return(
                <TouchableOpacity
                  key={index}
                  style={choicesStyles.choicesButton}
                  onPress={this.handleChange.bind(this, button.destination)}
                  >
                  <Text style={choicesStyles.choicesButtonText}> {button.text} </Text>
                </TouchableOpacity>
              );
            })
          }
        </View>
      )
    }else{
      return(
        <View style={choicesStyles.choicesContainer}>
          <TouchableOpacity
            style={choicesStyles.choicesButton}
            onPress={() =>{Linking.openURL("market://details?id=googoo.android.btgps")}}
          >
            <Text style={choicesStyles.choicesButtonText}> STEP BY STEP GUIDE </Text>
            <Icon style={choicesStyles.choicesButtonIcon} name="lock" size={30} color="#ecf0f1"/>
          </TouchableOpacity>
        </View>
      )
    }
  }
}

// StyleSheet for the Choices component //
const choicesStyles = StyleSheet.create({
  choicesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#487eb0',
  },
  choicesButtons:{
    flexDirection: 'column',
    alignItems: 'center',
  },
  choicesButtonIcon:{
    alignSelf: 'center',
  },
  choicesButtonText:{
    alignSelf: 'center',
    color: '#ecf0f1',
    fontSize: 16,
  }
});
