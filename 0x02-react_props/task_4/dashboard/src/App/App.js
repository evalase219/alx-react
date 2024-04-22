import React from "react";
import PropTypes from "prop-types";
import Notifications from "../Notifications/Notifications";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import "./App.css";
import CourseList from "../CourseList/CourseList";

export default function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
      </div>
      <div className="App-body">{!isLoggedIn ? <Login /> : <CourseList />}</div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};