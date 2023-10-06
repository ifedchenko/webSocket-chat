import React, { useState } from "react";
import css from "./ChatForm.module.css";

const ChatForm = ({ addMessage }) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = ({ target: { value } }) => {
    const messageValue = value.trim();
    if (messageValue === "") {
      return;
    }
    setMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage(message);
    setMessage("");
  };

  return (
    <form className={css.message} onSubmit={handleSubmit}>
      <input
        className={css.messageInput}
        type="text"
        placeholder="Enter your message"
        value={message}
        onChange={handleMessageChange}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatForm;
