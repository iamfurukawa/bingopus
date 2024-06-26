import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Radio } from 'antd';

import BingoCardComponent from '../../components/bingo-card'

import localStorageService from '../../services/local-storage/local-storage-service'

import styles from './game.module.scss'
import versionService from '../../services/version/version-service';

const GamePage = () => {
    versionService.frontValidation()

    const history = useHistory()
    const peopleStored = localStorageService.getPeople()

    const [gameSelected, setGameSelected] = useState(1)
    const [people, setPeople] = useState(null)

    useEffect(() => {
        setPeople(peopleStored)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (peopleStored === null) history.push("/login")

    return (
        <>
            {people && gameSelected &&
                <div className={styles.content}>
                    <div className={styles.container}>
                        <div className={styles.padding}>
                            <Radio.Group className={styles.wrap} defaultValue="1" buttonStyle="outlined" onChange={(e) => setGameSelected(e.target.value)}>
                                {Object.keys(people.games).map((v) => <Radio.Button value={v}>{`Jogo ` + (v)}</Radio.Button>)}
                            </Radio.Group>
                        </div>
                        <BingoCardComponent people={people} gameSelected={gameSelected} />
                    </div>
                </div>
            }
        </>
    )
}

export default GamePage