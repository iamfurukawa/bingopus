import firestoreService from '../firebase/firebase-firestore-service'

const BoardService = () => {

    const getBoard = async () => await firestoreService.getBoard()

    const saveBoard = (board) => firestoreService.saveBoard(board)

    return {
        saveBoard,
        getBoard
    }
}

export default BoardService()