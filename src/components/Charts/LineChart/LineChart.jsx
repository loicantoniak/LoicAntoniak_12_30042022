import React, { useState } from "react";
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
  const [percent, setPercent] = useState(0);

  const onMouseMove = (node) => {
    if (node && node.activePayload) {
      const axisX = node.activePayload[0].payload.day;
      const index = data.findIndex((d) => d.day === axisX);
      const percentage = ((data.length - index - 1) * 100) / (data.length - 1);

      setPercent(100 - percentage);
    }
  };

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
        onMouseMove={onMouseMove}
        onMouseLeave={() => setPercent(0)}
      >
        <CartesianGrid vertical={false} horizontal={false} />

        <defs>
          <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="#ea8185" />
            <stop offset={`${percent - 20}%`} stopColor="#e0afb0" />
            <stop offset={`${percent}%`} stopColor="white" />
            <stop offset={`${100}%`} stopColor="white" />
          </linearGradient>
        </defs>
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="url(#colorUv)"
          dot={false}
          strokeWidth={3}
        />

        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={<CustomXAxisTick />}
          interval={"preserveStartEnd"}
          tickMargin={10}
        />
        <Tooltip content={<CustomTooltip />} stroke="red" cursor={false} />
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
      <text x={0} dy={20} y={0} textAnchor="start" fill="#e0afb0" fontSize={12}>
        {getFirstLetterOfDayOfWeek(payload.value)}
      </text>
    </g>
  );
}
