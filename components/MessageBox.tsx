import React from "react";

interface MessageBubbleProps {
  text: string;
  sender?: "me" | "them"; // "me" for sent, "them" for received
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ text, sender = "them" }) => {

  return (
    <div className={`flex w-full my-5 ${sender === "me" ? "justify-end" : "justify-start"}`}>
      <div
        className={`relative max-w-[75%] px-4 py-2 text-xs rounded-2xl shadow-md 
          ${sender === "me" ? "bg-blue-500 text-white rounded-br-none" : "bg-gray-200 text-gray-900 rounded-bl-none"}
        `}
      >
        {text}

        {/* Tail / Swoosh effect */}
        <div
          className={`absolute bottom-0 w-3 h-3 
            ${sender === "me" ? "right-0 -mr-1 bg-blue-500 rotate-45 rounded-br-md" : "left-0 -ml-1 bg-gray-200 rotate-45 rounded-bl-md"}
          `}
        />
      </div>
    </div>
  );
};

export default MessageBubble;
