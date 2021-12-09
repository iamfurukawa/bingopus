import React from 'react'

import BoardComponent from '../../components/board'
import PeopleComponent from '../../components/people'

import styles from './admin.module.scss'

const AdminPage = () => {

    return (
        <center>
            <BoardComponent />
            <PeopleComponent />
        </center>
    )
}

export default AdminPage