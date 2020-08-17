import React, { Component } from 'react';
import CharacterCards from '../CharacterCards'
import images from '../../images.json'
import "./MainContainer.css";

class MainContainer extends Component {
    state = {
        images, 
        message: "Click a character to begin!",
        score: 0,
        bestscore: 0
    };

    handleClick = (id, clicked) => {
        const imageOrder = this.state.images;

        if (clicked) {
            imageOrder.forEach((image, index) => {
                imageOrder[index].clicked = false;
            });
            return this.setState({
                image: imageOrder.sort(() => Math.random() - 0.4),
                message: "Oops, you chose the same one twice!",
                score: 0
            })
        }
        else {
            imageOrder.forEach((image, index) => {
                if (id === image.id) {
                    imageOrder[index].clicked = true;
                }
            });

            const { topScore, score } = this.state;
            const newScore = score + 1;
            const newTopScore = newScore > topScore ? newScore : topScore;

            return this.setState({
                image: imageOrder.sort(() => Math.random() - 0.4),
				message: "Great job, keep going!",
				score: newScore,
				topScore: newTopScore,
            });
        }
    };

    render() {
        return (
			<div className="container-fluid mainCardContainer">
			<div className="gameMessage text-center">
						<p>{this.state.message}</p>
					</div>
					<div className="gameScores text-center">
						<p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>
					</div>
				<div className="container">
					
					<div className="row">
					{this.state.images.map(image => (
						<CharacterCards
							key={image.id}
							id={image.id}
							name={image.name}
							clicked={image.clicked}
							image={image.image}
							handleClick={this.handleClick}
							/>
					))}
					</div>
					
				</div>
			</div>
		);
    }
}


export default MainContainer; 