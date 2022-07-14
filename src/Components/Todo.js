import React from 'react';

class Todo extends React.Component {

  constructor(props) {
    super(props)
    console.log(this.props.todos);
  }
  
  render() { 
    return (
      <>
        <div key={this.props.todos.id}>
          <div className={this.props.todos.complete ? 'text' : ''} onClick={() => this.props.stateTodo(this.props.todos.id)}>
              {this.props.todos.id}
            
          </div>
          <button onClick={() => this.props.delTodo(this.props.todos.id)}>
            x 
          </button>
          
        </div>
      </>
    );
  }
}
 
export default Todo;