import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Task extends Component{
    
    styleCompleted(){
        const{task}= this.props
        return {
            fontSize: '20px',
            color: task.done ? 'gray' : 'black',
            textDecoration: task.done ? 'line-through' : 'none'
        }
    }

    render(){
        const{task} = this.props
        return <div style={this.styleCompleted()}>
        {task.title} - {task.description}
        <input type = "checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
        <button style={style_div} onClick={this.props.deleteTask.bind(this, task.id)}>
            X
        </button>
      </div>
    }

}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const style_div = {
    background: 'red',
    fontSize: '18px',
    borderRadius: '50%',
    border: 'none',
    margin: '5px'
}

export default Task;