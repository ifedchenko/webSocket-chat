import { useState } from "react";
import css from "./SignInChatForm.module.css";

const SignInChatForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ name: "" });
    e.target.reset();
  };

  return (
    <form className={css.email} onSubmit={handleSubmit}>
      <input
        className={css.emailInput}
        type="text"
        placeholder="Enter your name"
        value={state.name}
        name="name"
        onChange={handleChange}
      />
      <button type="submit">Join</button>
    </form>
  );
};

export default SignInChatForm;
