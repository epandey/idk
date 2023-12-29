const saveProjectItemList = (projectItems) => {
  localStorage.setItem('projectItems', projectItems);
};

const getProjectItemsList = () => {
  return localStorage.getItem('projectItems');
};
