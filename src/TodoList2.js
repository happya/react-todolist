import React, { Component, Fragment } from "react";
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import TodoItem from './TodoItem'
import "./style.css"
class TodoList2 extends Component{
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
				<div style={{marginTop: 10, marginLeft: 10}}>
					<Input
						className="input"
            style={{width: 300, marginRight: 10}}
						value={this.state.inputValue}
						// ref={(input) => {this.input = input}}
						onChange={this.handleInputChange}
					/>
					<Button
            type='primary'
						onClick={this.handleBtnClick}
					>Submit</Button>
				</div>
				<List itemLayout="vertical" style={{marginTop: 10, marginLeft: 10}}>
          <List.Item>
            {this.getTodoItem()}
          </List.Item>
					
				</List>
			</Fragment>
		)
	}
	// componentDidMount() {
	// 	axios.get('/api/todolist').then(() => {
	// 		alert('axios success')
	// 	}).catch(() => {
	// 		alert('axios failed')
	// 	})
	// }
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
    // const value = this.input.value
    const value = e.target.value
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

export default TodoList2;