
let initialState = {
    avatar: ""
}

export default class AvatarReducer {

    static setAvatar(state = initialState, action) {
        let nextState
        switch (action.type) {
            case "SET_AVATAR":
                const avatar = state.avatar;
            // if (avatar.length == 0 ) {
            //     nextState = {
            //         ...state,
            //         avatar:  
            //     }   
        }
    }

}
       //     static toggleFavorite(state = initialState, action) {
//         let nextState
//         switch (action.type) {
//             case "TOGGLE_FAVORITE":
//                 const favoriteFilm = state.favoritesFilm.findIndex(item => item.id === action.value.id);
//                 if (favoriteFilm !== -1) {
//                     nextState = {
//                         ...state,
//                         favoritesFilm: state.favoritesFilm.filter((item, index) => item.id !== action.value.id)
//                     }
//                 } else {
//                     nextState = {
//                         ...state,
//                         favoritesFilm: [...state.favoritesFilm, action.value]
//                     }
//                 }
//                 return nextState || state;

//             default:
//                 return state;
//         }
//     }

