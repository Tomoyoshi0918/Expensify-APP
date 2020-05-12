import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("経費データ無確認テスト", () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test("金額(単体)確認テスト", () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test("金額(複数)確認テスト", () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(114195);
});
