import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import regisReducer from './regisReducer';
import profileReducer from './profileReducer';
import editProfileReducer from './editProfileReducer';
import passwordReducer from './passwordReducer';
import deckReducer from './deckReducer';
import cardReducer from './cardReducer';
import praticeReducer from './praticeReducer';
import categoryReducer from './categoryReducer';
import sortReducer from './sortReducer';
import filterReducer from './filterReducer';
import testReducer from './testReducer';

export const rootReducer = combineReducers({
  test: testReducer,
  pratice: praticeReducer,
  card: cardReducer,
  deck: deckReducer,
  login: loginReducer,
  register: regisReducer,
  profile: profileReducer,
  editProfile: editProfileReducer,
  password: passwordReducer,
  category: categoryReducer,
  sort: sortReducer,
  filter: filterReducer,
});
