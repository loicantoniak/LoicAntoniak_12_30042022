import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backend from "../../../services/backend";
import SmallCardSkeleton from "../../Skeleton/SmallCardSkeleton";

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
        // setLoading(false);
      })
      .catch(() => setError(true));
  }, [userId]);

  if (loading) return <SmallCardSkeleton />;

  return <div>LineChartContainer</div>;
}