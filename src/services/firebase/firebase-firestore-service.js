import firebase from 'firebase'
import FirebaseService from './firebase-service'

const FirebaseFirestoreService = () => {

  const PESSOAS = 'pessoas'

  const BOARD = 'board'

  const init = () => FirebaseService.app().firestore()

  const saveBoard = async (data) => {
    await init().collection(BOARD).doc(BOARD).set(data)
  }

  const getBoard = async () => init().collection(BOARD).doc(BOARD).get()

  const getByCpf = async (cpf) => init().collection(PESSOAS).doc(cpf).get()

  return {
    getByCpf,
    getBoard,
    saveBoard,
  }
}

export default FirebaseFirestoreService()
