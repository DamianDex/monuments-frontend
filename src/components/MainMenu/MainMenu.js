import React, {Component} from 'react';
import {Card} from "reactstrap";
import MainMenuItem from "./MainMenuItem";

class MainMenu extends Component {

    style_card = {
        padding: '10px'
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={this.style_card}>
                <MainMenuItem href="/" color="dark" label="Strona główna"/>
                <MainMenuItem href="/search" color="info" label="Wyszukiwarka zabytków"/>
                <MainMenuItem href="/map" color="dark" label="Mapa zabytków"/>
                <MainMenuItem href="/ranking" color="info" label="Ranking zabytków"/>
            </Card>
        )
    }
}

export default MainMenu;