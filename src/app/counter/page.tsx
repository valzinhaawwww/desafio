"use client"
import { useState } from "react"
import styles from "./page.module.css"
import { count } from "console";

export default function ContainerPage() {
  const [count, setCount] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  return (
    <div>
      {count > 0 ? (
        <p className={styles.pink}>{count}</p>
      ) : (
        <p className={styles.red}>{count}</p>
      )}
      <button onClick={() => setCount(count + 1)}>somar</button>
      <button onClick={() => setCount(count - 1)}>subtrair</button>
      <input
        type="number"
        value={number1}
        onChange={(event) => setNumber1(parseInt(event.target.value))}
      />
      <input
        type="number"
        value={number2}
        onChange={(event) => setNumber2(parseInt(event.target.value))}
      />
    </div>
  );
}
