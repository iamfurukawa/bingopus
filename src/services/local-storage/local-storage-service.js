const LocalStorageService = () => {

  const savePeople = (people) => {
    const peopleStr = JSON.stringify({ people });
    localStorage.setItem('people', peopleStr);
  };

  const getPeople = () => {
    const peopleStr = localStorage.getItem('people');
    return peopleStr ? JSON.parse(peopleStr).people : null;
  };

  const saveClicks = (clickList, gameNumber) => {
    const clickListStr = JSON.stringify({ clickList });
    localStorage.setItem(`clicks_${gameNumber}`, clickListStr);
  };

  const getClicks = (gameNumber) => {
    const clickListStr = localStorage.getItem(`clicks_${gameNumber}`);
    return clickListStr ? JSON.parse(clickListStr).clickList : null;
  };

  const saveVersion = (version) => {
    const versionStr = JSON.stringify({ version });
    localStorage.setItem('versionStr', versionStr);
  };

  const getVersion = () => {
    const versionStr = localStorage.getItem('version');
    return versionStr ? JSON.parse(versionStr).version : null;
  };

  return {
    savePeople,
    getPeople,

    saveClicks,
    getClicks,

    saveVersion,
    getVersion,
  };
};

export default LocalStorageService();
