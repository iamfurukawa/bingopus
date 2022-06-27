import React from 'react'

import BoardComponent from '../../components/board'
import PeopleComponent from '../../components/people'

import styles from './admin.module.scss'

const AdminPage = () => {

    return (
        <div className={styles.container}>
            <BoardComponent />
            <PeopleComponent />
        </div>
    )
}

export default AdminPage