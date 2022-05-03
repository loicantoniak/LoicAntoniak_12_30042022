import React, { useMemo } from "react";
import PropTypes from "prop-types";
import CounterCard from "./CounterCard";
// Icons
import { ReactComponent as Energy } from "../../assets/icons/energy.svg";
import { ReactComponent as Chicken } from "../../assets/icons/chicken.svg";
import { ReactComponent as Apple } from "../../assets/icons/apple.svg";
import { ReactComponent as Burger } from "../../assets/icons/burger.svg";

CounterCardContainer.propTypes = {
  counters: PropTypes.objectOf(PropTypes.number).isRequired,
};

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

const MAPPING_CARD = {
  calorieCount: {
    icon: <Energy />,
    color: "#faeaea",
    name: "Calories",
    unit: "kCal",
  },
  proteinCount: {
    icon: <Chicken />,
    color: "#e9f4fb",
    name: "Protéines",
    unit: "g",
  },
  carbohydrateCount: {
    icon: <Apple />,
    color: "#faf6e5",
    name: "Glucides",
    unit: "g",
  },
  lipidCount: {
    icon: <Burger />,
    color: "#faeaef",
    name: "Lipides",
    unit: "g",
  },
};
