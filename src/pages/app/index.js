import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


import HomePage from '../home'
import GamePage from '../game'

const AppPage = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/bingo">
                    <GamePage />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppPage