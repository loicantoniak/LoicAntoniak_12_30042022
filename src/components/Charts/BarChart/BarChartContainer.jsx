import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backend from "../../../services/backend";
import LargeCardSkeleton from "../../Skeleton/LargeCardSkeleton";

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
        // setLoading(false);
      })
      .catch(() => setError(true));
  }, [userId]);

  console.log(loading);

  if (loading) return <LargeCardSkeleton />;

  return <div>BarChartContainer</div>;
}
