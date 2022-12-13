import React, { useEffect, useState } from 'react'

import _ from 'lodash'

import { Button } from 'antd'

import bingo1 from './bingo1.gif'
import bingo2 from './bingo2.gif'
import bingo3 from './bingo3.gif'
import bingo4 from './bingo4.gif'
import bingo5 from './bingo5.gif'

import styles from './modal.module.scss'

const CageGiveAway = ({ numbers, closeModal, updateBoard }) => {

    const [show, setShow] = useState(false)
    const [shuffled, setShuffled] = useState({ index: -1, isSelected: -1 })
    const [image, setImage] = useState()

    useEffect(() => {
        setImage(_.shuffle([bingo1, bingo2, bingo3, bingo4, bingo5])[0])

        const pairNumbers = numbers.map((isSelected, index) => ({ index, isSelected }))
        const notSelected = pairNumbers.filter(pair => !pair.isSelected)
        setShuffled(_.shuffle(notSelected)[0])
    }, [])

    const showNumberAndSave = () => {
        if (show) return
        updateBoard(shuffled.index)
        setShow(true)
    }

    const letter = (number) => {
        if (number <= 15)
            return 'B'
        if (number <= 30)
            return 'I'
        if (number <= 45)
            return 'N'
        if (number <= 60)
            return 'G'
        if (number <= 75)
            return 'O'
    }

    return (
        <div className={styles.content}>
            <img src={image} alt="bingo!" />
            {show ? <h1>{letter(shuffled.index + 1) + '' + (shuffled.index + 1)}</h1> : <h1>??</h1>}
            <div className={styles.buttons}>
                <Button type="danger" onClick={showNumberAndSave} disabled={show}>
                    Mostrar Número
                </Button>
                <Button type="danger" onClick={() => closeModal()}>
                    Voltar
                </Button>
            </div>
        </div>
    )
}

export default CageGiveAway