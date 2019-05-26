// Components/Favorites.js

import React from 'react'
import { FlatList, StyleSheet, View, TextInput, Button, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import FilmList from './FilmList'
import Avatar from './Avatar';
class Favorites extends React.Component {


  render() {
    // const FavoritesFilmList = this.props.favoritesFilm; 
    return (
      <View style={styles.main_container}>
        <View style={styles.avatar_container}>
          <Avatar />
        </View>
        <FilmList
          films={this.props.favoritesFilm} // C'est bien le component Search qui récupère les films depuis l'API et on les transmet ici pour que le component FilmList les affiche
          navigation={this.props.navigation} // Ici on transmet les informations de navigation pour permettre au component FilmList de naviguer vers le détail d'un film
          favoritesList={true}
        />
      </View>


    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  avatar_container: {
    alignItems: 'center'
  }
})


const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}


export default connect(mapStateToProps)(Favorites)

// export default Favorites