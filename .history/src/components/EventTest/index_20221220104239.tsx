import { useState } from "react";

const EventTest = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div data-testid="text1">{count}</div>
      <button onClick={() => setCount(count + 1)} data-testid="event1" disabled>
        Click
      </button>
    </>
  );
};

export default EventTest;
