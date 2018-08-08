import React, {Component} from 'react';
import {Badge, Card, CardBody, CardHeader, Collapse} from "reactstrap";

class LatestEvents extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collapse: false,
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    renderLabel() {
        if (!this.state.collapse) {
            return (<Badge color="info" href="#" onClick={this.toggle}>Ostatnie aktywności &darr;</Badge>)
        } else {
            return (<Badge color="info" href="#" onClick={this.toggle}>Ostatnie aktywności &uarr;</Badge>)
        }
    }

    render() {
        return (
            <Card>
                <CardHeader>
                    {this.renderLabel()}
                </CardHeader>
                <Collapse isOpen={this.state.collapse}>
                    <CardBody>

                    </CardBody>
                </Collapse>
            </Card>
        )
    }
}

export default LatestEvents;