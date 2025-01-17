import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>経費</h1>
        </Link>
        <button className="button button--link" onClick={startLogout}>
          ログアウト
        </button>
      </div>
    </div>
  </header>
);

const mapdispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapdispatchToProps)(Header);
