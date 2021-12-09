import React from 'react'
import SquareComponent from '../square'

import styles from './board.module.scss'

const BoardComponent = ({ gameSelected }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.container}>

          <div className={styles.square}>B</div>
          <div className={styles.square}>I</div>
          <div className={styles.square}>N</div>
          <div className={styles.square}>G</div>
          <div className={styles.square}>O</div>

          <SquareComponent number={1} />
          <SquareComponent number={16} />
          <SquareComponent number={31} />
          <SquareComponent number={46} />
          <SquareComponent number={61} />

          <SquareComponent number={2} />
          <SquareComponent number={17} />
          <SquareComponent number={32} />
          <SquareComponent number={47} />
          <SquareComponent number={62} />

          <SquareComponent number={3} />
          <SquareComponent number={18} />
          <SquareComponent number={33} />
          <SquareComponent number={48} />
          <SquareComponent number={63} />

          <SquareComponent number={4} />
          <SquareComponent number={19} />
          <SquareComponent number={34} />
          <SquareComponent number={49} />
          <SquareComponent number={64} />

          <SquareComponent number={5} />
          <SquareComponent number={20} />
          <SquareComponent number={35} />
          <SquareComponent number={50} />
          <SquareComponent number={65} />

          <SquareComponent number={6} />
          <SquareComponent number={21} />
          <SquareComponent number={36} />
          <SquareComponent number={51} />
          <SquareComponent number={66} />

          <SquareComponent number={7} />
          <SquareComponent number={22} />
          <SquareComponent number={37} />
          <SquareComponent number={52} />
          <SquareComponent number={67} />

          <SquareComponent number={8} />
          <SquareComponent number={23} />
          <SquareComponent number={38} />
          <SquareComponent number={53} />
          <SquareComponent number={68} />

          <SquareComponent number={9} />
          <SquareComponent number={24} />
          <SquareComponent number={39} />
          <SquareComponent number={54} />
          <SquareComponent number={69} />

          <SquareComponent number={10} />
          <SquareComponent number={25} />
          <SquareComponent number={40} />
          <SquareComponent number={55} />
          <SquareComponent number={70} />

          <SquareComponent number={11} />
          <SquareComponent number={26} />
          <SquareComponent number={41} />
          <SquareComponent number={56} />
          <SquareComponent number={71} />
          
          <SquareComponent number={12} />
          <SquareComponent number={27} />
          <SquareComponent number={42} />
          <SquareComponent number={57} />
          <SquareComponent number={72} />

          <SquareComponent number={13} />
          <SquareComponent number={28} />
          <SquareComponent number={43} />
          <SquareComponent number={58} />
          <SquareComponent number={73} />

          <SquareComponent number={14} />
          <SquareComponent number={29} />
          <SquareComponent number={44} />
          <SquareComponent number={59} />
          <SquareComponent number={74} />

          <SquareComponent number={15} />
          <SquareComponent number={30} />
          <SquareComponent number={45} />
          <SquareComponent number={60} />
          <SquareComponent number={75} />

          <div className={styles.square}>B</div>
          <div className={styles.square}>I</div>
          <div className={styles.square}>N</div>
          <div className={styles.square}>G</div>
          <div className={styles.square}>O</div>
        </div>
      </div>
    </>
  )
}

export default BoardComponent