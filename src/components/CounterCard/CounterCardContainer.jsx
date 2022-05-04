import React, { useMemo } from "react";
import PropTypes from "prop-types";
import CounterCard from "./CounterCard";
import { MAPPING_CARD } from "./constant";

export default function CounterCardContainer({ counters }) {
  const data = useMemo(() => {
    const keys = Object.keys(counters);
    const transformData = keys.map((k) => ({
      ...MAPPING_CARD[k],
      count: counters[k],
    }));
    return transformData;
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
  counters: PropTypes.objectOf(PropTypes.number).isRequired,
};
