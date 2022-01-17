import React from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";

import Home from './components/Home'
import Create from './components/Create'
import Edit from './components/Edit'


ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/create" element={<Create />} />
			<Route path="/edit" element={<Edit />} />
		</Routes>
	</BrowserRouter>,
	document.getElementById('app')
)