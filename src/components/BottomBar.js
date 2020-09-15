import React from 'react'
import './BottomBar.css'

function BottomBar(props) {
	return (
		<div className="bbar">
			<img className="bbar__icon" src={require('../images/streamline-icon-house-2@20x20.png')} alt=""/>
			<img className="bbar__icon" src={require('../images/streamline-icon-search-1@20x20.png')} alt=""/>
			<img className="bbar__icon" src={require('../images/streamline-icon-add-circle@20x20.png')} alt=""/>
			<img className="bbar__icon" src={require('../images/streamline-icon-love-it@20x20.png')} alt=""/>
			<img className="bbar__icon" src={require('../images/streamline-icon-single-neutral-actions@20x20.png')} alt=""/>
		</div>
	)	
}

export default BottomBar
