import React from "react";
const Child = ({ value, handleIncrement, handleDecrement }) => {
  return (
    <div>
      <h1>count is :{value}</h1>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};
function ChildToParent() {
  const [count, setCount] = React.useState(0);
  const handleChange = (value) => {
    setCount(count + value);
  };
  return (
    <>
      <h1>Child to parent</h1>
      <Child
        value={count}
        handleIncrement={() => handleChange(+1)}
        handleDecrement={() => handleChange(-1)}
      />
    </>
  );
}

export default ChildToParent;
