function ViewModal(prop) {
	
	const {editModal,nama,alamat,gender} = prop.showing.state;
	const state 	= prop.showing;
	const showModal = { display: editModal ? 'block' : 'none'};
	
	return (
		<div className="modal" style={showModal} id="modal-edit" data-backdrop="static" tabIndex="-1">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<p className="modal-title">Edit data</p>
						<button className="close" onClick={()=> state.handle_hideModal_edit()}>&times;</button>
					</div>
					<div className="modal-body">
						<form id="frm">
						<div className="form-group">
							<label>Nama</label>
							<input type="text" className="form-control" name="nama"
								   value={nama}
								   onChange={(e)=> state.setState({ nama:e.target.value })}
							/>
						</div>
						<div className="form-group">
							<label>Gender</label>
							<div>
								<div className="form-check-inline">
									<label className="form-check-label">
										<input type="radio" className="form-check-input" name="gender" 
											   checked={gender=='L'} value="L"
											   onChange={()=> state.setState({ gender:'L' })}
										/>Laki-laki
									</label>
								</div>
								<div className="form-check-inline">
									<label className="form-check-label">
										<input type="radio" className="form-check-input" name="gender" 
											   checked={gender=='P'} value="P"
											   onChange={()=> state.setState({ gender:'P' })}
										/>Perempuan
									</label>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label>Alamat</label>
							<textarea className="form-control" name="alamat"
									  value={alamat} 
									  onChange={(e)=> state.setState({ alamat:e.target.value })} 
							/>
						</div>
						</form>
					</div>
					<div className="modal-footer">
						<button className="btn btn-secondary" 
								onClick={()=> state.handle_hideModal_edit()}
						>Batal
						</button>
						<button className="btn btn-primary" 
								onClick={()=> state.btn_handleUpdate()}
						>Update</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ViewModal