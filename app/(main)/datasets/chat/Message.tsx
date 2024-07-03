import { AppContext } from "@/providers/ContextProvider";
import React, { useContext } from "react";

const Message = ({
  message,
}: {
  message?: {
    userMessage: string;
    botMessage: string;
    date: string;
  };
}) => {
  const { currentUser } = useContext(AppContext);
  return (
    <div>

      <div className="flex justify-end mb-4 cursor-pointer">
        <div className="flex max-w-96 lg:max-w-[40%] bg-black text-white rounded-lg p-3 gap-3">
          <p>{message?.userMessage}</p>
        </div>
        <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
          <img
            src={
              currentUser?.profilePicture ||
              "https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
            }
            alt="My Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      <div className="flex mb-4 cursor-pointer">
        <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
          <img
            src="https://placehold.co/200x/000000/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <div className="flex max-w-96 lg:max-w-[40%] bg-white rounded-lg p-3 gap-3">
          <p className="text-gray-700">{message?.botMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
