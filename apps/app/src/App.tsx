import type { SampleInterface } from "@todo-matrix/api/lib/types/sample.interface";
import type { ReactElement } from "react";
import { useState } from "react";
import "./App.css";
import { Button } from "@todo-matrix/ui/components/Button";

const App = (): ReactElement => {
  const [count, setCount] = useState(0);

  const isSample: SampleInterface = {
    isSample: true,
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={(): void => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more.
      </p>
      <br />
      {isSample.isSample ? "isSample" : "isNotSample"}
      <Button />
    </>
  );
};

export default App;
