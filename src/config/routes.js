import React from 'react';
import { Route } from 'react-router';
import App from '../App';
import TodosContainer from '../containers/TodosContainer';

export default (
	<Route path='/' component={App}>
		<Route path='/todos' component={TodosContainer}/>
	</Route>
)