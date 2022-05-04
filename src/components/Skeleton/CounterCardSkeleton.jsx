import React from "react";

export default function CounterCardSkeleton() {
  return (
    <div className="counterCard is-loading">
      <div className="counterCard__icon"></div>

      <div className="counterCard__info">
        <p></p>
        <p></p>
      </div>
    </div>
  );
}
