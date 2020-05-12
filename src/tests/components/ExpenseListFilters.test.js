import React from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import { withStyles } from "@material-ui/core/styles";
import { shallow } from "enzyme";
import moment from "moment";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("ExpenseListFilters : レンダリングテスト", () => {
  expect(wrapper).toMatchSnapshot();
});

test("ExpenseListFilters : フィルタリング", () => {
  wrapper.setProps({
    filters: altFilters,
  });
  expect(wrapper).toMatchSnapshot();
});

test("フィルタリング変更テスト", () => {
  const value = "rent";
  wrapper.find("input").simulate("change", {
    target: { value },
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("日付ソートテスト", () => {
  const value = "date";
  wrapper.setProps({
    filters: altFilters,
  });
  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(sortByDate).toHaveBeenCalled();
});

test("金額ソートテスト", () => {
  const value = "amount";
  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test("カレンダー日付反映テスト", () => {
  const startDate = moment(0).add(4, "years");
  const endDate = moment(0).add(8, "years");
  wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({
    startDate,
    endDate,
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("カレンダーフォーカス反映テスト", () => {
  const calendarFocused = "endDate";
  wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(
    calendarFocused
  );
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});
