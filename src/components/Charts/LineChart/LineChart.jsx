import React from "react";
import PropTypes from "prop-types";
// Components
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { getFirstLetterOfDayOfWeek } from "../../../lib/functions";

/**
 * @param {Array} props
 * @returns {ReactElement} LineChart component
 */
export default function AverageSessionLineChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 100,
          right: 0,
          left: 0,
          bottom: 30,
        }}
      >
        <CartesianGrid vertical={false} horizontal={false} />

        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={<CustomXAxisTick />}
          interval={"preserveStartEnd"}
          tickMargin={10}
        />
        <Tooltip content={<CustomTooltip />} stroke="red" cursor={false} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#FFFFFF"
          dot={false}
          strokeWidth={3}
          unit="min"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}


AverageSessionLineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number,
    })
  ).isRequired,
};



function CustomTooltip(node) {
  const { active, payload } = node;
  if (active && payload && payload.length) {
    return (
      <div className="custom-lineChart-tooltip">
        {payload.map((p, i) => (
          <p key={i}>
            {p.value}
            {p.unit}
          </p>
        ))}
      </div>
    );
  }

  return null;
}

function CustomXAxisTick(node) {
  const { x, y, payload } = node;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} dy={20} y={0} textAnchor="start" fill="#FFFFFF" fontSize={12}>
        {getFirstLetterOfDayOfWeek(payload.value)}
      </text>
    </g>
  );
}
