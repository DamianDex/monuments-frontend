import React, {Component} from 'react';
import MonumentBasicCardLabelWithText from "./MonumentBasicCardLabelWithText";

class MonumentBasicCardLocation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            voivodeship_name: props.voivodeship_name,
            district_name: props.district_name,
            commune_name: props.commune_name,
            place_name: props.place_name
        }
    }

    render() {
        return (
            <div>
                <MonumentBasicCardLabelWithText label='Województwo' text={this.state.voivodeship_name}/>
                <MonumentBasicCardLabelWithText label='Powiat' text={this.state.district_name}/>
                <MonumentBasicCardLabelWithText label='Gmina' text={this.state.commune_name}/>
                <MonumentBasicCardLabelWithText label='Miejscowość' text={this.state.place_name}/>
            </div>
        )
    }
}

export default MonumentBasicCardLocation;