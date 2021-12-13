const LocalStorageService = () => {

  const savePeople = (people) => {
    const peopleStr = JSON.stringify({ people })
    localStorage.setItem('people', peopleStr)
  }

  const getPeople = () => {
    const peopleStr = localStorage.getItem('people')
    return peopleStr ? JSON.parse(peopleStr).people : null
  }

  const removePeople = () => {
    localStorage.removeItem('people')
  }

  const saveGame = (gameNumber, gameList) => {
    const gameListStr = JSON.stringify({ gameList })
    localStorage.setItem(`games_${gameNumber}`, gameListStr)
  }

  const getGame = (gameNumber) => {
    const gameListStr = localStorage.getItem(`games_${gameNumber}`)
    return gameListStr ? JSON.parse(gameListStr).gameList : null
  }

  const saveServerVersion = (version) => {
    const versionStr = JSON.stringify({ version })
    localStorage.setItem('versionStr', versionStr)
  }

  const getServerVersion = () => {
    const versionStr = localStorage.getItem('version')
    return versionStr ? JSON.parse(versionStr).version : null
  }

  const saveFrontVersion = (version) => {
    const versionStr = JSON.stringify({ version })
    localStorage.setItem('fversion', versionStr)
  }

  const getFrontVersion = () => {
    const versionStr = localStorage.getItem('fversion')
    return versionStr ? JSON.parse(versionStr).version : null
  }

  return {
    savePeople,
    getPeople,
    removePeople,

    saveGame,
    getGame,

    saveServerVersion,
    getServerVersion,

    saveFrontVersion,
    getFrontVersion,
  }
}

export default LocalStorageService()
