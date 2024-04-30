import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import closeIcon from "../assets/close-icon.png";
import NotificationItemShape from "./NotificationItemShape";
import "./Notifications.css";

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
      <div className='menuItem'>
        <p>Your notifications</p>
      </div>
      { displayDrawer ? 
      (<div className='Notifications'>
      <button type='button'
              onClick={() => console.log('Close button has been clicked')}
              aria-label='Clore'
              style={{
                float: 'right',
                background:'0',
                border: '0',
                }}>
        <img src={closeIcon} alt='closeIcon' style={{ width: '7px', height: '7px' }}/>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        { listNotifications.length === 0 ? (<NotificationItem type='no-new' value='No new notification for now' />) : <></> }
        { listNotifications.map((notification) => (<NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />)) }
      </ul>
    </div>)
    : <></>
    }
    </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};