import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

const listItems = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      stateItems: listItems,
      task: ''
    }

  }

  handleChanges = event => {
    console.log(event.target.value);
    this.setState({
      task: {
        ...this.state.task,
        task: event.target.value
      }
    })
  }


  addItem = event => {
    event.preventDefault();
    this.setState({
      stateItems: [...this.state.stateItems, this.state.task],
      task: ''
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>To-Do List!</h2>
        <TodoList items={this.state.stateItems} />
        <TodoForm work={this.addItem} clicker={this.handleChanges} />
      </div>
    );
  }
}

export default App;
