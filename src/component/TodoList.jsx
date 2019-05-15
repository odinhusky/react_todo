import React from 'react';
import TodoItem from './TodoItem.jsx';

class TodoList extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        todoArray : this.props.todoArray
      }
    }
    
    render(){
      console.table("todoList state", this.state.todoArray);
      let todoArray = this.state.todoArray;
      const todoListElement = todoArray.map((todoArrayItem) => (
        <li key={todoArrayItem.id}>
          <TodoItem 
            index={todoArrayItem.id} 
            done={todoArrayItem.done} 
            cont={todoArrayItem.cont} 
            time={todoArrayItem.time} 
            top={todoArrayItem.top} 
            sendEdit={this.props.sendEdit} 
            delete={this.props.delete} 
            chktoggle={this.props.chktoggle} 
            clickTop={this.props.clickTop}
          />
        </li>
      ));
      
      return (
        <div>
          <ul>
            { todoListElement }
          </ul>
        </div>
      );
    }
  }

export default TodoList;
