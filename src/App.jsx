import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [color, setColor] = useState("white")

  return (
    <>
      <button onClick={() => setCount(() => count + 2)}>
        Aumentar 2
      </button>
      <button onClick={() => setCount2(() => count2 + 3)}>
        Aumentar 3
      </button>

      <p>El contador de a 2 va {count}</p>
      <p>El contador de a 3 va {count2}</p>

      <div className="cuadrado" 

        style={{
          backgroundColor: color
        }}
      >
      <button onClick={() => setColor('blue')}>Cambiar a azul</button>
      <button onClick={() => setColor('green')}>Cambiar a verde</button>
      </div>
    </>
  )
}

export default App
