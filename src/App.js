import TodoList from './Todo/TodoList'

function App() {

  const todos = [
    {id: 1, complete: false, title: "Buy bread"},
    {id: 2, complete: false, title: "Buy oil"},
    {id: 3, complete: false, title: "Buy water"}
  ]

  return (
    <div className='wrapper'>
      <h1>React tutorial</h1>

      <TodoList todos={todos} />
    </div>
  )
}

export default App; 