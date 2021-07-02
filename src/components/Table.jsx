import React from "react";

/*
 * Table Component to add table
 * @props
 * thead: array of string
 */

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
