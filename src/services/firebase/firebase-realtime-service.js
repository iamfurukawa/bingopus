// eslint-disable-next-line
import firebase from 'firebase'
import FirebaseService from './firebase-service'

const FirebaseRealtimeService = () => {
    const init = () => FirebaseService.app()

    const updateBoard = async (data) => {
        await init().database().ref('/').update({
            'Board': data,
        });
    };

    const getRef = () => {
        return init().database().ref('/')
    }

    return {
        getRef,
        updateBoard,
    };
};

export default FirebaseRealtimeService();