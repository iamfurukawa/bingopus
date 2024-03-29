import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'
import Modal from 'react-modal';
import CageGiveAway from './modal';

import { MD5 } from "md5-js-tools"

import SquareComponent from '../square'

import FirebaseRealtimeService from '../../services/firebase/firebase-realtime-service'

import styles from './board.module.scss'


const BoardComponent = () => {
  const history = useHistory()
  const monitoringRef = FirebaseRealtimeService.getRef()

  const [board, setBoard] = useState(new Array(75).fill(0));
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    readFromRealtimeFirebase()
    const password = window.prompt("Senha", "")
    if (password === null || password === "" || MD5.generate(password) !== `18a9357235c1a6ab89f8154d98777b0f`) {
      history.push('/')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateBoard = (idx) => {
    board[idx] = board[idx] === 0 ? 1 : 0
    setBoard(board)
    FirebaseRealtimeService.updateBoard(board)
  }

  const clearBoard = () => {
    setBoard(new Array(75).fill(0))
    FirebaseRealtimeService.updateBoard(new Array(75).fill(0))
  }

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
      cols.push(<SquareComponent key={board[idx] + '_' + actual} onClickAction={() => updateBoard(idx)} number={actual} initMark={board[idx] === 1} />);
    }
    return cols
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="danger" onClick={showModal}>
        Sortear Número
      </Button>

      <Modal
        contentLabel="Basic Modal"
        isOpen={isModalOpen}
        onRequestClose={handleOk}>
        <CageGiveAway numbers={board} updateBoard={updateBoard} closeModal={handleOk}/>
      </Modal>

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
      <Button type="danger" onClick={clearBoard}>
        Limpar Gabarito
      </Button>
    </>
  )
}

export default BoardComponent