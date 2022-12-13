import React, { useEffect, useState } from 'react'

import _ from 'lodash'

import { Button } from 'antd'

import bingo1 from './bingo1.gif'
import bingo2 from './bingo2.gif'
import bingo3 from './bingo3.gif'

import styles from './modal.module.scss'

const CageGiveAway = ({ numbers, closeModal, updateBoard }) => {

    const [show, setShow] = useState(false)
    const [shuffled, setShuffled] = useState({ index: -1, isSelected: -1 })
    const [image, setImage] = useState()

    useEffect(() => {
        setImage(_.shuffle([bingo1, bingo2, bingo3])[0])
        const pairNumbers = numbers.map((isSelected, index) => ({ index, isSelected }))
        const notSelected = pairNumbers.filter(pair => !pair.isSelected)
        setShuffled(_.shuffle(notSelected)[0])
    }, [])

    const showNumberAndSave = () => {
        updateBoard(shuffled.index)
        setShow(true)
    }

    return (
        <div className={styles.content}>
            <img src={image} alt="bingo!" />
            {show ? <h1>{shuffled.index + 1}</h1> : <h1>??</h1>}
            <div className={styles.buttons}>
                <Button type="danger" onClick={showNumberAndSave}>
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