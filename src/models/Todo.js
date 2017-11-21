import $ from 'jquery';

class TodoModel {
	static all(){
		let request = $.ajax({
			url: "https://super-crud.herokuapp.com/todos",
			method: 'GET'
		});
		return request;
	}
}

export default TodoModel