import {useState} from 'react'


function closeModal(prop, modalTarget) {
	
	const pushData = {};
	
	pushData[modalTarget] = false;
	
	prop.setState(pushData);
}

export default closeModal