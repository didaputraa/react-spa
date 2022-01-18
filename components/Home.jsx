import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"

import Navbar from '../layouts/navbar'
import ViewTable from './home/viewTable'
import ViewModal from './home/ViewModal'
import ViewModalAdd from './home/ViewModalAdd'
import ViewModalRemove from './home/ViewModalRemove'
import api from '../api'


class Home extends React.Component {
	
	constructor(props) {
		
		super(props);
		this.btn_handleUpdate = this.btn_handleUpdate.bind(this);
		this.btn_handleRemove = this.btn_handleRemove.bind(this);
		
		this.handle_showModal_add = this.handle_showModal_add.bind(this);
		this.handle_hideModal_add = this.handle_hideModal_add.bind(this);
		
		this.handle_showModal_edit = this.handle_showModal_edit.bind(this);
		this.handle_hideModal_edit = this.handle_hideModal_edit.bind(this);
		
		this.handle_showModal_remove = this.handle_showModal_remove.bind(this);
		this.handle_hideModal_remove = this.handle_hideModal_remove.bind(this);
		
		this.state = {
			renderData:null,
			editModal:false,
			addModal:false,
			delModal:false,
			id	   : '',
			nama   : '',
			alamat : '',
			gender : ''
		};
	}
	
	
	componentDidMount() {
		
		this.handleRefetch();
	}
	
	
	handleRefetch() {
		
		fetch(api.get)
		.then(res => res.json())
		.then(result => {
			
			this.setState({ renderData : result });
		})
		.catch(result => {
			
			console.log('error get api');
		})
	}
	
	handle_showModal_add() {
		this.setState({ addModal:true });
	}
	
	handle_hideModal_add() {
		this.setState({ addModal:false });
	}
	
	handle_hideModal_edit() {
		
		this.setState({ editModal:false });
	}
	
	handle_showModal_edit() {
		
		const cell = event.path[2].cells;
		
		this.setState({
			editModal:true,
			id: event.path[2].dataset.id,
			nama  : cell[1].innerText,
			alamat: cell[3].innerText,
			gender: cell[2].innerText,
			editModal: true
		});
	}
	
	handle_showModal_remove() {
		
		this.setState({
			delModal:true,
			id: event.path[2].dataset.id,
		})
	}
	
	handle_hideModal_remove() {
		
		this.setState({
			delModal:false,
			id: null
		});
	}
	
	
	/*  ----------------- handle proccess -----------------*/
	
	btn_handleUpdate() {
		
		let frm = new FormData(document.getElementById('frm'));
		
		fetch(api.update + this.state.id,{
			method: 'POST',
			body: frm
		})
		.then(()=> {
			
			this.setState({
				editModal:false,
				nama  : '',
				alamat: '',
				gender: '',
			});
			this.handleRefetch();
		})
		.catch((res)=> {
			
			console.log(res);
		})
	}
	
	btn_handleRemove() {
		
		fetch(api.delete + this.state.id,{
			method: 'POST',
		})
		.then(()=> {
			
			this.setState({ delModal:false });
			this.handleRefetch();
		})
		.catch((res)=> {
			
			console.log(res);
		})
	}
	
	btn_handleStore() {
		
		let frm = new FormData(document.getElementById('frm'));
		
		fetch(api.store,{
			method: 'POST',
			body: frm
		})
		.then(()=> {
			
			this.setState({
				addModal:false,
				nama  : '',
				alamat: '',
				gender: '',
			});
			this.handleRefetch();
		})
		.catch((res)=> {
			
			console.log(res);
		})
	}

	
	render() {
		return (
			<>
			<Navbar />
				<div className="container mt-4">
					<div className="row">
						<div className="col">
						
							<button type="button" className="btn btn-primary mb-3"
								onClick={()=> this.handle_showModal_add()}
							>Insert data</button>
							
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
								<tbody id="view-table">
									<ViewTable src={this} />
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<ViewModal showing={this} />
				<ViewModalAdd showing={this} />
				<ViewModalRemove showing={this} />
			</>
		)
	}
}

export default Home