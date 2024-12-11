import React from "react";
import { useLoaderData } from "react-router-dom";
export default function WelcomeMsg() {
  const messaeg = useLoaderData();
  return (
    <div>
      <h1>{messaeg}</h1>
    </div>
  );
}
