import React, { useEffect, useMemo, useState } from "react";
import "./RadarChart.scss";
import { useParams } from "react-router-dom";
import backend from "../../../services/backend";
import SmallCardSkeleton from "../../Skeleton/SmallCardSkeleton";
import PerformanceRadarChart from "./RadarChart";

export default function RadarChartContainer() {
  const { userId } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    backend
      .getUserPerformance(userId)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [userId]);

  const formattedData = useMemo(() => {
    if (!Object.keys(data).length) return;

    const { kind, data: chartData } = data;
    
    const formattedData = chartData.map((d) => ({
      ...d,
      kind: kind[d.kind],
    }));

    return formattedData;
  }, [data]);

  if (error) return <p>Un erreur s'est produite</p>;
  if (loading) return <SmallCardSkeleton />;

  return (
    <div className="radarChartContainer">
      <PerformanceRadarChart data={formattedData} />
    </div>
  );
}
