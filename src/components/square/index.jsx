import React, { useEffect, useState } from 'react'

import _ from 'lodash'

import styles from './square.module.scss'

import Logo from './opus-logo.png'

const SquareComponent = ({ number = '1', isCenter = false, onClickAction = () => { }, initMark = false, readOnly = false }) => {
    const [isClicked, setClick] = useState(initMark)

    useEffect(() => {
        setClick(initMark)
    }, [initMark])

    var debMark = !readOnly ? _.debounce(() => {
        setClick(!isClicked)
        onClickAction()
    }, 50)
        : () => { }

    return (
        <div className={styles.square} onClick={debMark}>
            <div className={isClicked && isCenter === false ? styles.marked : ""} onClick={debMark}>
                {
                    isCenter ? <img src={Logo} width={60} height={40} alt="Opus Logo" /> : number
                }
            </div>
        </div >
    )
}

export default SquareComponent