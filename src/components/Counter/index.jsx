import { useCallback, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0)

  const handleIncrement = useCallback(() => setCounter(state => state + 1), [])
  const handleDecrement = useCallback(() => setCounter(state => state - 1), [])

  return (
    <div>
      <h2>{counter}</h2>
      
      <button onClick={handleIncrement}>Aumentar</button>
      <button onClick={handleDecrement}>Diminuir</button>
    </div>
  )
}

export default Counter;