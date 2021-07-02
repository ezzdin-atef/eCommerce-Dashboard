import React from "react";

/*
 * Version Component to add new version in what's new page
 * @props
 * version: string (version number)
 * date: string
 * features: array of object [{ type: [improve, fix, feature], item: string }]
 */

export default function Version(props) {
  return (
    <div className="version">
      <h4>
        v{props.version} <span>(Updated on: {props.date})</span>
      </h4>
      <p>
        <ul>
          {props.features.map((el) => (
            <li key={el.item}>
              <span className={el.type}>{el.type}</span> {el.item}
            </li>
          ))}
        </ul>
      </p>
    </div>
  );
}
