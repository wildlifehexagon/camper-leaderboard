import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../components/Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot();
  // expect(wrapper.find('h2').length).toBe(1);
  // expect(wrapper.find('h2').text()).toBe("freeCodeCamp Camper Leaderboard");
});
