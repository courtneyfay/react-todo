import React, { Component } from 'react';
import TodoModel from '../models/Todo';
import TodoList from '../components/TodoList';
import CreateTodoForm from '../components/CreateTodoForm';

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

	createTodo(newBody) {
		let newTodo = {
			body: newBody,
			completed: false
		};
		TodoModel.create(newTodo).then((res) => {
			console.log('created todo', res);
			let todos = this.state.todos;
			let newTodos = todos.push(res);
			this.setState({newTodos});
		});
	}

	deleteTodo(todo) {
		console.log('deleting todo', todo);
		TodoModel.delete(todo).then((res) => {
			let todos = this.state.todos.filter(function(todo) {
				return todo._id !== res._id;
			});
			this.setState({todos});
		});
	}

	updateTodo(todo, id) {
		TodoModel.update(todo, id).then((res) => {
			let todos = this.state.todos;

			for (let i = 0; i < todos.length; i++) {
				if (todos[i]._id === res._id) {
					console.log('this is the todo being updated');
					console.log(todos[i].body);
					console.log('this is the res');
					console.log(res.body);
					todos[i] = {
						body: res.body,
						completed: false,
						_id: res._id
					};
				}
			}
			console.log(todos);
			this.setState({todos});
		});
	}

	render(){
		return (
			<div className='todos-container'>
				<CreateTodoForm 
					createTodo={this.createTodo.bind(this)} />
				<TodoList
					todos={this.state.todos}
					onDeleteTodo={this.deleteTodo.bind(this)} 
					onUpdateTodo={this.updateTodo.bind(this)} />
			</div>
		)
	}
}

export default TodosContainer