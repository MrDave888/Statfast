// React imports //
import React, { Component } from 'react';

// React-native imports //
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  Animated,
  Easing
} from 'react-native';

// Icon imports //
import Icon from 'react-native-vector-icons/EvilIcons'

// Local data imports //
import data from './data/data.json'

// Component imports //
import Header from './imports/Header.js'
import Title from './imports/Title.js'
import Info from './imports/Info.js'
import Choices from './imports/Choices.js'

/* App component
  Component contains the application state,
  components and functions to handle application
  wide state change. The component initializes
  state objects and provides those objects with
  data from a local data file appropriately within
  the react lifecycle. Setting variables from state
  passing them to components called within the render
  and handling state changes upon a users actions
  within those components. */
export default class App extends Component<{}> {

  /* App constructor
    Initializes three main state objects
    position, nodes and edges. The position
    is the current position within the data
    structure, nodes are the questions and
    results & edges are the choices users
    can make. */
  constructor(){
    super();
    this.state = {
      position: 1,
      nodes: [],
      edges: [],
      slideIn: new Animated.ValueXY({ x: 400, y: 0 }),
      fadeIn: new Animated.Value(0)
    }
  }

  /* App componentWillMount function
    Sets state of initializes objects,
    passed from the locally imported
    JSON file. Animations are also
    run to create fade in effect
    on initial question & answer
    page.*/
  componentWillMount(){
    this.setState({
      nodes: data.nodes,
      edges: data.edges
    });


    Animated.parallel([
      Animated.timing(this.state.fadeIn,
        {
          toValue: 1,
          duration: 600,
          easing: Easing.in(Easing.ease)
        }
      ),
      Animated.timing(this.state.slideIn,
        {
          toValue: { x: 0, y: 0},
          duration: 600,
          easing: Easing.in(Easing.ease)
        }
      )
    ]).start(() =>{
      this.resetAnimationValues();
    });
  }

  /* handleChangePosition function
    Function handles variable passed from
    the any button within the application
    and sets state appropriately based on
    the variable it is passed.
    Animations are also run and reset
    after each user choice within this
    functionon. */
  handleChangePosition(newPosition){
    this.setState({
      position: newPosition
    })

    Animated.parallel([
      Animated.timing(this.state.fadeIn,
        {
          toValue: 1,
          duration: 600,
          easing: Easing.in(Easing.ease)
        }
      ),
      Animated.timing(this.state.slideIn,
        {
          toValue: { x: 0, y: 0},
          duration: 600,
          easing: Easing.in(Easing.ease)
        }
      )
    ]).start(() =>{
      this.resetAnimationValues();
    });
  }

  /* resetAnimationValues function
    Function handles animation value
    state and is called after an
    animation is called in order
    for the animation to run on next
    user choice. */
  resetAnimationValues(){
    this.setState({
      slideIn: new Animated.ValueXY({ x: 400, y: 0 }),
      fadeIn: new Animated.Value(0)
    })
  }

  render() {
    // Single object, state based variables //
    let currentNode = this.state.nodes.filter(node => node.position == this.state.position);
    let currentButtons = this.state.edges.filter(edge => edge.source == this.state.position);
    let currentEdge = this.state.edges.filter(edge => edge.destination == this.state.position);
    return (
      <View style={styles.container}>
        <Header changePosition={this.handleChangePosition.bind(this)} currentEdge={currentEdge[0]} position={this.state.position}/>
        <Title currentNode={currentNode[0]} fadeIn={this.state.fadeIn} slideIn={this.state.slidIn}/>
        <Info currentNode={currentNode[0]} fadeIn={this.state.fadeIn} slideIn={this.state.slideIn}/>
        <Choices changePosition={this.handleChangePosition.bind(this)} currentButtons={currentButtons} currentNode={currentNode[0]}/>
      </View>
    );
  }
}

// StyleSheet for the App component //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF'
  }
});
