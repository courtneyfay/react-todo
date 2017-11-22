import React, { Component } from 'react';
import EditTodoForm from './EditTodoForm';

class Todo extends Component {
	render() {
		return (
			<div>
				<p data-todos-index={this.props.todo._id}>
					<span>{this.props.todo.body}</span>
					<span
						className="deleteButton"
						onClick={() => this.props.onDeleteTodo(this.props.todo)}>
							(X)
					</span>
				</p>
				<EditTodoForm 
					todo={this.props.todo}
					onUpdateTodo={this.props.onUpdateTodo}
				/>
			</div>
		)
	}
}

export default Todo