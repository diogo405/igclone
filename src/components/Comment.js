import React from 'react'
import './Comment.css'

function Comment(props) {

	let commentLikes = props.comment.likes > 0 ? <div className="comment__likes">{props.comment.likes} {props.comment.likes > 1 ? 'likes' : 'like'}</div> : ''
	let liked = props.comment.liked ? require('../images/streamline-icon-love-it@24x24.png') : require('../images/streamline-icon-love-it-alternate@20x20.png')
	let avatar = require(`../images/${props.comment.user.avatar}`)

	return (
		<div className="comment">
			<div className="comment__cont">
				<img className="comment__avatar" src={avatar} alt=""/>
				<div className="comment__text">
					<span className="comment__user">{props.comment.user.username}</span>
					<span className="comment__comm">{props.comment.comment}</span>
					{commentLikes}
				</div>
			</div>
			<img className="comment__like" src={liked} alt="" onClick={() => props.onLike(props.comment.id, !props.comment.liked, props.comment.liked ? props.comment.likes - 1 : props.comment.likes + 1)}/>
		</div>
	)	
}

export default Comment
