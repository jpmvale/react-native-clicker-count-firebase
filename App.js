import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';

database().setPersistenceEnabled(true).then(() => console.log('Realtime Database persistence enabled'));


class App extends Component {

  updateData = async () => {
    firestore().collection('clicker').doc('9t0nfNq58v6geTDU576U').update({
      count: this.state.count,
    })
      .then(() => {
        console.log('data updated!');
      });
  }
  state = {
    count: 0
  }

  onPress = () => {

    this.setState({
      count: this.state.count + 1
    });
    this.updateData();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
          <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text>
            You clicked {this.state.count} times
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})

export default App;
