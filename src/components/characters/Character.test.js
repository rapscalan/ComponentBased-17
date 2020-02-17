import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';
import rickImage from '../../assets/1.jpeg';

describe('Character component', () => {
  const chars = require('../../data/rickandmorty.json');
  it('renders Character', () => {
    const wrapper = shallow(<Character image={rickImage} name={chars[0].name} id={chars[0].id} status={chars[0].status} species={chars[0].species} gender={chars[0].gender} origin={chars[0].origin.name} lastLocation={chars[0].location.name}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
