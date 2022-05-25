import React from "react";

const Welcome = ({ name, children, onClick }) => {
  return (
    <>
      {name ? (
        <h1 onClick={() => onClick()}>Hello, {name}!</h1>
      ) : (
        <h1>Hello, Stranger!</h1>
      )}
      {children}
    </>
  );
};

export default Welcome;
