import React from "react";
import PropTypes from "prop-types";
// Components
import {
  BarChart,
  Bar,
  YAxis,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

ActivityBarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ).isRequired,
};

export default function ActivityBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          left: 40,
          bottom: 20,
        }}
        barGap={5}
      >
        <CartesianGrid strokeDasharray={"3"} vertical={false} />

        <XAxis
          dataKey="day"
          tickLine={false}
          tick={<CustomXAxisTick />}
          stroke="#9B9EAC"
        />

        <YAxis
          yAxisId="kilogram"
          orientation="right"
          axisLine={false}
          tickLine={false}
          domain={["dataMin - 5", "dataMax + 5"]}
          tick={{ fontSize: 14, fontWeight: 500, fill: "#9B9EAC" }}
          minTickGap={50}
        />
        <YAxis yAxisId="calories" orientation="left" hide />
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="top" align="right" height={100} iconSize={6} />
        <Bar
          dataKey="kilogram"
          yAxisId="kilogram"
          name="Poids (kg)"
          fill="#282D30"
          barSize={12}
          legendType="circle"
          radius={[10, 10, 0, 0]}
          unit={"kg"}
        />
        <Bar
          yAxisId="calories"
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          barSize={12}
          legendType="circle"
          radius={[10, 10, 0, 0]}
          unit={"kCal"}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

function CustomXAxisTick(node) {
  const { x, y, index } = node;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} dy={20} y={0} textAnchor="end" fill="#9B9EAC" fontSize={14}>
        {index + 1}
      </text>
    </g>
  );
}

function CustomTooltip(node) {
  const { active, payload } = node;
  if (active && payload && payload.length) {
    return (
      <div className="custom-ActivityBarChart-tooltip">
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
