import React, { useEffect, useState } from 'react'
import SquareComponent from '../square'

import FirebaseRealtimeService from '../../services/firebase/firebase-realtime-service'

import styles from './board.module.scss'

const BoardComponent = () => {

  const monitoringRef = FirebaseRealtimeService.getRef()

  const [board, setBoard] = useState(new Array(75).fill(0));

  useEffect(() => {
    readFromRealtimeFirebase()
  }, [])

  const readFromRealtimeFirebase = () => {
    monitoringRef.on('value', async (snap) => {
      try {
        const board = snap.val().Board
        setBoard(board)
      } catch (e) {
        console.error('Could\'t read realtime firebase. ' + e)
      }
    })
  }

  const Column = ({ init, end }) => {
    let cols = []
    for (var actual = init; actual <= end; actual++) {
      let idx = actual - 1
      cols.push(<SquareComponent key={board[idx] + '_' + actual} number={actual} initMark={board[idx] == 1} readOnly={true} />);
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