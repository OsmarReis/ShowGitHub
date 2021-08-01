import React, { useState } from "react";

export function Form(props: any) {
  const [input, setInput] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    props.onSubmit(input);
    setInput("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <form id="userForm" onSubmit={handleSubmit}>
      <label htmlFor="GitUser">Username:</label>
      <input
        id="GitUser"
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type your github username"
      />

      <button>Send</button>
    </form>
  );
}
