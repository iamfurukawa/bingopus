import localStorageService from '../local-storage/local-storage-service'

const VersionService = () => {

    const getFrontVersion = () => {
        try {
            return process.env.VITE_VERCEL_GIT_COMMIT_SHA
        } catch (e) {
            console.error(e)
            return 'development'
        }
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