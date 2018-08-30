import React from 'react';
import SliderAlert from '../lib/SliderAlert';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <SliderAlert
        startValue={40}
        value={0}
        containerStyle={{
          backgroundColor: '#F4D35E'
        }}
        titleStyle={{
          fontSize: 18,
          fontFamily: 'Avenir Next'
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
