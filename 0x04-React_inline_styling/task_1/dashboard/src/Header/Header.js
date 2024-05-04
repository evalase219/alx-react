import React from "react";
import holbertonLogo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    color: '#e14852',
    alignItems: "center"
  },
  headerLogo: {
    width: '200px',
    height: '200px'
  }
})

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={holbertonLogo} className={css(styles.headerLogo)} alt="Holberton Logo" />
      <h1>School dashboard</h1>
    </header>
  );
}

export default Header;