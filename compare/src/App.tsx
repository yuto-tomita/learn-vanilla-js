import { useState } from 'react'

interface Todo {
  isEditMode: boolean
  todoValue: string
}

function App() {
  const [todo, setTodo] = useState<Todo[]>([])
  const [todoValue, setTodoValue] = useState('')

  const addTodo = () => {
    setTodo([...todo, {isEditMode: false, todoValue}])
    setTodoValue('')
  }

  const deleteTodo = (key: number) => {
    const filterTodo = todo.filter((_, num) => num !== key)
    setTodo(filterTodo)
  }

  const changeMode = (key: number) => {
    const updateMode = todo.map((val, index) => {
      if (index === key) {
        return {...val, isEditMode: true}
      } else {
        return {...val}
      }
    })

    setTodo(updateMode)
  }

  const updateTodo = (key: number) => {
    const updateValueTodoList = todo.map((val, index) => {
      if (index === key) {
        return {
          isEditMode: false,
          todoValue
        } 
      } else {
        return {...val}
      }
    })
    setTodo(updateValueTodoList)
  }

  const getTodoOrUpdateForm = () => {
    return todo.map((val, key) => {
      if (val.isEditMode) {
        return (
          <li>
            <input
              key={key}
              value={val.todoValue}
              onChange={(event) => setTodoValue(event.target.value)}
            />
            <button onClick={() => updateTodo(key)}>
              update
            </button>
          </li>
        )
      } else {
        return (
          <li
            key={key}
            onClick={() => changeMode(key)}
          >
            {val.todoValue}
            <button onClick={() => deleteTodo(key)}>
              delete
            </button>
          </li>
        )
      }
    })
  }


  return (
    <div>
      <h1>todo list</h1>

      <div>
        <label>Enter a new item:</label>
        <input
          type="text"
          value={todoValue}
          onChange={(event) => setTodoValue(event.target.value)}
        />
        <button onClick={() => addTodo()}>Add item</button>
      </div>

      <ul>
        {getTodoOrUpdateForm()}
      </ul>
    </div>
  )
}

export default App
