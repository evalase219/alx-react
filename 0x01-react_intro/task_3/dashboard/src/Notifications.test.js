import React from "react";
import { shallow } from "enzyme";
import Notifications from './Notifications'

describe("Notifications component", () => {
  it('Notifications renders without crashing', () => {
    shallow(<Notifications />)
  });

  it('Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.find('li').length).toEqual(3);
  });

  it('Notifications renders the text `Here is the list of notifications`', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.find('p').text('Here is the list of notifications')).toEqual('Here is the list of notifications');
  });
});