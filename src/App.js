import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import CreateTodo from './components/create-todo/CreateTodo.jsx';
import Todo from './components/todo-components/Todo';







class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [
        // { id: 1, text: "Выполнить ДЗ", status: false },
        // { id: 2, text: "Купить сахар", status: true },
        // { id: 3, text: "Купить соль", status: false },

      ],
      isLoading: true,
    }
    this.CreateTodo = this.CreateTodo.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }
//================IMPORTANT======================
  componentDidMount(){
     console.log("Did mount");
     const data = JSON.parse(localStorage.getItem("todo")) || [];
     this.setState({todolist: data})


     setTimeout(() => {
       this.setState({isLoading: false})
     },3000)
  }

  componentDidUpdate(){
    console.log("Did update");
    localStorage.setItem("todo", JSON.stringify(this.state.todolist))
  }

  componentWillUnmount(){
    console.log("Will unmount");
  }


  CreateTodo(str) {
    this.setState({
      todolist: [...this.state.todolist,
      {
        id: Math.random(),
        text: str,
        status: false
      }]
    })
  }

  changeStatus(id) {


    const newArr = this.state.todolist.map((item) => {
      if (item.id === id) {
        const newObj = { ...item, status: !item.status }
        return newObj
      }
      return item
    });
    this.setState({ todolist: newArr });

  }

  onDelete(id) {
    const newArr = this.state.todolist.filter((todo) => todo.id !== id);
    this.setState({ todolist: newArr })
  }

  onEdit(id,newtext) {
    const newArr = this.state.todolist.map((item) => {
      if (item.id === id) {
        const newObj = { ...item, text:newtext}
        return newObj
      }
      return item
    });
    this.setState({ todolist: newArr });
  }


  render() {
    if(this.state.isLoading) {
      return <div className='loader'>
        <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw340"/>
      </div>
      
    }
    return (

      <div className="App">
        <div className='todo-wrapper'>
          <Header count={this.state.todolist.length} />
          <div className='p-3'>
            <CreateTodo CreateTodo={this.CreateTodo} />

            <div className='mt-2 todo-list'>
              {
                this.state.todolist.map((todo) => <Todo
                  key={todo.id}
                  onEdit={this.onEdit}
                  onDelete={this.onDelete}
                  changeStatus={this.changeStatus}
                  id={todo.id}
                  text={todo.text}
                  status={todo.status} />)
              }

            </div>
          </div>
        </div>
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <div className='todo-wrapper'>
//         <Header count={4}/>
//         <div className='p-3'>
//           <CreateTodo/>

//           <div className='mt-2 todo-list'>
//             {
//               [1,2,3].map((todo) => <Todo  text={todo} />)
//             }

//           </div>
//           </div>
//       </div>
//     </div>
//   );e
// }

export default App;
