import React from 'react'
import TopBar from './components/TopBar.js'
import BottomBar from './components/BottomBar.js'
import StoriesBar from './components/StoriesBar.js'
import Feed from './components/Feed.js'
import './App.css'
import feedData from './json/feed.json'
import storiesData from './json/stories.json'


class App extends React.Component {
    state = {
        stories: [],
        feed: []
    }
    
    componentDidMount = () => {
        this.setState({stories: storiesData, feed: feedData})
    }

    render = () => {
        return (
            <div className="app">
                <TopBar/>
                <StoriesBar stories={this.state.stories}/>
                <Feed feed={this.state.feed}/>
                <BottomBar/>
            </div>
        )
    }
}

export default App
