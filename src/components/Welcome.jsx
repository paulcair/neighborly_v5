import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

// // import { TransactionContext } from "../context/TransactionContext";
// // import { shortenAddress } from "../utils/shortenAddress";
// import { Loader } from "./";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-white-400 text-sm font-light text-white";

// const Input = ({ placeholder, name, type, value, handleChange }) => (
//   <input
//     placeholder={placeholder}
//     type={type}
//     step="0.0001"
//     value={value}
//     onChange={(e) => handleChange(e, name)}
//     className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
//   />
// );

const Welcome = () => {
//   const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  // const handleSubmit = (e) => {
  //   const { addressTo, amount, keyword, message } = formData;

  //   e.preventDefault();

  //   if (!addressTo || !amount || !keyword || !message) return;

  //   sendTransaction();
  // };

  return (

    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <img src="../../images/earth.png" alt="" className="w-full max-w-1/2 md:w-3/4"/>
      </div>
      
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-7xl sm:text-5xl text-white py-1">
            Think Global <br /> Fund Local
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Introducing a new model for funding projects in your neighborhood. Secured with smart contracts.
          </p>
        </div>
      </div>  
    </div>


  );
};

export default Welcome;
