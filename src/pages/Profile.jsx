import React, { useEffect, useState } from "react";
import backend from "../services/backend";
import { useParams } from "react-router-dom";
// Components
import CounterCardContainer from "../components/CounterCard/CounterCardContainer";
import BarChart from "../components/Charts/BarChart";
import LineChart from "../components/Charts/LineChart";
import RadarChart from "../components/Charts/RadarChart";
import RadialBarChart from "../components/Charts/RadialBarChart";
// Skeleton
import TitleSkeleton from "../components/Skeleton/TitleSkeleton";
import TextSkeleton from "../components/Skeleton/TextSkeleton";
import CounterCardSkeleton from "../components/Skeleton/CounterCardSkeleton";
import SmallCardSkeleton from "../components/Skeleton/SmallCardSkeleton";

export default function Profile() {
  const { userId } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    backend
      .getUser(userId)
      .then((res) => {
        setData(res.data.data);
        // setLoading(false);
      })
      .catch(() => setError(true));
  }, [userId]);

  if (error) return <span>Oups ! Une erreur est survenue...</span>;

  const { keyData } = data;

  return (
    <div className="container">
      {loading ? (
        <>
          <TitleSkeleton />
          <TextSkeleton />
        </>
      ) : (
        <>
          <h1 className="h1">
            Bonjour{" "}
            <span className="color-red">{data.userInfos.firstName}</span>
          </h1>

          <p className="text">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </>
      )}

      <div className="profile">
        <div className="profile__graphs">
          <BarChart />
          <div className="profile__smallGraphs">
            <LineChart />
            <RadarChart />
            {loading ? <SmallCardSkeleton /> : <RadialBarChart />}
          </div>
        </div>

        <div className="profile__counterCards">
          {loading ? (
            <>
              <CounterCardSkeleton />
              <CounterCardSkeleton />
              <CounterCardSkeleton />
              <CounterCardSkeleton />
            </>
          ) : (
            <CounterCardContainer counters={keyData} />
          )}
        </div>
      </div>
    </div>
  );
}
