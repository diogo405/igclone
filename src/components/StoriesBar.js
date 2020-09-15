import React from 'react'
import './StoriesBar.css'
import Story from './Story.js'
import NewStory from './NewStory.js'

class StoriesBar extends React.Component {
	render = () => { return (
		<div className="sbar">
			<NewStory/>
			{this.props.stories.map(s => <Story story={s} key={s.id}/>)}
		</div>
	)}
}

export default StoriesBar