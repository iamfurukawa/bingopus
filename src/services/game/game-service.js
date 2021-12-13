import localStorageService from '../local-storage/local-storage-service'

const GameService = () => {

    const getGame = (gameSelected) => {
        if (!gameSelected) return
        const people = localStorageService.getPeople()
        let game = localStorageService.getGame(`${people.cpf}_${gameSelected}`)
        if (!game) {
            game = new Array(24).fill(false)
            localStorageService.saveGame(`${people.cpf}_${gameSelected}`, game)
        }
        return game
    }

    const updateGame = (gameSelected, position) => {
        if (!gameSelected) return
        const people = localStorageService.getPeople()
        let game = getGame(gameSelected)
        game[position] = !game[position]
        localStorageService.saveGame(`${people.cpf}_${gameSelected}`, game)
    }

    return {
        updateGame,
        getGame
    }
}

export default GameService()