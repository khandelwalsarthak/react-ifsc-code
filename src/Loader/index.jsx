import React from "react";
import './style.scss';

const Loader = () => {
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

export default Loader;