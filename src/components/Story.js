import React from 'react'
import './Story.css'

class Story extends React.Component {
    render = () => {
        let storyClass = 'story'
        storyClass += this.props.story.watched ? ' story--watched' : ''
        
        return (
            <div className={storyClass} style={{backgroundImage: 'url(' + require(`../images/${this.props.story.user.avatar}`) + ')'}}></div>
        )
    }
}

export default Story
