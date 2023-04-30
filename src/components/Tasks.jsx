import React from "react";

const TaskCard = ({ name, details, imageURL }) => (
         <div className="w-full lg:flex m-4">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${imageURL})`}}
            >
            </div>
         <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="w-full mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{details}</p>
                </div>
                <button 
                    type="button"
                    className="text-white mt-2 border-[1px] p-2 border-[#50A060] bg-[#50A060] hover:bg-[#3B744B] hover:border-[#3B744B] rounded-full cursor-pointer"
                >
                Add Tip
                </button>
            </div>
        </div>
);


const Tasks = () => (
    <div className="flex w-full justify-center items-center">
           <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
            <TaskCard
                name = "Test"
                details = "test text details lets make this longer and longer and longer and longer and longer and longer"
                imageURL = "https://www.cityworks.com/wp-content/uploads/2020/01/pot-hole-blog.gif"
            />
            <TaskCard
                name = "Test"
                details = "test text details let's make this one longer and longer and longer and longer and longer and longer"
                imageURL = "https://www.cityworks.com/wp-content/uploads/2020/01/pot-hole-blog.gif"
            />
        </div>
    </div>
);

export default Tasks;