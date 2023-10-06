import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Chat from "./components/Chat/Chat";
import ChatForm from "./components/ChatForm/ChatForm";
import SignInChatForm from "./components/SignInChatForm/SignInChatForm";
import "./App.css";

const socket = io.connect("http://localhost:3001");

function App() {
  const [nickname, setNickname] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("chat-message", (message) => {
      setMessages((prevMessages) => {
        const newMessage = {
          id: nanoid(),
          type: "user",
          message: message.message,
        };
        return [newMessage, ...prevMessages];
      });
    });
  }, []);

  const addNickname = (name) => {
    setNickname(name);
  };

  // const addMessage = (message) => {
  //   setMessages([message, ...messages]);
  // };

  const addMessage = (message) => {
    setMessages((prevMessages) => {
      const newMessage = {
        id: nanoid(),
        type: "you",
        message: message.message,
      };
      return [newMessage, ...prevMessages];
    });
    socket.emit("chat-message", message);
  };

  return (
    <div className="App">
      {!nickname && <SignInChatForm onSubmit={addNickname} />}
      {nickname && (
        <div>
          <ChatForm onSubmit={addMessage} />
          <Chat items={messages} />
        </div>
      )}
    </div>
  );
}

export default App;
