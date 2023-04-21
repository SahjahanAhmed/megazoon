import React from "react";

const NetworkErrorCheck = () => {
  return (
    <div className="text-white max-h-100vh min-h-80vh flex flex-col items-center justify-center">
      <h1 className="text-2xl text-center text-orange-500">
        please check your network connection!
      </h1>
      <h1 className="text-orange-500">couldn't connect to the server!!!</h1>
    </div>
  );
};

export default NetworkErrorCheck;
