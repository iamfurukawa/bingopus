const LocalStorageService = () => {

  const savePeople = (people) => {
    const peopleStr = JSON.stringify({ people });
    localStorage.setItem('people', peopleStr);
  };

  const getPeople = () => {
    const peopleStr = localStorage.getItem('people');
    return peopleStr ? JSON.parse(peopleStr).people : null;
  };

  const removePeople = () => {
    localStorage.removeItem('people');
  };

  const saveClicks = (clickList, gameNumber) => {
    const clickListStr = JSON.stringify({ clickList });
    localStorage.setItem(`clicks_${gameNumber}`, clickListStr);
  };

  const getClicks = (gameNumber) => {
    const clickListStr = localStorage.getItem(`clicks_${gameNumber}`);
    return clickListStr ? JSON.parse(clickListStr).clickList : null;
  };

  const saveServerVersion = (version) => {
    const versionStr = JSON.stringify({ version });
    localStorage.setItem('versionStr', versionStr);
  };

  const getServerVersion = () => {
    const versionStr = localStorage.getItem('version');
    return versionStr ? JSON.parse(versionStr).version : null;
  };

  return {
    savePeople,
    getPeople,
    removePeople,

    saveClicks,
    getClicks,

    saveServerVersion,
    getServerVersion,
  };
};

export default LocalStorageService();
