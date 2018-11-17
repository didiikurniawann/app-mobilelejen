
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
      <NativeBaseAnatomy/>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default index;

 state = {
    number: 0,
    text: ""
  }

  // cara lain menulis state
  constructor(){
    super();
    this.state={
      number: 0,
      text: ""
    }
    }
  }
