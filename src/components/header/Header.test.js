import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  it('renders Headder', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
