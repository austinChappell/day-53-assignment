import { createStore } from 'redux';

const initialState = {
  data: [],
  title: '',
  author: '',
  body: ''
}

const reducer = (state = initialState, action) => {
  console.log('reducer running', action);
  switch(action.type) {
    case 'GET_DATA':
      return Object.assign({}, state, { data: action.data });
    case 'INPUT_CHANGE':
      const updateObj = {};
      updateObj[action.input] = action.value;
      return Object.assign({}, state, updateObj);
    case 'PUBLISH_POST':
      return Object.assign({}, state, { data: state.data.concat(action.data), title: '', author: '', body: '' });
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
