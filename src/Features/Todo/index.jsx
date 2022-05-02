import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './Components/TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {
	const InitTodoList = [
		{
			id: 1,
			title: 'Eat',
			status:'new'

		},
		{
			id: 2,
			title: 'Play with Fly',
			status:'completed'
		},
		{
			id: 3,
			title: 'Sleep',
			status:'new',
		},
	];
	const [todoList, setTodoList] = useState(InitTodoList)
	const [filterStatus, setFilterStatus] = useState('all')

	const handleTodoClick = (todo,index) => {
		//Clone array ra 1 nang moi roi moi su dung

		const newTodoList = [...todoList]

		//Toggle state
		newTodoList[index] = {
			...newTodoList[index],
			status: newTodoList[index].status === 'new' ? 'completed' : 'new',
		};

		setTodoList(newTodoList);
	}

	const handleNew = () => {
		setFilterStatus('new')
	}
	const handleShowAll = () => {
		setFilterStatus('all')
	}
	const handleComplete = () => {
		setFilterStatus('completed')
	}

	const RenderList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status)
	console.log(RenderList);
	return(
	<div>
		<h1>Todo List</h1>
		<TodoList todoList={RenderList} onTodoClick={handleTodoClick} />
		<div>
			<button  className="btn-click" onClick={handleShowAll}>Show All</button>
			<button  className="btn-click" onClick={handleComplete}>Show Complete</button>
			<button  className="btn-click" onClick={handleNew}>Show New</button>
		</div>
	</div>
	)
}

export default TodoFeature;
