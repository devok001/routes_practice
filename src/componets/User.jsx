import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
   const { userid } = useParams();
   return (
      <>
         <h1>userId: {userid}</h1>
      </>
   );
}
