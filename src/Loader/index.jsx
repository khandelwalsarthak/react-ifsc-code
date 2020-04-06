import React from "react";
import './style.css';

class Loader extends React.Component {
  render() {
    return (
      <div className="loader">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>
    );
  }
}

export default Loader;