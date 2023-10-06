import React, { useState } from "react";
import css from "./ChatForm.module.css";

const ChatForm = ({ onSubmit }) => {
  const [state, setState] = useState({ message: "" });

  const handleMessageChange = ({ target }) => {
    const { name, value } = target;
    if (value.trim() !== "") {
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ message: "" });
  };

  return (
    <form className={css.message} onSubmit={handleSubmit}>
      <input
        className={css.messageInput}
        type="text"
        placeholder="Enter your message"
        value={state.message}
        name="message"
        onChange={handleMessageChange}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatForm;
