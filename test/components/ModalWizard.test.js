import React from "react";
import "@testing-library/jest-dom";
import { shallow, ShallowWrapper } from "enzyme";
import { ModalWizard } from "../../components/modal/ModalWizard";

describe("Test - <ModalWizard />", () => {
  const toggleModal = jest.fn();
  let wrapper = shallow(<ModalWizard onRequestClose={toggleModal} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<ModalWizard onRequestClose={toggleModal} />);
  });

  test("Should renders fine", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
