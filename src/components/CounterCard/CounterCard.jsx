import React from "react";
import PropTypes from "prop-types";
import "./CounterCard.scss";

/**
 * Component for showing personnal information into a counter card
 *
 * @param {node} icon  svg
 * @param {string} color background color to icon
 * @param {string} name name of the counter
 * @param {string} unit unit of the counter
 * @param {number} count quantity of the counter
 *
 * @component
 */
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

CounterCard.propTypes = {
  /**
   * @type {node}
   * @required
   */
  icon: PropTypes.node.isRequired,
  /**
   * @type {string}
   * @required
   */
  color: PropTypes.string.isRequired,
  /**
   * @type {string}
   * @required
   */
  name: PropTypes.string.isRequired,
  /**
   * @type {string}
   * @required
   */
  unit: PropTypes.string.isRequired,
  /**
   * @type {number}
   * @required
   */
  count: PropTypes.number.isRequired,
};
