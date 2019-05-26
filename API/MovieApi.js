"use strict";
exports.__esModule = true;
var MovieApi = /** @class */ (function () {
    function MovieApi() {
        var _this = this;
        this.key = "7a6c9f36f0e93228b3cd62a399484088";
        this.CallApiSearhMovie = function (query, page) {
            var resultTab;
            var url = 'https://api.themoviedb.org/3/search/movie?api_key=' + _this.key + '&language=fr&query=' + query +
                '&page=' + page;
            return _this.movieList = fetch(url).then(function (res) { return resultTab = res.json(); });
        };
    }
    MovieApi.prototype.GetFilmdetail = function (id) {
        return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.key + '&language=fr')
            .then(function (response) { return response.json(); })["catch"](function (error) { return console.error(error); });
    };
    MovieApi.GetImage = function (name) {
        return 'https://image.tmdb.org/t/p/w300' + name;
    };
    return MovieApi;
}());
exports["default"] = MovieApi;
