import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState<string[]>([])
  const [todoValue, setTodoValue] = useState('')

  const addTodo = () => {
    setTodo([...todo, todoValue])
    setTodoValue('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value)
  }

  return (
    <div>
      <h1>todo list</h1>

      <div>
        <label>Enter a new item:</label>
        <input
          type="text"
          value={todoValue}
          onChange={(event) => handleChange(event)}
        />
        <button onClick={() => addTodo()}>Add item</button>
      </div>

      <ul>
        {todo.map((val, key) => <li key={key}>{val}</li>)}
      </ul>
    </div>
  )
}

export default App
