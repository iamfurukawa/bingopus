import React, { useState } from 'react'
import SquareComponent from '../square'

import gameService from '../../services/game/game-service';

import styles from './board.module.scss'

const BoardComponent = () => {

  const Column = ({init, end}) => {
    let cols = []
    for (var actual = init; actual <= end; actual++) {
      cols.push(<SquareComponent key={actual} number={actual}/>);
    }
    return cols
  }


  return (
    <div className={styles.card}>
      <div className={styles.container}>

        <div className={styles.letters}>B</div>
        <Column init={1} end={15} />
        <div className={styles.letters}>B</div>

        <div className={styles.letters}>I</div>
        <Column init={16} end={30} />
        <div className={styles.letters}>I</div>

        <div className={styles.letters}>N</div>
        <Column init={31} end={45} />
        <div className={styles.letters}>N</div>

        <div className={styles.letters}>G</div>
        <Column init={46} end={60} />
        <div className={styles.letters}>G</div>

        <div className={styles.letters}>O</div>
        <Column init={61} end={75} />
        <div className={styles.letters}>O</div>
      </div>
    </div>
  )
}

export default BoardComponent