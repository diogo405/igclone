import React from 'react'
import './TopBar.css'

class TopBar extends React.Component {
	render = () => { return (
		<div className="topb">
			<img className="topb__icon" src={require('../images/streamline-icon-cog-1@24x24.png')} alt="Settings"/>
			<h1 className="topb__logo">Igclone</h1>
			<img className="topb__icon" src={require('../images/streamline-icon-messages-bubble-square@24x24.png')} alt="Inbox"/>
		</div>
	)}
}

export default TopBar