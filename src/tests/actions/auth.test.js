import { login, logout } from "../../actions/auth";

test("ログイン実装確認テスト", () => {
  const uid = "abc123";
  const action = login(uid);
  expect(action).toEqual({
    type: "LOGIN",
    uid,
  });
});

test("ログアウト実装確認テスト", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT",
  });
});
