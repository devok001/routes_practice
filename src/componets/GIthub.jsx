import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";


export default function GitHub() {
   const data = useLoaderData();
   console.log("followers : ",data.login);
   return (
      <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl ">
         <h3>GitHub Name : {data.login}</h3>
         <img src={data.avatar_url} alt="" />
      </div>
      </>
   );
}

