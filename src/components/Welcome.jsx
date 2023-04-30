import React, { useContext } from "react";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-white-400 text-sm font-light text-white";

const Welcome = () => {
  return (

    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white py-1">
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
