// eslint-disable-next-line
import firebase from 'firebase'
import FirebaseService from './firebase-service'

const FirebaseRealtimeService = () => {
    const init = () => {
        try {
            return FirebaseService.app()
        } catch (e) {
            console.error('Error at realtime firebase!')
            console.log(e)
        }
    }

    const updateBoard = async (data) => {
        try {
            return await init().database().ref('/').update({
                'Board': data,
            });
        } catch (e) {
            console.error('Error at realtime firebase!')
            console.log(e)
        }
    };

    const getRef = () => {
        try {
            return init().database().ref('/')
        } catch (e) {
            console.error('Error at realtime firebase!')
            console.log(e)
        }
    }

    return {
        getRef,
        updateBoard,
    };
};

export default FirebaseRealtimeService();