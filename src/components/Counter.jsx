import { useEffect, useState } from "react";

export default function Counter({ target, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    const duration = 3000; // ms
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, stepTime);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <div className="fact-box">
      <h3>{count}+</h3>
      <p>{label}</p>
    </div>
  );
}
