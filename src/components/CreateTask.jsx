import React from "react";
import { Web3Button, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";


const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    // onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent border-none text-sm white-glassmorphism text-white font-light" 
  />
);

const TaskSubmitButton = ({ contract }) => {
  return (
    <Web3Button
      contractAddress="0xB2c8A7B59628D8c6c50cD88BC0c9b4Ca800387f9"
      action={() => contract.call("createTask", "name", "description", "imageURL")}
    >
      Submit Task
    </Web3Button>
  );
};

const CreateTask = (props) => {
  const address = useAddress();
  const { contract } = props;

  return (
  <div className="flex w-full justify-center items-center">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2">
         Create a Task and start earning
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          Show your community what you're working on and start earning tips from your neighbors. 
          Once you've completed the Task, simply upload a photo of the completed task and the funds 
          accumulated from tips will be instantly released to you.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
       
        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center white-glassmorphism">
          <h3 className="mt-2 text-white text-lg">Create New Task</h3>
          <p className="mt-1 text-white text-center text-sm md:w-9/12">Fill in the details below</p>
            <Input placeholder="Name" name="name" type="text"  />
            <Input placeholder="Description" name="description" type="text"/>
            <Input placeholder="Image URL" name="imageURL" type="text"  />  
            { address ? (
              <TaskSubmitButton contract={contract} />
            ) : (
              <div>Please connect your wallet.</div>
            )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default CreateTask;