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
            cards.push(<MonumentBasicCard
                voivodeship_name='podkarpackie'
                description='Mały park dworski'
                name='Park dworski w Dynowie'
                categories={['Park', 'Pałac']}/>);
        }
        return cards;
    }
}

export default MonumentBasicCardGroup;