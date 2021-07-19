import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import regisReducer from './regisReducer';
import profileReducer from './profileReducer';
import editProfileReducer from './editProfileReducer';
import passwordReducer from './passwordReducer';
import deckReducer from './deckReducer';
import cardReducer from './cardReducer';
import praticeReducer from './praticeReducer';

export const rootReducer = combineReducers({
  pratice: praticeReducer,
  card: cardReducer,
  deck: deckReducer,
  login: loginReducer,
  register: regisReducer,
  profile: profileReducer,
  editProfile: editProfileReducer,
  password: passwordReducer,
});
