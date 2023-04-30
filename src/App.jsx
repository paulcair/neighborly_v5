import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { Navbar, Welcome, Footer, CreateTask, Tasks } from './components';

export default function Home() {

  const contractAddress = "0xB2c8A7B59628D8c6c50cD88BC0c9b4Ca800387f9";

  const { contract } = useContract(contractAddress);

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        < Navbar />
        < Welcome />
        < CreateTask contract={contract} />
        < Tasks />
        < Footer />
      </div>      
    </div>
  );
}
