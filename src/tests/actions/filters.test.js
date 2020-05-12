import moment from "moment";
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../../actions/filters";

test("日付(始め)設定", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("日付(終わり)設定", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("テキストフィルターテスト", () => {
  const text = "Something in";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text,
  });
});

test("テキストフィルターテスト(デフォルト値)", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

test("日付ソート", () => {
  expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});

test("金額ソート", () => {
  expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });
});
