import React from "react";

export const Header = (props) => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">Road To Headhunter</span>
        <form className="form-inline ml-auto">
          <span className="text-light mr-3">{props.league}</span>
          {props.children}
        </form>
      </div>
    </div>
  );
};
