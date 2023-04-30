import React, { useContext } from "react";


const Welcome = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-24 py-12 px-4">
        <img src="../../images/earth.png" alt="" className="w-full max-w-1/2 md:w-3/4 md:mr-40" />
      </div>
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col md:ml-0">
          <h1 className="text-6xl sm:text-5xl text-white py-1">
            Think Global <br /> Fund Local
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Introducing a new model for funding projects in your neighborhood. Fully secured with smart contracts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
