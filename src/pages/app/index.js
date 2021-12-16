import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";


import HomePage from '../home'
import GamePage from '../game'
import AdminPage from '../admin';
import LogoutPage from '../logout';

const AppPage = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <GamePage />
                </Route>
                <Route exact path="/login">
                    <HomePage />
                </Route>
                <Route exact path="/admin">
                    <AdminPage />
                </Route>
                <Route exact path="/logout">
                    <LogoutPage />
                </Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default AppPage