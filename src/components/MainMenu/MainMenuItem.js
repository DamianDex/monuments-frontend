import React, {Component} from 'react';
import {Badge} from "reactstrap";

class MainMenuItem extends Component {

    style = {
        width: '100%',
        padding: '5px',
        'margin-bottom': '7px'
    }

    constructor(props) {
        super(props);

        this.state = {
            label: props.label,
            color: props.color,
            href: props.href
        }
    }

    render() {
        return (
            <Badge style={this.style} href={this.state.href} color={this.state.color}>{this.state.label}</Badge>
        )
    }
}

export default MainMenuItem;