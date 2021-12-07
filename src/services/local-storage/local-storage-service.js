const LocalStorageService = () => {

  const savePeople = (people) => {
    const peopleStr = JSON.stringify({ people });
    localStorage.setItem('people', peopleStr);
  };

  const getPeople = () => {
    const peopleStr = localStorage.getItem('people');
    return peopleStr ? JSON.parse(peopleStr).people : null;
  };

  return {
    savePeople,
    getPeople,
  };
};

export default LocalStorageService();
