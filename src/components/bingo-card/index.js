import React from 'react'
import SquareComponent from '../square'

import styles from './bingoCard.module.scss'

const BingoCardComponent = () => {
    // <SquareComponent />
    // <SquareComponent isCenter />
    return (
        <center>
            <div className={styles.card}>
                <div className={styles.container}>

                    <div>B</div>
                    <SquareComponent number={'1'} />
                    <SquareComponent number={'2'} />
                    <SquareComponent number={'3'} />
                    <SquareComponent number={'4'} />
                    <SquareComponent number={'5'} />

                    <div>I</div>
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />

                    <div>N</div>
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent isCenter />
                    <SquareComponent />
                    <SquareComponent />

                    <div>G</div>
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />

                    <div>O</div>
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                </div>
                <div className={styles.footer}>
                    <span>Vinícius Furukawa Caralho</span>
                    <span>Jogo 1</span>
                </div>
            </div>
        </center>
    )
}

export default BingoCardComponent