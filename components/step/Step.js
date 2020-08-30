import React from "react";

export const Step = ({ title, icon, active }) => {
  return (
    <ul className="steps is-narrow is-medium is-centered has-content-centered">
      <li className="steps-segment">
        <a href="#" className="has-text-dark">
          <span className="steps-marker">
            {active ? (
              <span className="icon is-large has-text-info">
                <i className={icon}></i>
              </span>
            ) : (
              <span className="icon">
                <i className={icon}></i>
              </span>
            )}
          </span>
          <div className="steps-content">
            {active ? (
              <p className="tag is-link has-text-centered">{title}</p>
            ) : (
              <p className="tag has-text-centered">{title}</p>
            )}
          </div>
        </a>
      </li>
    </ul>
  );
};
