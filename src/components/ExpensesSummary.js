import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const formattedExpensesTotal = numeral(expensesTotal / 100).format("0,0");

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          登録経費数 <span>{expenseCount}</span> 個 合計金額 {""}
          <span>{formattedExpensesTotal}</span> 円
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            経費を追加する
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
