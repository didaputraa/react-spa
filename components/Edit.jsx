import { useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import Navbar from '../layouts/navbar';

function Edit() {
	
	useEffect(()=>{
		document.title = "Page Edit";
	});
	
	let navigate = useNavigate();
	
	return(
		<>
			<Navbar />
			
			<div className="container mt-4">
				<div className="row">
					<div className="col">
						<p>edit page</p>
						<Link to="/">back</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Edit;