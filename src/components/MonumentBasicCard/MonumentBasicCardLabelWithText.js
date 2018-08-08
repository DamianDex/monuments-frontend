import React, {Component} from 'react';
import {Badge, Col, Row} from "reactstrap";

class MonumentBasicCardLabelWithText extends Component {

    constructor(props) {
        super(props);

        this.state = {
            label: props.label,
            text: props.text
        }
    }

    render() {
        return (
            <Row>
                <Col xs="6">
                    <Badge color="info">{this.state.label}</Badge>
                </Col>
                <Col xs="auto">
                    <Badge color="dark">{this.state.text}</Badge>
                </Col>
            </Row>
        )
    }
}

export default MonumentBasicCardLabelWithText;