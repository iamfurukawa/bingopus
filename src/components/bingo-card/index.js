import React from 'react'
import SquareComponent from '../square'

import styles from './bingoCard.module.scss'

const BingoCardComponent = () => {
    return (
        <div className={styles.title}>
            <h1>Bingo da Opus!</h1>
            <div className={styles.card}>
                <div>
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                </div>
                <div>
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                </div>
                <div>
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent isCenter />
                    <SquareComponent />
                    <SquareComponent />
                </div>
                <div>
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                </div>
                <div>
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                </div>
            </div>
        </div>
    )
}

export default BingoCardComponent