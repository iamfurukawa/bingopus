import React from 'react'

import BoardComponent from '../../components/board-read'

import styles from './admin.module.scss'

const BoardPage = () => {

    return (
        <div className={styles.container}>
            <BoardComponent />
        </div>
    )
}

export default BoardPage