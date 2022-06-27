import React from 'react'

import BoardComponent from '../../components/board'

import styles from './admin.module.scss'

const AdminPage = () => {

    return (
        <div className={styles.container}>
            <BoardComponent />
        </div>
    )
}

export default AdminPage