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
    const keyGen = (idx) => gameSelected + '_' + getGame(idx)

    const getName = () => people.name.length > 26 ?  people.name.substring(0, 26 - 3) + "..." : people.name

    return (
        <div className={styles.card}>
            <div className={styles.container}>

                <div className={styles.letters}>B</div>
                <SquareComponent key={keyGen(0)} number={getGame(0)} onClickAction={() => updateGame(0)} initMark={gameMark[0]} />
                <SquareComponent key={keyGen(1)} number={getGame(1)} onClickAction={() => updateGame(1)} initMark={gameMark[1]} />
                <SquareComponent key={keyGen(2)} number={getGame(2)} onClickAction={() => updateGame(2)} initMark={gameMark[2]} />
                <SquareComponent key={keyGen(3)} number={getGame(3)} onClickAction={() => updateGame(3)} initMark={gameMark[3]} />
                <SquareComponent key={keyGen(4)} number={getGame(4)} onClickAction={() => updateGame(4)} initMark={gameMark[4]} />

                <div className={styles.letters}>I</div>
                <SquareComponent key={keyGen(5)} number={getGame(5)} onClickAction={() => updateGame(5)} initMark={gameMark[5]} />
                <SquareComponent key={keyGen(6)} number={getGame(6)} onClickAction={() => updateGame(6)} initMark={gameMark[6]} />
                <SquareComponent key={keyGen(7)} number={getGame(7)} onClickAction={() => updateGame(7)} initMark={gameMark[7]} />
                <SquareComponent key={keyGen(8)} number={getGame(8)} onClickAction={() => updateGame(8)} initMark={gameMark[8]} />
                <SquareComponent key={keyGen(9)} number={getGame(9)} onClickAction={() => updateGame(9)} initMark={gameMark[9]} />

                <div className={styles.letters}>N</div>
                <SquareComponent key={keyGen(10)} number={getGame(10)} onClickAction={() => updateGame(10)} initMark={gameMark[10]} />
                <SquareComponent key={keyGen(11)} number={getGame(11)} onClickAction={() => updateGame(11)} initMark={gameMark[11]} />
                <SquareComponent isCenter />
                <SquareComponent key={keyGen(12)} number={getGame(12)} onClickAction={() => updateGame(12)} initMark={gameMark[12]} />
                <SquareComponent key={keyGen(13)} number={getGame(13)} onClickAction={() => updateGame(13)} initMark={gameMark[13]} />

                <div className={styles.letters}>G</div>
                <SquareComponent key={keyGen(14)} number={getGame(14)} onClickAction={() => updateGame(14)} initMark={gameMark[14]} />
                <SquareComponent key={keyGen(15)} number={getGame(15)} onClickAction={() => updateGame(15)} initMark={gameMark[15]} />
                <SquareComponent key={keyGen(16)} number={getGame(16)} onClickAction={() => updateGame(16)} initMark={gameMark[16]} />
                <SquareComponent key={keyGen(17)} number={getGame(17)} onClickAction={() => updateGame(17)} initMark={gameMark[17]} />
                <SquareComponent key={keyGen(18)} number={getGame(18)} onClickAction={() => updateGame(18)} initMark={gameMark[18]} />

                <div className={styles.letters}>O</div>
                <SquareComponent key={keyGen(19)} number={getGame(19)} onClickAction={() => updateGame(19)} initMark={gameMark[19]} />
                <SquareComponent key={keyGen(20)} number={getGame(20)} onClickAction={() => updateGame(20)} initMark={gameMark[20]} />
                <SquareComponent key={keyGen(21)} number={getGame(21)} onClickAction={() => updateGame(21)} initMark={gameMark[21]} />
                <SquareComponent key={keyGen(22)} number={getGame(22)} onClickAction={() => updateGame(22)} initMark={gameMark[22]} />
                <SquareComponent key={keyGen(23)} number={getGame(23)} onClickAction={() => updateGame(23)} initMark={gameMark[23]} />
            </div>
            <div className={styles.footer}>
                <span>{getName()}</span>
                <Button type="danger" danger ghost onClick={exit}>
                    Sair
                </Button>
            </div>
        </div>
    )
}

export default BingoCardComponent