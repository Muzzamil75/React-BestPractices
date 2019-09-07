import React from "react";

export const InputCommp = state => {
  let inputRef = null;
  const onClick = () => {
    inputRef.focus();
  };
  return (
    <>
      <input
        type="submit"
        value="focus on Email field"
        placeholder="i am Nested field"
        onClick={onClick}
      />

      <input
        type="text"
        placeholder="Email"
        ref={input => (inputRef = input)}
      />
    </>
  );
};
