"use client";
import { MessageSquare } from "lucide-react";
import { useState } from "react";
import sendMessage from "../utils";

const ChatbotArea = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    setResponse(null);
    try {
      const output = await sendMessage(message);
      setResponse(output.message.text);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="group relative w-full max-w-2xl mx-auto">
      {/* Shadow/Background */}
      <div
        className="absolute w-full h-full bg-black border-2 border-black translate-y-2 translate-x-2"
      ></div>

      {/* Main Component */}
      <div
        className="relative bg-white border-4 border-black p-6 "
      >
        <div className="flex items-center space-x-2 mb-4">
          <MessageSquare className="w-6 h-6" />
          <h2 className="text-xl font-mono">AI Assistant</h2>
        </div>
        <div className="h-[300px] bg-gray-50 border border-black mb-4">
          {loading ? (
            <div className="p-4 text-center items-center text-lg font-mono text-gray-600">Analyzing...</div>
          ) : (
            response && <div className="p-4 text-wrap">{JSON.stringify(response, null, 2)}</div>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-3 border border-black focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          />
          {/* Send Button */}
          <button
            className="group relative"
            onClick={handleSend}
            disabled={loading} // Disable button while loading
          >
            <div
              className={`absolute h-12 px-6 border-2 border-black translate-y-1 translate-x-1 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#1b2631]"
                } flex items-center justify-center`}
            >
              <span className="text-lg font-semibold text-[#fff3b3]">
                {loading ? "Sending..." : "Send"}
              </span>
            </div>
            <div
              className={`relative h-12 px-6 border-2 border-black ${loading ? "bg-gray-200 cursor-not-allowed" : "bg-[#fff3b3]"
                } flex items-center justify-center`}
            >
              <span className={`text-lg font-semibold ${loading ? "text-gray-600" : "text-black"}`}>
                {loading ? "Sending..." : "Send"}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotArea;
