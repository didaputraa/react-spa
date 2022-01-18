function ViewTable(prop) {
	
	const state = prop.src;
	const {renderData} = prop.src.state;
	
	if (renderData) {
		
		let no = 1;
		
		return (
			<>
			{renderData.map(item => (
				<tr key={item.id} data-id={item.id}>
					<td>{no++}</td>
					<td>{item.nama}</td>
					<td>{item.gender}</td>
					<td>{item.alamat}</td>
					<td>
						<a className="btn btn-warning btn-sm text-white"
						   id="btn-edit" 
						   onClick={()=> state.handle_showModal_edit()}
						>Edit</a>
						&nbsp;
						<a onClick={()=> state.handle_showModal_remove()} 
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

export default ViewTable;