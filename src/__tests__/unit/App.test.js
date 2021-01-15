import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';

describe('APP test', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />);
    expect(component.find('div')).toHaveLength(1);
  });
});
