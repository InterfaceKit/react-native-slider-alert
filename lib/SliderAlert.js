/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Animated, Text } from 'react-native';

type Props = {
  startValue: number,
  value: number,
  containerStyle: number | Object,
  titleStyle: number | Object,
  delay: number,
  duration: number,
  children?: string | React.ReactNode | React.ReactElement<any>
};
type State = {
  message: string
};

// WIP
class SliderAlert extends React.PureComponent<Props, State> {
  _height = new Animated.Value(0);

  static defaultProps = {
    delay: 2250,
    duration: 250
  };

  static propTypes = {
    startValue: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    containerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    titleStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    delay: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.element
    ])
  };

  state = {
    message: ''
  };

  showAlert = (message: string, onAnimationEnd?: Function) => {
    const { value, duration, startValue, delay } = this.props;
    if (typeof message !== 'string') {
      console.warn(
        'Message is required on SliderAlert or should be a string type!'
      );
      return;
    }
    this.setState({ message }, () => {
      Animated.sequence([
        Animated.timing(this._height, {
          toValue: startValue,
          duration: duration
        }),
        Animated.timing(this._height, {
          toValue: value,
          delay: delay
        })
      ]).start(() => {
        if (typeof onAnimationEnd === 'function') {
          onAnimationEnd();
        }
      });
    });
  };

  render() {
    return (
      <Animated.View
        style={[
          styles.container,
          this.props.containerStyle,
          {
            height: this._height
          }
        ]}>
        {this.props.children || (
          <Text style={[styles.titleStyle, this.props.titleStyle]}>
            {this.state.message}
          </Text>
        )}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 14
  }
});

export default SliderAlert;
