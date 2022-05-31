import React, { useMemo } from "react";
import PropTypes from "prop-types";
import CounterCard from "./CounterCard";
import { MAPPING_CARD } from "./constant";


/**
 * Wrapper of CounterCard component to format data 
 * @param {object} counters 
 * @returns react component
 */
export default function CounterCardContainer({ counters }) {

  const data = useMemo(() => {
    const keys = Object.keys(counters);
    const formattedData = keys.map((k) => ({
      ...MAPPING_CARD[k],
      count: counters[k],
    }));
    return formattedData;
  }, [counters]);

  return (
    <>
      {data.map(({ icon, color, name, unit, count }, i) => (
        <CounterCard
          key={i}
          icon={icon}
          color={color}
          name={name}
          unit={unit}
          count={count}
        />
      ))}
    </>
  );
}

CounterCardContainer.propTypes = {
/**
 * data of counters
 * 
 * @type {object} 
 * @required
 */
  counters: PropTypes.objectOf(PropTypes.number).isRequired,
};
