import React from "react";
import { AppRouter } from "../../routers/AppRouter";
import { mount } from "enzyme";

describe("Test - <AppRouter />", () => {
  test("renders without crashing", () => {
    const wrapper = mount(<AppRouter />);

    expect(wrapper).toMatchSnapshot();
  });
});
