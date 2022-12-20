import { useState } from "react";

const EventTest = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)} data-testid="event1">
        Click
      </button>
    </>
  );
};

export default EventTest;
