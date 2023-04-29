import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { Navbar, Welcome, Footer, CreateTask, Tasks } from './components';

export default function Home() {

  const contractAddress = "0xB2c8A7B59628D8c6c50cD88BC0c9b4Ca800387f9";

  const { contract } = useContract(contractAddress);
  const { data: task, isLoading: taskLoading } = useContractRead(contract, "getTask", [0]);
  const { data: taskCount, isLoading: taskCountLoading } = useContractRead(contract, "getTaskCount");


  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        < Navbar />
        < Welcome />
        < CreateTask />
        < Tasks />
        < Footer />
      </div>      
    </div>
  );
}
