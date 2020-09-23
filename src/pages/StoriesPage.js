import React from 'react'
import './StoriesPage.css'
import userStories from '../json/userStories.json'
import { withRouter } from "react-router-dom"
import StoryTimer from '../components/StoryTimer'

class StoriesPage extends React.Component {
	state = {stories: [], current: 0}

	componentDidMount = () => {
		this.setState({stories: userStories})
	}

	next = () => {
		const length = this.state.stories.length
		const next = this.state.current + 1
		if (next > length - 1) {
			return this.props.history.push('/')
		}
		this.setState({current: next})
	}

	render = () => {
		return (
			<div className="spage">
				<StoryTimer current={this.state.current} total={this.state.stories.length} onNext={this.next}/>
				{this.state.stories.map((s, index) => <div className={`spage__story ${index === this.state.current ? 'spage__story--active' : ''}`} style={{backgroundImage: `url(${s})`}} key={s} onClick={this.next}></div>)}
			</div>
		)
	}
}

export default withRouter(StoriesPage)
