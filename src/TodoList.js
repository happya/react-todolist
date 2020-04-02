import React, { Component, Fragment } from "react";
import axios from 'axios'
import TodoItem from './TodoItem'
import "./style.css"
class TodoList extends Component{
	constructor(props) {
		super(props);
		// when the state or props is changed
		// the render function will re-execute
		this.state = {
			inputValue: '',
			list: []
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleItemDelete = this.handleItemDelete.bind(this)
	}
	render() {
		return (
			<Fragment>
				<div>
					<input
						className="input"
						value={this.state.inputValue}
						onChange={this.handleInputChange}
						ref={(input) => {this.input = input}}
					/>
					<button
						onClick={this.handleBtnClick}
					>submit</button>
				</div>
				<ul>
					{this.getTodoItem()}
				</ul>
			</Fragment>
		)
	}
	componentDidMount() {
		axios.get('/api/todolist').then(() => {
			alert('axios success')
		}).catch(() => {
			alert('axios failed')
		})
	}
	getTodoItem() {
		return this.state.list.map((item, index) => {
			return (
				<TodoItem
					content={item}
					index={index}
					key={index}
					deleteItem={this.handleItemDelete}
				/>
			)
		})
	}

	// now it is asynchornious
	// needs to first save the variable
	handleInputChange(e){
		// e.target: dom node
		const value = this.input.value
		this.setState(() => ({
			inputValue: value
		}))
	}
	handleBtnClick(){
		this.setState((prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}))
	}
	handleItemDelete(index){
		this.setState((prevState) => {
			const list = [...prevState.list]
			list.splice(index, 1)
			return {list}
		})
	}
}

export default TodoList;