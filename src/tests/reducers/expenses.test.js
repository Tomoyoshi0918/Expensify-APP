import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("デフォルト設定テスト", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("経費データ削除テスト", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("経費データ無 削除不可確認テスト", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("経費データ追加テスト", () => {
  const expense = {
    id: "109",
    description: "Laptop",
    note: "",
    createdAt: 20000,
    amount: 29500,
  };
  const action = {
    type: "ADD_EXPENSE",
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("経費データ編集テスト", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test("経費データ無 編集不可テスト", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("経費データ確認テスト", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]],
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
