import React, { useMemo } from "react";
import PropTypes from "prop-types";
import "./RadialBarChart.scss";
import ScoreRadialBarChart from "./RadialBarChartChart";

RadialBarChartContainer.propTypes = {
  score: PropTypes.number.isRequired,
};

export default function RadialBarChartContainer({ score }) {
  const formattedScore = useMemo(() => {
    return [{ name: "score", value: Number(score * 100), fill: "#E60000" }];
  }, [score]);

  return (
    <div className="radiaBarChartContainer">
      <p className="title">Score</p>
      <div className="centerInfo">
        <div className="centerInfoContent">
          <span className="score">{formattedScore[0].value}%</span>
          <span className="scoreText">
            <br /> de votre <br />
            objectif
          </span>
        </div>
      </div>

      <ScoreRadialBarChart data={formattedScore} />
    </div>
  );
}
