import React from 'react'
import './Post.css'

class Post extends React.Component {
    render = () => {
        return (
            <div className="post">
              	<img className="post__img" src={this.props.post.photo.url} alt=""/>
              	<div className="post__user">
              		<img className="post__avatar" src={this.props.post.user.avatar} alt=""/>
              		<span className="post__username">{this.props.post.user.username}</span>
              	</div>
              	<div className="post__actions">
                  <div className="post__actions-left">
  	              	<div className="post__action">
                      <img className="post__action-icon post__action-icon--invert" src={require('../images/streamline-icon-love-it@24x24.png')} alt=""/>
                      <span className="post__action-counter">{this.props.post.photo.likes}</span>
  	              	</div>
                    <div className="post__action">
                      <img className="post__action-icon post__action-icon--invert" src={require('../images/streamline-icon-conversation-chat-2@24x24.png')} alt=""/>
                      <span className="post__action-counter">{this.props.post.photo.comments}</span>
                    </div>
                    <div className="post__action">
                      <img className="post__action-icon post__action-icon--invert" src={require('../images/streamline-icon-send-email@24x24.png')} alt=""/>
                    </div>
                  </div>
                  <div className="post__actions-right">
  	              	<div className="post__saved">
                      <svg aria-label="Save" className="post__action-icon" fill="#fff" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
  	              	</div>
                  </div>
              	</div>
                <div className="post__overlay"></div>
            </div>
        )
    }
}

export default Post
