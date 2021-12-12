import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Radio } from 'antd';

import BingoCardComponent from '../../components/bingo-card'

import localStorageService from '../../services/local-storage/local-storage-service'

import styles from './game.module.scss'

const GamePage = () => {

    const history = useHistory();
    const peopleStored = localStorageService.getPeople()

    const [gameSelected, setGameSelected] = useState(1)
    const [people, setPeople] = useState(null)

    useEffect(() => {
        setPeople(peopleStored)
    }, [])

    if (peopleStored === null) history.push("/")

    return (
        <div className={styles.content}>
            {people &&
                <>
                    <div className={styles.container}>
                        <div className={styles.padding}>
                            <Radio.Group defaultValue="1" buttonStyle="outlined" onChange={(e) => setGameSelected(e.target.value)}>
                                {Object.keys(people.games).map((v) => <Radio.Button  value={v}>{`Jogo ` + (v)}</Radio.Button>)}
                            </Radio.Group>
                        </div>
                        <BingoCardComponent people={people} gameSelected={gameSelected} />
                    </div>
                </>
            }
        </div>
    )
}

export default GamePage