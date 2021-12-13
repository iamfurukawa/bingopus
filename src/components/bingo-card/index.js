import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { Button } from 'antd';

import SquareComponent from '../square'

import gameService from '../../services/game/game-service';

import styles from './bingoCard.module.scss'

const BingoCardComponent = ({ people, gameSelected }) => {

    const history = useHistory()
    const [gameMark, setGameMark] = useState(gameService.getGame(gameSelected))

    useEffect(() => {
        setGameMark(gameService.getGame(gameSelected))
    }, [gameSelected])

    const exit = () => history.push('/logout')
    const updateGame = (idx) => gameService.updateGame(gameSelected, idx)
    const getGame = (idx) => people.games[gameSelected][idx]

    return (
        <div className={styles.card}>
            <div className={styles.container}>

                <div className={styles.letters}>B</div>
                <SquareComponent number={getGame(0)} onClickAction={() => updateGame(0)} initMark={gameMark[0]} />
                <SquareComponent number={getGame(1)} onClickAction={() => updateGame(1)} initMark={gameMark[1]} />
                <SquareComponent number={getGame(2)} onClickAction={() => updateGame(2)} initMark={gameMark[2]} />
                <SquareComponent number={getGame(3)} onClickAction={() => updateGame(3)} initMark={gameMark[3]} />
                <SquareComponent number={getGame(4)} onClickAction={() => updateGame(4)} initMark={gameMark[4]} />

                <div className={styles.letters}>I</div>
                <SquareComponent number={getGame(5)} onClickAction={() => updateGame(5)} initMark={gameMark[5]} />
                <SquareComponent number={getGame(6)} onClickAction={() => updateGame(6)} initMark={gameMark[6]} />
                <SquareComponent number={getGame(7)} onClickAction={() => updateGame(7)} initMark={gameMark[7]} />
                <SquareComponent number={getGame(8)} onClickAction={() => updateGame(8)} initMark={gameMark[8]} />
                <SquareComponent number={getGame(9)} onClickAction={() => updateGame(9)} initMark={gameMark[9]} />

                <div className={styles.letters}>N</div>
                <SquareComponent number={getGame(10)} onClickAction={() => updateGame(10)} initMark={gameMark[10]} />
                <SquareComponent number={getGame(11)} onClickAction={() => updateGame(11)} initMark={gameMark[11]} />
                <SquareComponent isCenter />
                <SquareComponent number={getGame(12)} onClickAction={() => updateGame(12)} initMark={gameMark[12]} />
                <SquareComponent number={getGame(13)} onClickAction={() => updateGame(13)} initMark={gameMark[13]} />

                <div className={styles.letters}>G</div>
                <SquareComponent number={getGame(14)} onClickAction={() => updateGame(14)} initMark={gameMark[14]} />
                <SquareComponent number={getGame(15)} onClickAction={() => updateGame(15)} initMark={gameMark[15]} />
                <SquareComponent number={getGame(16)} onClickAction={() => updateGame(16)} initMark={gameMark[16]} />
                <SquareComponent number={getGame(17)} onClickAction={() => updateGame(17)} initMark={gameMark[17]} />
                <SquareComponent number={getGame(18)} onClickAction={() => updateGame(18)} initMark={gameMark[18]} />

                <div className={styles.letters}>O</div>
                <SquareComponent number={getGame(19)} onClickAction={() => updateGame(19)} initMark={gameMark[19]} />
                <SquareComponent number={getGame(20)} onClickAction={() => updateGame(20)} initMark={gameMark[20]} />
                <SquareComponent number={getGame(21)} onClickAction={() => updateGame(21)} initMark={gameMark[21]} />
                <SquareComponent number={getGame(22)} onClickAction={() => updateGame(22)} initMark={gameMark[22]} />
                <SquareComponent number={getGame(23)} onClickAction={() => updateGame(23)} initMark={gameMark[23]} />
            </div>
            <div className={styles.footer}>
                <span>{people.name}</span>
                <Button type="danger" danger ghost onClick={exit}>
                    Sair
                </Button>
            </div>
        </div>
    )
}

export default BingoCardComponent