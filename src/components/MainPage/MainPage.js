import React, {Component} from 'react';
import MonumentBasicCardGroup from "../MonumentBasicCard/MonumentBasicCardGroup";

class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <MonumentBasicCardGroup size={5}/>
        )
    }
}

export default MainPage;