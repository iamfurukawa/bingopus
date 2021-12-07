import firebase from 'firebase'
import FirebaseService from './firebase-service'

const FirebaseFirestoreService = () => {

  const PESSOAS = 'pessoas'

  const init = () => FirebaseService.app().firestore()

  const save = async (cpf, data) => {
    await init().collection(PESSOAS).doc(cpf).set(data)
  }

  const getAll = async () => init().collection(PESSOAS).get()
  // https://firebase.google.com/docs/firestore/query-data/queries

  const getByCpf = async (cpf) => init().collection(PESSOAS).doc(cpf).get()

  return {
    save,
    getAll,
    getByCpf,
  }
}

export default FirebaseFirestoreService()
