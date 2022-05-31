import React, { useEffect, useState, useRef } from "react";
import "./LineChart.scss";
import { useParams } from "react-router-dom";
import backend from "../../../services/backend";
import SmallCardSkeleton from "../../Skeleton/SmallCardSkeleton";
import AverageSessionLineChart from "./LineChart";

export default function LineChartContainer() {
  const { userId } = useParams();
  const ref = useRef();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    backend
      .getUserAverageSessions(userId)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [userId]);

  function handleMouseMove(event) {
    const divPosition = ref.current.offsetLeft;
    const mouseX = event.clientX;
    setWidth(mouseX - divPosition);
  }

  if (error) return <p>Un erreur s'est produite</p>;
  if (loading) return <SmallCardSkeleton />;

  return (
    <div
      className="lineChartContainer"
      ref={ref}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseLeave={() => setWidth(0)}
    >
      <div className="lineChartOpacity" style={{ width }}></div>
      <p className="title">Durée moyenne des sessions</p>
      <AverageSessionLineChart data={data.sessions} />
    </div>
  );
}
