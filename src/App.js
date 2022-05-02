import './App.css';
import AlbumFeature from './Features/Album';
import TodoFeature from './Features/Todo';
function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<TodoFeature />
			</header>

			<div>
				<AlbumFeature />
			</div>
		</div>
	);
}

export default App;
