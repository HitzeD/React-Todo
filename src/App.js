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
      task: {
        task: '',
        id: '',
        completed: '',
      }
    }

  }
  
  handleChanges = event => {
    this.setState({
      task: {
        ...this.state.task,
        task: event.target.value,
        id: Date.now(),
        completed: false,
      }
    })
    
    console.log(event.target);
  }

  removeItems = () => {
    this.setState({
      stateItems: this.state.stateItems.filter(item => !item.completed)
    });
  }

  taskClick = id => {
    console.log(this.state.completed);
    console.log(id);
    const newList = this.state.stateItems.map(item => {
      if(item.id === id){
        item.completed = !item.completed;
        return item;
      } else {
        return item;
      }
    })
    this.setState({ stateitems: newList });
    console.log(newList)
    this.setState({
      completed: !this.state.completed,
    });
  }


  addItem = event => {
    event.preventDefault();
    this.setState({
      stateItems: [...this.state.stateItems, this.state.task],
      task: {
        task: '',
      }
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>To-Do List!</h2>
        <TodoList items={this.state.stateItems} taskClick={this.taskClick} />
        <TodoForm work={this.addItem} clicker={this.handleChanges} removeItems={this.removeItems} task={this.state.task} />
      </div>
    );
  }
}

export default App;
