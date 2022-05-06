import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import ColorBox from './Components';
import AlbumFeature from './Features/Album';
import TodoFeature from './Features/Todo';
function App() {
    return (
        <div className="App">
            Home Page
            <p>
                <NavLink to="/todos">Todo</NavLink>
            </p>
            <p>
                <NavLink to="/color">ColorBox</NavLink>
            </p>
            <p>
                <NavLink to="/albums">Album</NavLink>
            </p>
            <Routes>
                <Route path="/todos" element={<TodoFeature />} />
                <Route path="/albums" element={<AlbumFeature />} />
                <Route path="/color" element={<ColorBox />} />
            </Routes>
        </div>
    );
}

export default App;
