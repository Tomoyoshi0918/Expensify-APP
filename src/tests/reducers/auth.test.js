import authReducer from "../../reducers/auth";

test("ログイン認証確認テスト", () => {
  const action = {
    type: "LOGIN",
    uid: "abc123",
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("ログアウト確認テスト", () => {
  const action = {
    type: "LOGOUT",
  };
  const state = authReducer({ uid: "anything" }, action);
  expect(state).toEqual({});
});
