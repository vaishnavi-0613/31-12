import React, { useState, lazy, Suspense } from "react";

/*
  Lazy load the heavy component
*/
const HeavyComponent = lazy(() => import("./components/HeavyComponent"));

export default function App() {
  const [count, setCount] = useState(0);

  console.log("🔄 Parent rendered");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React.memo & Lazy Loading Demo</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment Counter: {count}
      </button>

      <hr />

      <Suspense fallback={<p>Loading Heavy Component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
