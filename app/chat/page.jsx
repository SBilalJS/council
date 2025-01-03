"use client";
import { useState } from "react";

const Chatbot = () => {
  // State for messages
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  // Handle sending a message
  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "I’ll get back to you on that!", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <section className="bg-[#E9EFFE] h-screen flex items-center">
      <div className="container bg-white max-w-lg  h-[90%]">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-[#1D4ED8] to-[#1E3A8A] text-white px-6 py-4 rounded-t-lg">
          <h2 className="text-lg font-semibold">Chat with My Council AI</h2>
        </div>

        {/* Chat Messages */}
        <div className="px-6 py-4  space-y-4 h-[84%] rounded-md overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "bot"
                  ? "items-start space-x-4"
                  : "items-end justify-end space-x-4"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-[75%] ${
                  message.sender === "bot"
                    ? "bg-[#E9EFFE] text-black"
                    : "bg-[#1D4ED8] text-white"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        
        </div>
          {/* Chat Input */}
          <div className="bg-gray-100 px-4 py-2 flex items-center gap-4 border-t">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
          />
          <button
            onClick={handleSendMessage}
            className="bg-[#1D4ED8] text-white px-6 py-2 rounded-full hover:bg-[#1E3A8A] transition"
          >
            Send
          </button>
        </div>

        
      </div>
    </section>
  );
};

export default Chatbot;
