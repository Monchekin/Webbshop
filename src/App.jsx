import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Login from './Routes/LogIn';
import Products from './Routes/Products';
import CheckOut from './Routes/CheckOut';
import CreateUser from './Components/CreateUser';

function App() {
	return (
		<>
			<div>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/CreateUser' element={<CreateUser />} />
					<Route path='/Products' element={<Products />} />
					<Route path='/Checkout' element={<CheckOut />} />
				</Routes>
			</div>

			<nav>
				<ul>
					<li>
						<NavLink to='/'>LogIn</NavLink>
					</li>
					<li>
						<NavLink to='/CreateUser'>CreateUser</NavLink>
					</li>
					<li>
						<NavLink to='/Products'>Products</NavLink>
					</li>
					<li>
						<NavLink to='/CheckOut'>Checkout</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default App;
