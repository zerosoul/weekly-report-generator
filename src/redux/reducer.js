/* eslint-disable no-case-declarations */
import { Langs } from '../const';
const lang = localStorage.getItem('LOCALE') || navigator.language.slice(0, 2);

let initStore = {
  locale: lang,
  lang: Langs[lang].data,
  data: {
    dones: [
      {
        title: '我要吃饭饭那你发你',
        progress: 40,
        remark: '<ul><li>都发了首付款</li><li>都发了首付款2</li></ul>'
      },
      {
        title: '我要吃饭饭那你发你',
        progress: 40,
        remark: '<ul><li>都发了首付款</li><li>都发了首付款2</li></ul>'
      },
      {
        title: '我要吃饭饭那你发你',
        progress: 40,
        remark: '<ul><li>都发了首付款</li><li>都发了首付款2</li></ul>'
      }
    ],
    todos: [
      {
        title: 'dafsf',
        progress: 40,
        remark: '<ul><li>都发了首付款</li><li>都发了首付款2</li></ul>'
      },
      {
        title: '范德萨发的撒',
        progress: 60,
        remark: '<ul><li>都发了首付款</li><li>都发了首付款2</li></ul>'
      }
    ]
  },
  currWeek: true,
  nextWeek: false,
  modal: true,
  alert: false,
  finishAlert: false
};
const weekreports = (state = initStore, action = { type: '', data: {} }) => {
  const {
    data: { dones, todos }
  } = state;
  switch (action.type) {
    case 'SET_ALERT':
      const { alert } = action.data;
      console.log('alert', action);
      return { ...state, alert };
    case 'SET_LANG':
      const { locale } = action.data;
      console.log('set lang', locale);
      localStorage.setItem('LOCALE', locale);

      return { ...state, locale, lang: Langs[locale].data };
    case 'SET_MODAL':
      const { modal } = action.data;
      console.log('modal', action);
      return { ...state, modal };
    case 'ADD_ITEM':
      const { isCurrWeek, item } = action.data;
      console.log('modal', action);
      if (isCurrWeek) {
        dones.push(item);
      } else {
        todos.push(item);
      }
      return { ...state, data: { dones: [...dones], todos: [...todos] } };
    case 'SET_FINISH_ALERT':
      const { finishAlert } = action.data;
      console.log('finishAlert', action);
      return { ...state, finishAlert };
    case 'SET_WEEK':
      const { currWeek, nextWeek } = action.data;
      return {
        ...state,
        currWeek,
        nextWeek
      };
    default:
      return { ...state };
  }
};
export default weekreports;
