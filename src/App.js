import React from 'react';
import './App.css';
import tasks from './sample/tasks.json';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//Componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm'
import Posts from './components/Post'

class App extends React.Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({ tasks: newTasks })
  }

  checkDone = id => {
    const newTask = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    })
    this.setState({ tasks: newTask })
  }

  render() {
    return <div>
      <Router>

        <Link to="/">Home</Link>
        <br></br>
        <Link to="/posts">Posts</Link>
        <Route exact path="/" render={() => {
          return <div>
            <TaskForm addTask={this.addTask} />
            <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone} />
          </div>

        }} />

        <Route path="/posts" component={Posts} />

      </Router>
    </div>
  }
}

export default App;