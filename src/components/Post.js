import React from 'react'
import './Post.css'
import { Link } from "react-router-dom"

class Post extends React.Component {
    state = {liked: false, saved: false, doubleClick: false}

    toggleLike = () => {
      this.setState({liked: !this.state.liked})
    }

    toggleSave = () => {
      this.setState({saved: !this.state.saved})
    }

    like = () => {
      this.setState({doubleClick: true, liked: true})
    }

    render = () => {
        const likeIcon = this.state.liked ? require('../images/streamline-icon-love-it@24x24.png') : require('../images/streamline-icon-love-it-alternate@20x20.png')
        const saveIcon = this.state.saved ? require('../images/streamline-icon-rating-star@20x20.png') : require('../images/streamline-icon-rating-star-alternate@20x20.png')
        const postLikeClass = this.state.doubleClick ? 'post__like post__like--liked post__action-icon--invert' : 'post__like post__action-icon--invert'
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
                      <img className="post__action-icon post__action-icon--invert" src={likeIcon} alt="" onClick={this.toggleLike}/>
  	              	</div>
                    <div className="post__action">
                      <Link to={`/post/${this.props.post.id}/comments`}>
                        <img className="post__action-icon post__action-icon--invert" src={require('../images/streamline-icon-conversation-chat-2@24x24.png')} alt=""/>
                      </Link>
                    </div>
                    <div className="post__action">
                      <img className="post__action-icon post__action-icon--invert" src={require('../images/streamline-icon-send-email@24x24.png')} alt=""/>
                    </div>
                  </div>
                  <div className="post__actions-right">
  	              	<div className="post__saved">
                      <img className="post__action-icon post__action-icon--invert" src={saveIcon} alt="" onClick={this.toggleSave}/>
  	              	</div>
                  </div>
              	</div>
                <div className="post__overlay" onDoubleClick={this.like}></div>
                <img className={postLikeClass} src={require('../images/streamline-icon-love-it@80x80.png')} alt="" onAnimationEnd={() => {this.setState({doubleClick: false})}} />
            </div>
        )
    }
}

export default Post
