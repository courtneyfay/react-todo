import React, { Component } from 'react';
import TodoModel from '../models/Todo';
import TodoList from '../components/TodoList';

class TodosContainer extends Component {
	constructor() {
		super();
		this.state = {
			todos: []
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		TodoModel.all().then((res) => {
			this.setState ({
				todos: res.todos
			});
		});
	}

	render(){
		return (
			<div className='todos-container'>
				<TodoList
					todos={this.state.todos}
				/>
			</div>
		)
	}
}

export default TodosContainer