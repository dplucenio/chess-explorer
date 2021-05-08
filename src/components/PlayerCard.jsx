import { useState } from "react";

export function PlayerCard({ name = '', url = 'aa' }) {

  return (
    <div className="playerCard">
      <h2>{name}</h2>
      <h2>{url}</h2>
    </div>
  );
}