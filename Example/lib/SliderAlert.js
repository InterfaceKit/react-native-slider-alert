/* @flow */

import React from 'react'
import { StyleSheet, Animated, Text } from 'react-native'

type Props = {
  initialValue: number,
  value: number,
  titleStyle: Object,
  delay: number,
  duration: number
}
type State = {
  message: string
}

// WIP
class SliderAlert extends React.PureComponent<Props, State> {
  _height = new Animated.Value(0)

  static defaultProps = {
    delay: 2250,
    duration: 250
  }

  state = {
    message: ''
  }

  showAlert = (message: string) => {
    const { value, duration, initialValue, delay, useNativeDriver } = this.props
    if (typeof message !== 'string') {
      console.warn(
        'Message is required on SliderAlert or should be a string type!'
      )
      return
    }
    this.setState({ message }, () => {
      Animated.sequence([
        Animated.timing(this._height, {
          toValue: value,
          duration: duration
        }),
        Animated.timing(this._height, {
          toValue: initialValue,
          delay: delay
        })
      ]).start()
    })
  }

  render() {
    return (
      <Animated.View
        style={[
          styles.container,
          {
            ...this.props.containerStyle
          },
          {
            height: this._height
          }
        ]}>
        <Text
          style={[
            styles.titleStyle,
            {
              ...this.props.titleStyle
            }
          ]}>
          {this.state.message}
        </Text>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4D35E',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center'
  }
})

export default SliderAlert
