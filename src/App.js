import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo'

function App() {
  let [todos, setTodos] = React.useState([
    {id: 1, complete: false, title: "Buy bread"},
    {id: 2, complete: true, title: "Buy oil"},
    {id: 3, complete: false, title: "Buy water"}
  ])

  function toggleTodo(id) {
    setTodos( 
      todos.map(todo => {
        if (todo.id === id)
          todo.complete = !todo.complete

        return todo
      })
    )
  }  

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([
      {
        title,
        id: Date.now(),
        completed: false 
      }
    ]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>React tutorial</h1>
        <AddTodo onCreate={addTodo} />

        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>No todos!</p>}
      </div>
    </Context.Provider>
  )
}

export default App; 