import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';
import { ExpansionPanelActions } from '@material-ui/core';

test('should correctly render LoadingPage', () => {
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});