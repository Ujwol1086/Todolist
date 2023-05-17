import React from 'react'
import './App.css';
import TodoItem from './Components/TodoItem'
import TodoData from './Components/TodoData'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todo: TodoData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id){
    this.setState(prevState => {
      const updateTodo = prevState.todo.map(todos => {
        if(todos.id === id){
          todos.completed = !todos.completed
          console.log("Changing completed")
        }
          return todos
      })
      return {
        todo: updateTodo
      }
    })
  }
  render(){
  const TodoComponent = this.state.todo.map(list => <TodoItem key={(list.id)} list={(list)} handleChange = {(this.handleChange)} />)
  return (
      <>
        <h1>To Do List</h1>
        <div className='list'>
          {TodoComponent}
        </div>
      </>
    );
  }
}

export default App;
