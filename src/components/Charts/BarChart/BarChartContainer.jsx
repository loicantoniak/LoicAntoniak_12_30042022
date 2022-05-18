import React, { useEffect, useState } from "react";
import "./BarChart.scss";
import { useParams } from "react-router-dom";
import backend from "../../../services/backend";
import LargeCardSkeleton from "../../Skeleton/LargeCardSkeleton";
import ActivityBarChart from "./BarChart";

export default function BarChartContainer() {
  const { userId } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    backend
      .getUserActivity(userId)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [userId]);

  if (error) return <p>Un erreur s'est produite</p>;
  if (loading) return <LargeCardSkeleton />;

  return (
    <div className="barChartContainer">
      <p className="title">Activité quotidienne</p>
      <ActivityBarChart data={data.sessions} />
    </div>
  );
}
