import React from 'react'
import feedData from '../json/feed.json'
import storiesData from '../json/stories.json'
import StoriesBar from '../components/StoriesBar.js'
import Feed from '../components/Feed.js'
import './HomePage.css'

class HomePage extends React.Component {
	state = {
        stories: [],
        feed: []
    }

    componentDidMount = () => {
        this.setState({stories: storiesData, feed: feedData})
    }

    render = () => {
		return (
			<div className="home">
				<StoriesBar stories={this.state.stories}/>
	            <Feed feed={this.state.feed}/>
			</div>
		)
    }
}

export default HomePage
