import React from 'react'

import BoardComponent from '../../components/board-write'

import styles from './admin.module.scss'

const AdminPage = () => {

    return (
        <div className={styles.container}>
            <BoardComponent />
        </div>
    )
}

export default AdminPage