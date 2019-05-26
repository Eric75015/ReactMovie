

import React from 'react'
import { FlatList, StyleSheet, View, TextInput, Button, ActivityIndicator } from 'react-native'
import FilmItem from './FilmItem'
import FilmList from './FilmList'
import MovieApi from '../API/MovieApi'
import { connect } from 'react-redux'


class Search extends React.Component {
    
  constructor(props){
    super(props);
    this.movieList = new MovieApi();
    this.SearchText = "";
    this.page = 0;
    this.totalpage = 0;
    this.state = {
      MovieListdisplay: [],
      isLoading: false
    }
    this._loadMovies = this._loadMovies.bind(this);
  }
  
  _loadMovies() {
    if(this.SearchText.length > 0){
      this.setState({isLoading : true});
      this.movieList.CallApiSearhMovie(this.SearchText,this.page+1).then(data => {
         
        this.page = data.page;
        this.totalpage = data.total_pages;
        this.setState({
          // MovieListdisplay : data.results, before 
          MovieListdisplay : [...this.state.MovieListdisplay, ...data.results],
          isLoading : false
        });
      });
    }
     
  }

  _displayLoading(){
    if(this.state.isLoading)
    {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _SearchText(text){
    this.SearchText = text;
  }

  _SearchFilms(){

    this.page = 0;
    this.totalpage = 0;
    this.setState({
      MovieListdisplay: []
      }, () => {
      this._loadMovies();      
      }
    )
  }

  _displayDetailForFilm = (idFilm) => {
    this.props.navigation.navigate("FilmDetail",{idFilm: idFilm});
  }

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} 
        placeholder='Titre du film'
        onChangeText={(text) => {this._SearchText(text);}}
        onSubmitEditing={() => this._SearchFilms()}
        />
        <Button title='Rechercher' onPress={() => this._SearchFilms()} />
         <FilmList
          films={this.state.MovieListdisplay} // C'est bien le component Search qui récupère les films depuis l'API et on les transmet ici pour que le component FilmList les affiche
          navigation={this.props.navigation} // Ici on transmet les informations de navigation pour permettre au component FilmList de naviguer vers le détail d'un film
          loadFilms={this._loadMovies} // _loadFilm charge les films suivants, ça concerne l'API, le component FilmList va juste appeler cette méthode quand l'utilisateur aura parcouru tous les films et c'est le component Search qui lui fournira les films suivants
          page={this.page}
          totalPages={this.totalPage} // les infos page et totalPages vont être utile, côté component FilmList, pour ne pas déclencher l'évènement pour charger plus de film si on a atteint la dernière page
          favoritesList={false}
        /> 
        {/*         
         <FlatList
          data={this.state.MovieListdisplay}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => 
            <FilmItem
             films={item} 
             displayDetailForFilm={this._displayDetailForFilm}
             isFilmFavorie={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
             displayDetailForFilm={this._displayDetailForFilm}
             />
        } 
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if(this.page < this.totalpage) {
              this._loadMovies();
            }
          }}
          extraData={this.props.favoritesFilm}
          /> */}
          {this._displayLoading()}
      </View>

    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Search
