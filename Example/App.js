/* @flow */

import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import SliderAlert from './lib/SliderAlert'

type Props = {}

export default class App extends React.PureComponent<Props> {
  _alert: SliderAlert

  onPressButton = () => {
    this._alert.showAlert('Welcome to React Native again!')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SliderAlert
          ref={(ref: any) => {
            this._alert = ref
          }}
          initialValue={0}
          value={70}
          containerStyle={{}}
          titleStyle={{
            fontSize: 18,
            fontFamily: 'Avenir Next'
          }}
        />
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <TouchableOpacity style={styles.button} onPress={this.onPressButton}>
            <Text style={styles.title}>Show message</Text>
          </TouchableOpacity>
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
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  button: {
    backgroundColor: '#DA4167'
  },
  title: {
    margin: 20,
    color: '#FFFFFF'
  }
})
