// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Deployed Goerli Testnet Contract Address: 0xB2c8A7B59628D8c6c50cD88BC0c9b4Ca800387f9

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TaskContract {
    struct Task {
        string name;
        string description;
        string imageURL;
        address payable creator;
        string completionProofURL;
        bool completed;
        uint256 tips;
    }

    uint256 private taskCount;
    mapping(uint256 => Task) private tasks;
    IERC20 private token;

    event TaskCreated(uint256 indexed taskId, string name, string description, string imageURL, address indexed creator);
    event TaskCompleted(uint256 indexed taskId, string completionProofURL, address indexed creator);
    event TipAdded(uint256 indexed taskId, address indexed tipper, uint256 amount);

    constructor(IERC20 _token) {
        token = _token;
        taskCount = 0;
    }

    function createTask(string calldata name, string calldata description, string calldata imageURL) external {
        tasks[taskCount] = Task({
            name: name,
            description: description,
            imageURL: imageURL,
            creator: payable(msg.sender),
            completionProofURL: "",
            completed: false,
            tips: 0
        });

        emit TaskCreated(taskCount, name, description, imageURL, msg.sender);
        taskCount++;
    }

    function tipTask(uint256 taskId, uint256 amount) external {
        require(tasks[taskId].creator != address(0), "Task does not exist");
        require(tasks[taskId].completed == false, "Task already completed");

        token.transferFrom(msg.sender, address(this), amount);
        tasks[taskId].tips += amount;

        emit TipAdded(taskId, msg.sender, amount);
    }

    function completeTask(uint256 taskId, string calldata completionProofURL) external {
        require(tasks[taskId].creator == msg.sender, "Only the creator can complete the task");
        require(tasks[taskId].completed == false, "Task already completed");

        tasks[taskId].completed = true;
        tasks[taskId].completionProofURL = completionProofURL;

        token.transfer(tasks[taskId].creator, tasks[taskId].tips);
        emit TaskCompleted(taskId, completionProofURL, msg.sender);
    }

    function getTask(uint256 taskId) external view returns (Task memory) {
        return tasks[taskId];
    }

    function getTaskCount() external view returns (uint256) {
        return taskCount;
    }
}
