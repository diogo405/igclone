import React from 'react'
import './Comment.css'

function Comment(props) {

	let commentLikes = props.comment.likes > 0 ? <div className="comment__likes">{props.comment.likes} {props.comment.likes > 1 ? 'likes' : 'like'}</div> : ''

	return (
		<div className="comment">
			<div className="comment__cont">
				<img className="comment__avatar" src={props.comment.user.avatar} alt=""/>
				<div className="comment__text">
					<span className="comment__user">{props.comment.user.username}</span>
					<span className="comment__comm">{props.comment.comment}</span>
					{commentLikes}
				</div>
			</div>
			<img className="comment__like" src={require('../images/streamline-icon-love-it@20x20.png')} alt=""/>
		</div>
	)	
}

export default Comment
