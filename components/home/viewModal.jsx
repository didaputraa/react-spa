import btnUpdate from './modal/btnUpdate'
import viewTable from './viewTable'


function ViewModal(prop) {
	
	const showModal = prop.showing.state.editModal ? {display: 'block'} : {display:'none'}
	
	return (
		<div className="modal" style={showModal} id="modal-edit" data-backdrop="static" tabIndex="-1">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<p className="modal-title">Edit data</p>
					</div>
					<div className="modal-body">
						<div className="form-group">
							<label>Nama</label>
							<input type="text" className="form-control"/>
						</div>
					</div>
					<div className="modal-footer">
						<button className="btn btn-secondary" 
								onClick={()=> {
									prop.showing.setState({
											editModal:false,
											renderData: viewTable([])
										})
									}
								}
						>Batal</button>
						<button 
							className="btn btn-primary" 
						>Update</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ViewModal