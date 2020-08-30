import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { ModalWizard } from "../../components/modal/ModalWizard";
import { MemoryRouter, Route } from "react-router-dom";
import { RecoveryPwc } from "../../views/RecoveryPwc/RecoveryPwc";

describe("Test - <RecoveryPwc />", () => {
  let wrapper = shallow(<RecoveryPwc />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<RecoveryPwc />);
  });

  test("Should renders fine", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
