import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { TestScheduler } from 'jest';

test('should  correctly render ExpenmsesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />)
  expect(wrapper).toMatchSnapshot();
});

test('should  correctly render ExpenmsesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23532857423} />)
  expect(wrapper).toMatchSnapshot();
});