"use strict";
// Store/configureStore.js
exports.__esModule = true;
var redux_1 = require("redux");
var favoriteReducer_js_1 = require("./Reducers/favoriteReducer.js");
exports["default"] = redux_1.createStore(favoriteReducer_js_1["default"].toggleFavorite);
