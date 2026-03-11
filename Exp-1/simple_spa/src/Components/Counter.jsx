import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" ,border:"2px solid white ",padding:"20px" }}>
      <h1>Counter: <br />{count}</h1>

      <button onClick={() => setCount(count + 1)}>+</button>
      <br />
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;
