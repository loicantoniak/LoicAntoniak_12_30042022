import React from "react";
import PropTypes from "prop-types";
import "./CounterCard.scss";

CounterCard.propTypes = {
  icon: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default function CounterCard({ icon, color, name, unit, count }) {
  return (
    <div className="counterCard">
      <div className="counterCard__icon" style={{ backgroundColor: color }}>
        {icon}
      </div>

      <div className="counterCard__info">
        <p className="counterCard__count">
          {count.toLocaleString("en-US", { currency: "USD" })}
          {unit}
        </p>
        <p className="counterCard__name">{name}</p>
      </div>
    </div>
  );
}
