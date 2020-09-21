import React from 'react'
import './CommentsPage.css'
import comments from '../json/comments.json'
import { withRouter } from 'react-router-dom'
import Comment from '../components/Comment.js'
import CommentsForm from '../components/CommentsForm.js'
import { Link } from "react-router-dom"

class CommentsPage extends React.Component {
	state = {
		comments: []
	}

	componentDidMount = () => {
		let id = this.props.match.params.id
		id = 1
		let postComments = comments.find(c => c.postId === id)
		if (!postComments) postComments = []
		else postComments = postComments.comments
		this.setState({comments: postComments})
	}

	onLike = (id, liked, likes) => {
		this.setState((state) => {
			let comment = state.comments.find(c => c.id === id)
			comment.liked = liked
			comment.likes = likes
			return {
				comments: state.comments
			}
		})
	}

	onCommentPost = (comment) => {
		this.setState((state) => {
			const found = state.comments.find(c => c.id === comment.id)
			if (found) return {comments: state.comments}
			state.comments.push(comment)
			return {
				comments: state.comments
			}
		})
	}

	render = () => {
		return (
			<div className="comments">
				<Link className="comments__back" to="/">
					←
				</Link>
				<div className="comments__wrap">
					{this.state.comments.map(c => <Comment comment={c} key={c.id} onLike={this.onLike}/>)}
				</div>
				<CommentsForm onCommentPost={this.onCommentPost}/>
			</div>
		)
	}
}

export default withRouter(CommentsPage)
