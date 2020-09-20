import React from 'react'
import './CommentsPage.css'
import comments from '../json/comments.json'
import { withRouter } from 'react-router-dom'
import Comment from '../components/Comment.js'
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

	render = () => {
		return (
			<div className="comments">
				<Link className="comments__back" to="/">
					←
				</Link>
				<div className="comments__wrap">
					{this.state.comments.map(c => <Comment comment={c} key={c.comment} onLike={this.onLike}/>)}
				</div>
			</div>
		)
	}
}

export default withRouter(CommentsPage)
