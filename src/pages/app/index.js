import React from 'react'
import {
    useRoutes,
} from "react-router-dom";

import HomePage from '../home'
import GamePage from '../game'

const AppPage = () => {
    return useRoutes([
        { path: "/", element: <HomePage /> },
        { path: "/bingo", element: <GamePage /> }
    ])
}

export default AppPage