import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("デフォルト設定テスト", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("金額ソートテスト", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("日付ソートテスト", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount",
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("テキスト(text)ソートテスト", () => {
  const text = "This is my filter";
  const action = {
    type: "SET_TEXT_FILTER",
    text,
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test("日付(始)フィルタリングテスト", () => {
  const startDate = moment();
  const action = {
    type: "SET_START_DATE",
    startDate,
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test("日付(終)フィルタリングテスト", () => {
  const endDate = moment();
  const action = {
    type: "SET_END_DATE",
    endDate,
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
