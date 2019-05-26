// Store/configureStore.js

import { createStore,combineReducers } from 'redux';
import * as reducers from './Reducers/favoriteReducer.js'
import setAvatar from './Reducers/AvatarReducer.js'


export default createStore(combineReducers({reducers, setAvatar}))
// export default createStore(toggleFavorite.toggleFavorite)

