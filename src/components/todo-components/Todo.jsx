import React from "react";
import css from "./Todo.module.css"


class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            todoValue: props.text,
        }
        this.sumbit = this.sumbit.bind(this)
    }
    sumbit(e) {
        e.preventDefault();
        this.props.onEdit(this.props.id, this.state.todoValue)
        this.setState({isEdit: false})
        
    };

    handleChenge(e) {
        this.setState({ todoValue: e.target.value })
    }
    render() {
        return (
            <div className={css.wrapper}>
                {
                    this.state.isEdit
                        ? <form onSubmit={this.sumbit} className="input-group">
                            <input
                                value={this.state.todoValue}
                                onChange={(e) =>this.handleChenge(e)}
                                type="text"
                                class="form-control"
                                placeholder="Enter your todo" />
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                        : <lebel className={css.todoCheck} >
                            <input
                                type="checkbox"
                                checked={this.props.status}
                                onChange={() => this.props.changeStatus(this.props.id)}
                            />
                            <p className={this.props.status ? css.done : ""}>{this.props.text}</p>
                        </lebel>
                }




                <div className={css.buttons}>
                    <button
                        onClick={() => this.setState({ isEdit: !this.state.isEdit })}
                        type="button"
                        className="btn btn-success"
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.props.onDelete(this.props.id)}
                    >
                        Del
                    </button>
                </div>
            </div>
        )
    }
}


export default Todo;














//{
    //     return (
//         <div className={css.wrapper}>
//             <lebel className={css.todoCheck} >
//                 <input
//                 type="checkbox"
//                 checked={props.status}
//                 onChange={() => props.changeStatus(props.text.id)}
//                 />
//                 <p className={props.status}>{props.text}</p>
//             </lebel>

//             <div className={css.buttons}>
//                 <button
//                 type="button"
//                 className="btn btn-success"
//                 >
//                     Edit
//                 </button>
//                 <button
//                 type="button"
//                 className="btn btn-danger"
//                 onClick={() =>props.onDelete(props.id)}
//                 >
//                     Del
//                 </button>
//             </div>
//         </div>
//     )
// }