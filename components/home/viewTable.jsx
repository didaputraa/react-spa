import { useEffect } from 'react'

import btnEdit from './btnEdit'
import btnRemove from './btnRemove'

function viewTable(items = [], prop) {
	
	if (items.length > 0) {
		
		let no = 1;
		
		return (
			<>
			{items.map(item => (
				<tr key={item.id}>
					<td>{no++}</td>
					<td>{item.nama}</td>
					<td>{item.gender}</td>
					<td>{item.alamat}</td>
					<td>
						<a onClick={()=> btnEdit(prop)} 
						   id="btn-edit" 
						   className="btn btn-warning btn-sm text-white"
						>Edit</a>
						&nbsp;
						<a onClick={btnRemove} 
						   id="btn-remove" 
						   className="btn btn-danger btn-sm text-white"
						>Delete</a>
					</td>
				</tr>
			))}
			</>
		);
	}
	
	return (
		<tr>
			<td colSpan="4"><h4 className="text-center">Tidak ada Data</h4></td>
		</tr>
	);
}

export default viewTable;