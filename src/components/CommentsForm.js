import React from 'react'
import './CommentsForm.css'

class CommentsForm extends React.Component {
	state = { comment: '' }

	onChange = (e) => {
		this.setState({comment: e.target.value})
	}

	post = () => {
		if (this.state.comment.trim() === '') return
		const newComment = {"id": new Date().getTime(), "user": {"avatar": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-19/s150x150/45543536_1228087587329501_9160650404638228480_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_ohc=hfNf2eIGNh4AX_IH69a&oh=d1ff5c971cdb1f6d8fe4af74917b7bdf&oe=5F911484", "username": "__igclone"}, "comment": this.state.comment, "likes": 0, "liked": false}
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
