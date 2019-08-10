import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component {
	getRGB(rating) {
		if (rating > 0) return `${200 - rating * 20},200,0`;
		return `200,${200 - rating * -20},0`;
	}

	getEmoji() {
		if (this.props.votes >= 15) {
			return 'em em-rolling_on_the_floor_laughing';
		} else if (this.props.votes >= 12) {
			return 'em em-laughing';
		} else if (this.props.votes >= 9) {
			return 'em em-smiley';
		} else if (this.props.votes >= 6) {
			return 'em em-slightly_smiling_face';
		} else if (this.props.votes >= 3) {
			return 'em em-neutral_face';
		} else if (this.props.votes >= 0) {
			return 'em em-confused';
		} else {
			return 'em em-angry';
		}
	}

	render() {
		return (
			<div className="Joke">
				<div className="Joke-buttons">
					<i className="fas fa-arrow-up" onClick={this.props.upvote} />
					<span className="Joke-votes" style={{ border: `3px solid rgb(${this.getRGB(this.props.votes)})` }}>
						{this.props.votes}
					</span>
					<i className="fas fa-arrow-down" onClick={this.props.downvote} />
				</div>
				<div className="Joke-text">{this.props.text}</div>
				<div className="Joke-smiley">
					<i className={this.getEmoji()} />
				</div>
			</div>
		);
	}
}

export default Joke;
