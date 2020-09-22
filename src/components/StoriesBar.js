import React from 'react'
import './StoriesBar.css'
import StoryIcon from './StoryIcon.js'
import NewStory from './NewStory.js'

class StoriesBar extends React.Component {
	render = () => { return (
		<div className="sbar">
			<NewStory/>
			{this.props.stories.map(s => <StoryIcon story={s} key={s.id}/>)}
		</div>
	)}
}

export default StoriesBar