import React, {Component} from 'react';
import MonumentBasicCardLabelWithText from "./MonumentBasicCardLabelWithText";

class MonumentBasicCardStatistics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: props.rating,
            number_of_ratings: props.number_of_ratings,
            number_of_likes: props.number_of_likes

        }
    }

    render() {
        return (
            <div>
                <MonumentBasicCardLabelWithText label='Średnia ocena' text={this.state.rating}/>
                <MonumentBasicCardLabelWithText label='Ilość ocen' text={this.state.number_of_ratings}/>
                <MonumentBasicCardLabelWithText label='Ulubione' text={this.state.number_of_likes}/>
            </div>
        )
    }
}

export default MonumentBasicCardStatistics;