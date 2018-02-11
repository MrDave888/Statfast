// React imports //
import React, { Component } from 'react';

// React-native imports //
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

// Icon imports //
import Icon from 'react-native-vector-icons/EvilIcons';

/* Header component
  Component contains the header for the application
  which includes a buttons, functions and the main
  logo image. The buttons and functions within this
  component allow the user to return to the previous
  position in the data set or go return to the start
  of there avalible choices. */
export default class Header extends Component<{}> {

  /* handleChange function
    Function handles variable passed from
    the functional buttons and passes it to
    main App component in order to appropriately
    set state. */
  handleChange(newPosition){
    this.props.changePosition(newPosition);
  }

  render(){
    return(
      <View style={headerStyles.Header}>
        <TouchableOpacity
          style={headerStyles.headerButton}
          onPress={() => {
            if(this.props.position > 1){
              this.handleChange(this.props.currentEdge.source)
            }
          }}
        >
          <Icon name="arrow-left" size={30} color="#ecf0f1"/>
        </TouchableOpacity>
        <Image
          style={headerStyles.logoImg}
          source={require('../public/logo.png')}
        />
        <TouchableOpacity
          style={headerStyles.headerButton}
          onPress={() => {
            if(this.props.position > 1){
              this.handleChange(1)
            }
          }}
        >
          <Icon name="undo" size={30} color="#ecf0f1"/>
        </TouchableOpacity>
      </View>
    );
  }
}

// StyleSheet for the Header component //
const headerStyles = StyleSheet.create({
  Header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#487eb0',
    paddingLeft: 8,
    paddingRight: 8,
  },
  logoImg:{
    resizeMode: 'contain',
    width: 128,
  }
});
