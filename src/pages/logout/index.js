import React from 'react'
import { useHistory } from 'react-router';
import localStorageService from '../../services/local-storage/local-storage-service';

const LogoutPage = () => {

    const history = useHistory()
    localStorageService.removePeople()

    history.push('/')

    return (
        <div>Saindo...</div>
    );
}

export default LogoutPage