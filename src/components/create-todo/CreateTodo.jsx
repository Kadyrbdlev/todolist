 import React from "react";
 
 class CreateTodo extends React.Component{
     constructor(props){
         super(props);
         this.state = {
             inputValue:"",
         }
         this.handleChange = this.handleChange.bind(this)
         this.sumbit = this.sumbit.bind(this)
     }
     handleChange(e) {
         this.setState({ inputValue: e.target.value})
     }

     sumbit(e){
         e.preventDefault();
         this.props.CreateTodo(this.state.inputValue);
         this.setState({inputValue: "" })
     }

     render(){
        return(
            <form onSubmit={this.sumbit} className="input-group">
                 <input 
                 value={this.state.inputValue}
                 onChange={this.handleChange}
                  type="text"
                  class="form-control" 
                  placeholder="Enter your todo"/> 
                 <button type="submit" class="btn btn-primary">Submit</button> 
            </form>
        )
     }
 }
 
 
 //  первый КОД
//  function CreateTodo(){

//     function sumbit(e){
//         e.preventDefault();
//         console.log(e)
//     }


//     return(
//         <form onSubmit={sumbit} className="input-group">
//              <input type="text" class="form-control" placeholder="Enter your todo"/> 
//              <button type="submit" class="btn btn-primary">Submit</button> 
//         </form>
//     )
// }
export default CreateTodo;