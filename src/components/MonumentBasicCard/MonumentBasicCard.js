import React, {Component} from 'react';
import {Badge, Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardTitle} from "reactstrap";

import image from "../../images/1.svg"
import MonumentBasicCardStatistics from "./MonumentBasicCardStatistics";
import MonumentBasicCardLocation from "./MonumentBasicCardLocation";

class MonumentBasicCard extends Component {

    styles_badge = {
        'margin-right': '1px'
    }

    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            categories: props.categories,
            voivodeship_name: props.voivodeship_name,
            place_name: props.place_name,
            rating: props.rating,
            number_of_ratings: props.number_of_ratings,
            number_of_likes: props.number_of_likes,
            district_name: props.district_name,
            commune_name: props.commune_name,
            href: '/monument/' + props.id
        }
    }

    render() {
        return (
            <Card style={this.style_card}>
                <CardHeader>
                    <CardTitle>
                        <Badge color="info">{this.state.name}</Badge>
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
                </CardBody>
                <CardFooter>
                    <MonumentBasicCardLocation
                        voivodeship_name={this.state.voivodeship_name}
                        district_name={this.state.district_name}
                        commune_name={this.state.commune_name}
                        place_name={this.state.place_name}/>
                </CardFooter>
                <CardFooter>
                    <Badge style={this.styles_badge} href={this.state.href}>Profil</Badge>
                    <Badge style={this.styles_badge} href="#">Mapa</Badge>
                </CardFooter>
                <CardFooter>
                    <MonumentBasicCardStatistics
                        rating={this.state.rating}
                        number_of_ratings={this.state.number_of_ratings}
                        number_of_likes={this.state.number_of_likes}/>
                </CardFooter>
            </Card>
        );
    }
}

export default MonumentBasicCard;