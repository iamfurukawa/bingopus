import localStorageService from '../local-storage/local-storage-service'

const VersionService = () => {

    const getFrontVersion = () => {
        return process.env.REACT_APP_VERCEL_GIT_COMMIT_SHA || 'development'
    }

    const frontValidation = () => {
        const deployedVersion = getFrontVersion()
        if (deployedVersion !== localStorageService.getFrontVersion()) {
            clearAndSave(deployedVersion)
        }
    }

    const clearAndSave = (deployedVersion) => {
        localStorage.clear()
        localStorageService.saveFrontVersion(deployedVersion)
    }

    return {
        getFrontVersion,
        frontValidation,
    }
}

export default VersionService();