import React from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from 'aphrodite';
import NotificationItem from "./NotificationItem";
import closeIcon from "../assets/close-icon.png";
import NotificationItemShape from "./NotificationItemShape";

const opacityAnim = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};

const bounceAnim = {
  "0%": { transform: "translateY(0px)" },
  "33%": { transform: "translateY(-5px)" },
  "66%": { transform: "translateY(5px)" },
  "100%": { transform: "translateY(0px)" },
};

const styles = StyleSheet.create({
  notifications: {
    border: '3px dashed #e14852',
    padding: '0.25em',
    float: 'right',
    margin: '20px 10px 0 0',
  },
  notificationsSmall: {
    '@media (max-width: 900px)': {
      float: 'none',
      fontSize: '20px'
    }
  },
  ulSmall: {
    '@media (max-width: 900px)': {
      padding: '0',
      listStyle: 'none'
    }
  },
  menuItem: {
    position: "relative",
    zIndex: 100,
    textAlign: "right",
    ":hover": {
      cursor: "pointer",
      animationName: [opacityAnim, bounceAnim],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    },
  },

  menuItemSmall: {
    '@media (max-width: 900px)': {
      fontSize: '20px'
    }
  },
  notificationsButtonImage: {
    width: '20px',
    marginTop: '10px'
  }
})


class Notifications extends React.Component {
  constructor (props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this)
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
      )
  }
  
  render () { 
    return (
      <>
        <div className='menuItem'><div className={css(styles.menuItem, styles.menuItemSmall)}>Your notifications</div></div>
    
        { this.props.displayDrawer ? 
          (<div className='Notifications'>
            <div className={css(styles.notifications, styles.notificationsSmall)}>
              <button
                style={{
                  right: 45,
                  border: "none",
                  position: "absolute",
                  background: "transparent",
                }}
                aria-label="close"
                onClick={() => console.log("Close button has been clicked")}
              >
              <img src={closeIcon} className={css(styles.notificationsButtonImage)} alt="close button icon" />
              </button>
              <p>Here is the list of notifications</p>
              <ul className={css(styles.ulSmall)}>
                {this.props.listNotifications.length === 0 ? (<NotificationItem value='No new notification for now' type='no-new' />) : <></>}
                {this.props.listNotifications.map((not) => (<NotificationItem key={not.id} type={not.type} value={not.value} html={not.html} markAsRead={() => {this.markAsRead(not.id)}} />))}
              </ul>
            </div>
          </div>)
             
          : <></>
        }
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications;