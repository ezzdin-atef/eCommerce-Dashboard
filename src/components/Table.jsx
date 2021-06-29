import React from "react";

export default function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          {props.thead.map((el, index) => (
            <th key={index}>{el}</th>
          ))}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}
