import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"

import viewTable from './home/viewTable'
import viewModal from './home/viewModal'
import Navbar from '../layouts/navbar'
import api from '../api'


class Home extends React.Component {
	
	constructor(props) {
		
		super(props);
		
		this.state = {
			renderData:null,
			renderModal:null
		};
	}
	
	
	componentDidMount() {
		
		$.ajax({
			url: api.get
		}).done(result => {
			
			this.setState({
				renderData : viewTable(result),
				renderModal: viewModal()
			});
		})
		.fail(result => {
			
			console.log('error get api');
		})
	}
	
	
	componentDidUpdate() {
		
		console.log('Component home update')
	}
	
	
	render() {
		return (
			<>
			<Navbar />
				<div className="container mt-4">
					<div className="row">
						<div className="col">
							<table className="table">
								<thead>
									<tr>
										<th>#</th>
										<th>Nama</th>
										<th>Gender</th>
										<th>Alamat</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody id="view-table">{this.state.renderData}</tbody>
							</table>
						</div>
					</div>
				</div>
				{this.state.renderModal}
			</>
		)
	}
}

export default Home