import React from "react";

const Input = (props, ref) => {
  return <input ref={ref} placeholder='great bawa g' type='text' onKeyUp={props.onKeyUp}  />;
};

const forwardedInput = React.forwardRef(Input);
export default forwardedInput;
