import React from 'react'
import './StoryTimer.css'

function StoryTimer(props) {
	return (
		<div className="stimers">
			{[...Array(props.total).keys()].map((t, index) => <div className={`stimer ${index === props.current ? 'stimer--active' : ''} ${index < props.current ? 'stimer--fill' : ''}`} key={index} onAnimationEnd={props.onNext}></div>)}
		</div>
	)
}

export default StoryTimer
