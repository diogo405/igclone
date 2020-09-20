import React from 'react'
import './CommentsPage.css'
import comments from '../json/comments.json'
import { withRouter } from 'react-router-dom'
import Comment from '../components/Comment.js'

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

	render = () => {
		return (
			<div className="comments">
				{this.state.comments.map(c => <Comment comment={c} key={c.comment}/>)}
			</div>
		)
	}
}

export default withRouter(CommentsPage)
