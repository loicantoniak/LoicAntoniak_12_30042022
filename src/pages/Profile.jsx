import React, { useEffect, useState } from "react";
import backend from "../services/backend";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import CounterCardContainer from "../components/CounterCard/CounterCardContainer";

export default function Profile() {
  const { userId } = useParams();

  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    backend
      .getUser(userId)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [userId]);

  console.log(data);

  if (error) return <span>Oups ! Une erreur est survenue...</span>;
  if (loading) return <Spinner />;

  const {keyData} = data

  return (
    <div className="container">
      <h1 className="h1">
        Bonjour <span className="color-red">{data.userInfos.firstName}</span>
      </h1>

      <p className="text">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>

      <div className="profile">
        <div className="profile__graphs"></div>

        <div className="profile__counterCards">
          <CounterCardContainer counters={keyData}/>
        </div>
      </div>
    </div>
  );
}
