import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import MainPage from "./MainPage/MainPage";
import MainMenu from "./MainMenu/MainMenu";
import {Col, Row} from "reactstrap";
import LatestEvents from "./LatestEvents/LatestEvents";

class App extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="1">
                    </Col>
                    <Col>
                    </Col>
                    <Col xs="1">
                    </Col>
                </Row>
                <Row>
                    <Col xs="1">
                    </Col>
                    <Col xs="2">
                        <MainMenu/>
                        <LatestEvents/>
                    </Col>
                    <Col xs="8">
                        <Switch>
                            <Route exact path='/' component={MainPage}/>
                            <Route exact path='/search' component={MainPage}/>
                            <Route exact path='/map' component={MainPage}/>
                            <Route exact path='/ranking' component={MainPage}/>
                            <Route exact path='/monument/:id' component={MainPage}/>
                        </Switch>
                    </Col>
                    <Col xs="1">
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
