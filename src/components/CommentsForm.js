import React from 'react'
import './CommentsForm.css'

class CommentsForm extends React.Component {
	state = { comment: '' }

	onChange = (e) => {
		this.setState({comment: e.target.value})
	}

	post = () => {
		if (this.state.comment.trim() === '') return
		const newComment = {"id": new Date().getTime(), "user": {"avatar": "a___igclone.jpg", "username": "__igclone"}, "comment": this.state.comment, "likes": 0, "liked": false}
		this.props.onCommentPost(newComment)
		this.setState({comment: ''})
	}

	render = () => {
		return (
			<div className="commentsf">
				<input className="commentsf__input" placeholder="Add a comment..." value={this.state.comment} onChange={this.onChange}/>
				<button className="commentsf__btn" onClick={() => this.post()}>Post</button>
			</div>
		)
	}
}

export default CommentsForm
