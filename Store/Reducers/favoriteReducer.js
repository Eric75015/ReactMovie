"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var initialState = {
    favoritesFilm: []
};
var favoriteReducer = /** @class */ (function () {
    function favoriteReducer() {
    }
    favoriteReducer.toggleFavorite = function (state, action) {
        if (state === void 0) { state = initialState; }
        var nextState;
        switch (action.type) {
            case "TOGGLE_FAVORITE":
                var favoriteFilm = state.favoritesFilm.findIndex(function (item) { return item.id === action.value.id; });
                if (favoriteFilm !== -1) {
                    nextState = __assign({}, state, { favoritesFilm: state.favoritesFilm.filter(function (item, index) { return item.id !== action.value.id; }) });
                }
                else {
                    nextState = __assign({}, state, { favoritesFilm: state.favoritesFilm.concat([action.value]) });
                }
                return nextState || state;
            default:
                return state;
        }
    };
    return favoriteReducer;
}());
exports["default"] = favoriteReducer;
