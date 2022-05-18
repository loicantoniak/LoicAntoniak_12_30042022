import React from "react";
import PropTypes from "prop-types";
// Components
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

PerformanceRadarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.string,
    })
  ).isRequired,
};

export default function PerformanceRadarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" tickLine={false} />
        <Radar
          dataKey="value"
          stroke="#e60000"
          fill="#e60000"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
