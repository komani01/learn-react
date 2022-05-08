import { useEffect } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import ProductApi from './API/ProductAPI';
import './App.css';
import ColorBox from './Components';
import AlbumFeature from './Features/Album';
import TodoFeature from './Features/Todo';

function App() {
    useEffect(() => {
        const fetchProduct = async () => {
            const params = {
                _limit: 10,
            };
            const productsList = await ProductApi.getAll(params);
            console.log(productsList);
        };
        fetchProduct();
    }, []);
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
