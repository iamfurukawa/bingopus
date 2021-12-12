import React, { useState } from 'react'

import styles from './square.module.scss'

import Logo from './opus-logo.png'

const SquareComponent = ({ number = '1', isCenter = false }) => {

    const [isClicked, setClick] = useState(false)

    return (
        <div className={styles.square} onClick={() => setClick(!isClicked)}>
            
            <div className={isClicked && isCenter === false ? styles.marked : ""} onClick={() => setClick(!isClicked)}>
                {
                    isCenter ? <img src={Logo} width={50} height={50} alt="Opus Logo" /> : number
                }
            </div>
        </div>
    )
}

export default SquareComponent