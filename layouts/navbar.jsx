import {useNavigate} from 'react-router-dom';

function Navbar() {
	
	let navigate = useNavigate();
	
	return (
		<nav className="navbar bg-light">
		<div className="container">
			<a className="navbar-brand">React SPA</a>
			<ul className="navbar-nav">
				<li className="nav-item">
					<a className="nav-link navbar-link-primary" onClick={()=>navigate('/edit')}>Home</a>
				</li>
			</ul>
		</div>
		</nav>
	);
}

export default Navbar;