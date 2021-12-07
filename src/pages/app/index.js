import React from 'react'
import {
    useRoutes,
} from "react-router-dom";

import GamePage from '../game'

const AppPage = () => {
    return useRoutes([
        { path: "/game", element: <GamePage /> }
    ])
}

export default AppPage