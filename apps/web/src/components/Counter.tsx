import { useState, type ReactElement } from "react";
import "./Counter.css";

const Counter = ({
  children,
  count: initialCount,
}: {
  children: JSX.Element;
  count: number;
}): ReactElement => {
  const [count, setCount] = useState(initialCount);
  const add = (): void => setCount(i => i + 1);
  const subtract = (): void => setCount(i => i - 1);

  return (
    <>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div className="counter-message">{children}</div>
    </>
  );
};

export default Counter;
