import React from "react";

export default function StatCard(props) {
  return (
    <div className="stat-card">
      <p>{props.title}</p>
      <h3>{props.stat}</h3>
      <span className="icon">{props.icon}</span>
    </div>
  );
}
