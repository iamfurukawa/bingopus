const VersionService = () => {
    
    const getFrontVersion = () => {
        return process.env.REACT_APP_VERCEL_GIT_COMMIT_SHA || 'development'
    }

    return {
        getFrontVersion,
    }
}

export default VersionService();