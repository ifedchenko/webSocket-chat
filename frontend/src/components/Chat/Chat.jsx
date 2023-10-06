import React from "react";
import css from "./Chat.module.css";

const Chat = ({ items }) => {
  const elements = items.map(({ id, type, message }) => {
    const className = type === "you" ? css.youMessage : css.userMessage;
    return (
      <p key={id} className={className}>
        {message}
      </p>
    );
  });

  return <div className={css.messages}>{elements}</div>;
};

export default Chat;

Chat.defaultProps = {
  items: [],
};
