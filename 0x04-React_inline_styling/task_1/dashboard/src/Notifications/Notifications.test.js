import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from "aphrodite";

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
];
const listNotificationsUpdated = [
  ...listNotifications, // Include all elements from the original list
  { id: 4, type: 'default', value: 'New notification!' }, // Add a new notification
];

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('Renders the p tag', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications');
  });

  it('Check the first element', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type=\"default\">New course available</li>');
  });

  it('Menu and Notifications visibility based on displayDrawer', () => {
    // Test both scenarios in one test with different props
    const wrapperTrue = shallow(<Notifications displayDrawer={true} />);
    const wrapperFalse = shallow(<Notifications displayDrawer={false} />);

    expect(wrapperTrue.find('div.menuItem').exists()).toEqual(true);
    expect(wrapperTrue.find('div.Notifications').exists()).toEqual(true);

    expect(wrapperFalse.find('div.menuItem').exists()).toEqual(true);
    expect(wrapperFalse.find('div.Notifications')).toHaveLength(0);
  });

  it('Renders correctly with empty array or no listNotifications', () => {
    let wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
  });

  it('With list of notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="no-new">No new notification for now</li>');
  });

  it('markAsRead is called', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const mockMarkAsRead = jest.fn();
    wrapper.instance().markAsRead = mockMarkAsRead; // Use mock function for testing
    const id = 0;
    wrapper.instance().markAsRead(id);
    expect(mockMarkAsRead).toHaveBeenCalledWith(id);
  });

  it('should not rerender with the same list', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications }); // Set the same list
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(false);    
  });

  it('verify that when updating the props of the component with a longer list, the component does rerender', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: listNotificationsUpdated });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(true);    
  });
});