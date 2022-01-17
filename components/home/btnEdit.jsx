import {useEffect} from 'react'

function btnEdit(prop) {
	
	prop.setState({ 
		editModal:true 
	})
	
	console.log('show modal')
}

export default btnEdit;