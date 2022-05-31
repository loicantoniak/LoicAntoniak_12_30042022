import React, { useEffect, useState } from "react";
import "./LineChart.scss";
import { useParams } from "react-router-dom";
import backend from "../../../services/backend";
import SmallCardSkeleton from "../../Skeleton/SmallCardSkeleton";
import AverageSessionLineChart from "./LineChart";

export default function LineChartContainer() {
  const { userId } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    backend
      .getUserAverageSessions(userId)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [userId]);

  if (error) return <p>Un erreur s'est produite</p>;
  if (loading) return <SmallCardSkeleton />;

  return (
    <div className="lineChartContainer">
      <p className="title">Durée moyenne des sessions</p>
      <AverageSessionLineChart data={data.sessions} />
    </div>
  );
}
