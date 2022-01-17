import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

function Create() {
	
	useEffect(()=>{
		document.title = "Page create";
	});
	
	let navigate = useNavigate();
	
	return(
		<div calssName="col">
		</div>
	);
}

export default Create;