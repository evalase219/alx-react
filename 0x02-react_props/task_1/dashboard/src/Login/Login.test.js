import React from "react";
import { shallow } from "enzyme";
import { Login } from "./Login";

describe("Login component", () => {
  it('Renders Login without crashing', () => {
    shallow(<Login />);
  })

  it('Renders 2 input tags', () => {
    const wrapper = shallow(<Login />);
    const inputCount = wrapper.find('input');
    expect(inputCount.length).toEqual(2);
  });

  it('Renders 2 label tags', () => {
    const wrapper = shallow(<Login />);

    const labeCount = wrapper.find('label');
    expect(labeCount.length).toEqual(2);
  })
})