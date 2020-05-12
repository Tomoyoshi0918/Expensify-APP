import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import { TestScheduler } from "jest";

test("合計金額(個数)反映テスト", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("合計金額(複数)反映テスト", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={23} expensesTotal={23532857423} />
  );
  expect(wrapper).toMatchSnapshot();
});
