//return object of API
interface movie {
    Id: number,
    Description  : string,
    Vote_Average : number,
    Release_date : Date
}

export default  class MovieApi {


    key : string = "7a6c9f36f0e93228b3cd62a399484088";
    movieList : Promise<any>;


    CallApiSearhMovie = (query : string, page : string ) : Promise<any> => {
        let resultTab;
        const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + this.key + '&language=fr&query=' + query + 
        '&page=' + page ;
        return this.movieList =  fetch(url).then((res) => resultTab = res.json());
    }

    static GetImage = (name: string) : string => {
        console.log(name);
        console.log('test');
        return  'https://image.tmdb.org/t/p/w300' + name;
    }

    GetFilmdetail(id){
         
        return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.key   + '&language=fr')
        .then((response) => response.json())
        .catch((error) => console.error(error));
    } 



}