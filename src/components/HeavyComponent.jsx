import React from "react";

/*
  This component simulates a heavy UI section.
  Wrapped with React.memo to prevent unnecessary re-renders.
*/

function HeavyComponent() {
  console.log("🔥 HeavyComponent rendered");

  return (
    <div style={{ padding: "20px", border: "2px solid black" }}>
      <h2>Heavy Component</h2>
      <p>This is an expensive UI section.</p>
    </div>
  );
}

export default React.memo(HeavyComponent);
