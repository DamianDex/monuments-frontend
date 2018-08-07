import React, {Component} from 'react';
import {Badge, Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText, CardTitle} from "reactstrap";

import image from "../images/1.svg"

class MonumentBasicCard extends Component {

    styles_badge = {
        'margin-right': '1px'
    }

    styles_card = {
        background: 'white'
    }

    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            categories: props.categories,
            voivodeship_name: props.voivodeship_name,
            description: props.description
        }
    }

    render() {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>
                        <Badge color="secondary">{this.state.name}</Badge>
                    </CardTitle>
                    <CardSubtitle>
                        {this.state.categories.map((category, index) => {
                            return (<Badge style={this.styles_badge} color="secondary" href="#">{category}</Badge>
                            )
                        })}
                    </CardSubtitle>
                </CardHeader>
                <CardBody>
                    <img width="100%" src={image} alt="Card image cap"/>
                    <CardText>
                        <Badge color="light">Województwo:</Badge>{this.state.voivodeship_name}<br/>
                        <Badge color="light">Opis:</Badge>{this.state.description}<br/>
                    </CardText>
                </CardBody>
                <CardFooter>
                    <Badge style={this.styles_badge} href="#">Profil</Badge>
                    <Badge style={this.styles_badge} href="#">Ulubione</Badge>
                    <Badge style={this.styles_badge} href="#">Mapa</Badge>
                </CardFooter>
            </Card>
        );
    }
}

export default MonumentBasicCard;