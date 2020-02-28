import React, { Component, Fragment } from "react";

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }

    }
    render() {
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button>submit</button>
                </div>
                <ul>
                    <li>React</li>
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
}

export default TodoList;