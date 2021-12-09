import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


import HomePage from '../home'
import GamePage from '../game'
import AdminPage from '../admin';

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
                <Route exact path="/admin">
                    <AdminPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppPage