"use client";

import { useState } from "react";
import { Bot, X } from "lucide-react";
import api from "../api/api";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");

  const sendMessage = async () => {
    if (!msg.trim()) return;

    const userMessage = { role: "user", content: msg };
    setMessages((prev) => [...prev, userMessage]);
    setMsg("");

    try {
      const response = await api.post("/api/chatbot", { query: userMessage.content });
      const data = response.data;
      let botContent = data.reply || data.answer;
      if (!botContent) {
        botContent = `${JSON.stringify(data)}`;
      }
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: botContent },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Error: " + (err.response?.data?.message || err.message) },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b">
            <h3 className="font-semibold text-black flex items-center gap-2">
              <Bot size={18} /> Chatbot
            </h3>
            <button onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[75%] ${
                  m.role === "user"
                    ? "bg-[#358289] text-white ml-auto"
                    : "bg-gray-200 text-black"
                }`}
              >
                {m.content}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center gap-2">
            <textarea
              rows={1}
              className="flex-1 border rounded-lg text-black px-3 py-2 text-sm resize-none focus:outline-none"
              placeholder="Type a question..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="bg-blue-500 text-white px-3 py-2 rounded-lg"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#358289] text-white p-4 rounded-full shadow-lg"
        >
          <Bot size={24} />
        </button>
      )}
    </div>
  );
}
