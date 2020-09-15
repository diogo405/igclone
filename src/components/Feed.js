import React from 'react'
import './Feed.css'
import Post from './Post.js'

class Feed extends React.Component {
    render = () => {
        return (
            <div className="feed">
                {this.props.feed.map(post => <Post post={post} key={post.photo.url}/>)}
            </div>
        )
    }
}

export default Feed
