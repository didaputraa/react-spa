function ViewModalRemove(prop) {
	
	const {delModal} = prop.showing.state;
	const state 	 = prop.showing;
	const showModal  = {display: delModal? 'block':'none'}
	
	return (
		<div className="modal" style={showModal} id="modal-remove" data-backdrop="static" tabIndex="-1">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<p className="modal-title">Konformasi hapus data</p>
						<button className="close" onClick={()=> state.handle_hideModal_remove()}>&times;</button>
					</div>
					<div className="modal-body">
						<p>Yakin data ini di hapus ?</p>
					</div>
					<div className="modal-footer">
						<button className="btn btn-secondary" 
								onClick={()=> state.handle_hideModal_remove()}
						>Batal
						</button>
						<button className="btn btn-primary" 
								onClick={()=> state.btn_handleRemove()}
						>Konfirmasi</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ViewModalRemove