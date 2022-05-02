import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './Components/TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {
	const todoList = [
		{
			id: 1,
			title: 'Eat',
		},
		{
			id: 2,
			title: 'Play with Fly',
		},
		{
			id: 3,
			title: 'Sleep',
		},
	];
	return <div>
		<h1>Todo List</h1>
		<TodoList todoList={todoList} />
	</div>;
}

export default TodoFeature;
