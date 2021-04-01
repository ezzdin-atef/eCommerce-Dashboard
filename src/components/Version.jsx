import React from 'react';

export default function Version(props) {
  return (
    <div className="version">
      <h4>v{props.version} <span>(Updated on: {props.date})</span></h4>
      <p>
        <ul>
          {props.features.map(el => (
            <li key={el.item}><span className={el.type}>{el.type}</span> {el.item}</li>
          ))}
        </ul>
      </p>
    </div>
  )
}
