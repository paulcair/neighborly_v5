import React, { useEffect, useState } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";

const contractAddress = "0xB2c8A7B59628D8c6c50cD88BC0c9b4Ca800387f9";
const TaskCard = ({ name, details, imageURL }) => (
    <div className="w-full lg:flex m-4">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t-none lg:rounded-t-l lg:rounded-l-lg text-center overflow-hidden"
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>
      <div className="w-full lg:w-130 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white bg-opacity-60 rounded-b-lg lg:rounded-b-none lg:rounded-r-lg p-4 flex flex-col justify-between leading-normal">
        <div className="w-full mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{details}</p>
        </div>
        <div className="flex space-x-2">
          <button
            type="button"
            className="text-white w-28 p-2 bg-green-800 hover:bg-green-900 border border-green-800 hover:border-green-900 rounded-lg cursor-pointer"
          >
            Add Tip
          </button>
          <button
            type="button"
            className="text-white w-56 p-2 bg-gray-500 hover:bg-gray-700 border border-gray-500 hover:border-gray-700 rounded-lg cursor-pointer"
          >
            Upload Proof of Completion
          </button>
        </div>
      </div>
    </div>
  );
  
  

const Tasks = (props) => {
  const { contract } = useContract(contractAddress);
  const { data: taskCount, isLoading: taskCountLoading } = useContractRead(contract, "getTaskCount");
  
  const { data: task3, isLoading: task3Loading } = useContractRead(contract, "getTask", [3]);
  const { data: task2, isLoading: task2Loading } = useContractRead(contract, "getTask", [2]);
  const { data: task4, isLoading: task4Loading } = useContractRead(contract, "getTask", [4]);
//   const { data: task3, isLoading: task3Loading } = useContractRead(contract, "getTask", [3]);


  
//   const [tasks, setTasks] = useState([]);

//   const fetchTask = async (index) => {
//     const { data: task } = await useContractRead(contract, "getTask", [index]);
//     return task;
//   };

//   useEffect(() => {
//     if (!taskCountLoading && taskCount) {
//       const fetchTasks = async () => {
//         const taskPromises = Array.from({ length: taskCount }, (_, i) => fetchTask(i));
//         const fetchedTasks = await Promise.all(taskPromises);
//         setTasks(fetchedTasks);
//       };

//       fetchTasks();
//     }
//   }, [taskCount, taskCountLoading, contract]);




//   const renderTaskCards = () => {
//     return (
//       <TaskCard
//         name={task0[0]}
//         details={task0[1]}
//         imageURL={task0[2]}
//       />
//     );
//   };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        {taskCountLoading ? <p>Loading...</p> : 
        <div>
            <TaskCard
        name={task3[0]}
        details={task3[1]}
        imageURL={task3[2]}
      />
      <TaskCard
        name={task2[0]}
        details={task2[1]}
        imageURL={task2[2]}
      />
      <TaskCard
        name={task4[0]}
        details={task4[1]}
        imageURL={task4[2]}
      />
      </div>

        }
      </div>
    </div>
  );
};

export default Tasks;