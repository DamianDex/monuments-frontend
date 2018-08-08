import React, {Component} from 'react';
import {CardGroup} from "reactstrap";
import MonumentBasicCard from "./MonumentBasicCard";

class MonumentBasicCardGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: props.size
        }

    }

    render() {
        return (
            <CardGroup>
                {this.renderCardsInRow()}
            </CardGroup>
        );
    }

    renderCardsInRow() {
        let cards = []
        for (let i = 0; i < this.state.size; i++) {
            cards.push(
                <MonumentBasicCard
                    id='57'
                    voivodeship_name='podkarpackie'
                    district_name='rzeszowski'
                    commune_name='Dynów'
                    place_name='Dynów'
                    description='Mały park dworski'
                    name='Park dworski w Dynowie'
                    categories={['Park', 'Pałac']}
                    rating='5.0'
                    number_of_ratings='57'
                    number_of_likes='13'
                />);
        }
        return cards;
    }
}

export default MonumentBasicCardGroup;