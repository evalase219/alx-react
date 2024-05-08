import React, { Component } from "react";

export default function WithLogging(WrappedComponent) {
  const ComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  class HOC extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      console.log(`Component ${ComponentName} is mounted`);
    }
    componentWillUnmount() {
      console.log(`Component ${ComponentName} is going to unmount`);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  HOC.displayName = `WithLogging(${ComponentName})`;
  return HOC;
}