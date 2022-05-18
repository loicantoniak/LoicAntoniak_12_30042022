import React from "react";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";

ScoreRadialBarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number,
      fill: PropTypes.string,
    })
  ).isRequired,
};

export default function ScoreRadialBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="70%"
        barSize={16}
        data={data}
        startAngle={90}
        endAngle={450}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />

        <RadialBar dataKey="value" cornerRadius={50} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
