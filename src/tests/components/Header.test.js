import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";

test("Header　: レンダリングテスト", () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test("ヘッダー上部:ログアウトボタン反映テスト", () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find("button").simulate("click");
  expect(startLogout).toHaveBeenCalled();
});
