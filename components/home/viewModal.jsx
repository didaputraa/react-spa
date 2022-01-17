import btnUpdate from './modal/btnUpdate'

function viewModal() {
	
	return (
		<div className="modal" id="modal-edit" data-backdrop="static" tabIndex="-1">
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
						<button className="btn btn-secondary" data-dismiss="modal">Batal</button>
						<button className="btn btn-primary" onClick={btnUpdate}>Update</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default viewModal