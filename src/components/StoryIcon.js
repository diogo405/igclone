import React from 'react'
import './StoryIcon.css'
import { Link } from "react-router-dom"

class StoryIcon extends React.Component {
    render = () => {
        let storyClass = 'storyi'
        storyClass += this.props.story.watched ? ' storyi--watched' : ''
        
        return (
            <Link to={`/${this.props.story.user.username}/stories`} className={storyClass} style={{backgroundImage: 'url(' + require(`../images/${this.props.story.user.avatar}`) + ')'}}></Link>
        )
    }
}

export default StoryIcon
