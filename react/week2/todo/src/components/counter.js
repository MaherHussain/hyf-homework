import React, { useState, useEffect } from "react";
const Counter = () => {
     const [count, setCount] = useState(0);
     let t;
  useEffect(() => {
    t = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      if (t) {
        clearInterval(t);
      }
    };
  }, [count]);
    return <div>you have been {count} sec on this website </div>;
} 
export default Counter
