export const setWeek = obj => {
  return {
    type: 'SET_WEEK',
    data: obj
  };
};
export const setModal = (modal = true) => {
  console.log('set modal');
  return {
    type: 'SET_MODAL',
    data: { modal }
  };
};
export const addItem = (item = {}, isCurrWeek = true) => {
  return {
    type: 'ADD_ITEM',
    data: { isCurrWeek, item }
  };
};
export const setLang = (locale = 'en') => {
  return {
    type: 'SET_LANG',
    data: { locale }
  };
};
