import React from 'react'
import { useHistory } from 'react-router';
import { Button } from 'antd';

import SquareComponent from '../square'

import styles from './bingoCard.module.scss'

const BingoCardComponent = ({ people, gameSelected }) => {

    const history = useHistory()

    const exit = () => {
        history.push('/logout')
    }

    return (
        <>
            {people &&
                <div className={styles.card}>
                    <div className={styles.container}>

                        <div className={styles.letters}>B</div>
                        <SquareComponent number={people.games[gameSelected][0]} />
                        <SquareComponent number={people.games[gameSelected][1]} />
                        <SquareComponent number={people.games[gameSelected][2]} />
                        <SquareComponent number={people.games[gameSelected][3]} />
                        <SquareComponent number={people.games[gameSelected][4]} />

                        <div className={styles.letters}>I</div>
                        <SquareComponent number={people.games[gameSelected][5]} />
                        <SquareComponent number={people.games[gameSelected][6]} />
                        <SquareComponent number={people.games[gameSelected][7]} />
                        <SquareComponent number={people.games[gameSelected][8]} />
                        <SquareComponent number={people.games[gameSelected][9]} />

                        <div className={styles.letters}>N</div>
                        <SquareComponent number={people.games[gameSelected][10]} />
                        <SquareComponent number={people.games[gameSelected][11]} />
                        <SquareComponent isCenter />
                        <SquareComponent number={people.games[gameSelected][12]} />
                        <SquareComponent number={people.games[gameSelected][13]} />

                        <div className={styles.letters}>G</div>
                        <SquareComponent number={people.games[gameSelected][14]} />
                        <SquareComponent number={people.games[gameSelected][15]} />
                        <SquareComponent number={people.games[gameSelected][16]} />
                        <SquareComponent number={people.games[gameSelected][17]} />
                        <SquareComponent number={people.games[gameSelected][18]} />

                        <div className={styles.letters}>O</div>
                        <SquareComponent number={people.games[gameSelected][19]} />
                        <SquareComponent number={people.games[gameSelected][20]} />
                        <SquareComponent number={people.games[gameSelected][21]} />
                        <SquareComponent number={people.games[gameSelected][22]} />
                        <SquareComponent number={people.games[gameSelected][23]} />
                    </div>
                    <div className={styles.footer}>
                        <span>{people.name}</span>
                        <Button type="danger" danger ghost onClick={exit}>
                            Sair
                        </Button>
                    </div>
                </div>
            }
        </>
    )
}

export default BingoCardComponent