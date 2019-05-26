import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Search from '../Component/Search';
import FilmDetail from '../Component/FilmDetail';
import Favorites from '../Component/Favorites';
import { isRequired } from 'react-native/Libraries/StyleSheet/ColorPropType';

// const SearchStackNavigator = createStackNavigator({
//   Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
//     screen: Search,
//     navigationOptions: {
//       title: 'Rechercher'
//     }
//   }
// })


class Navigation {

    static SearchStackNavigator = createStackNavigator({
        Search: {
            screen: Search,
            navigationOptions: {
                title: 'Rechercher'
            }
        },
        FilmDetail: {
            screen: FilmDetail
        }
    })

    static FavoritesStackNavigator = createStackNavigator({
        Favorites: {
            screen: Favorites,
            navigationOptions: {
                title: 'Favorites'
            }
        },
        FilmDetail: {
            screen: FilmDetail
        }
    })


    static MovieTabNavigator = createBottomTabNavigator({
        Search: {
            screen: Navigation.SearchStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../assets/ic_search.png')}
                        style={styles.icon}
                    />
                }
            }
        },
        Favorites: {
            screen: Navigation.FavoritesStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../assets/ic_favorite.png')}
                        style={styles.icon} />
                }
            },
        }
    },
        {
            tabBarOptions: {
                activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
                inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
                showLabel: false, // On masque les titres
                showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
            }
        }
    )

}
const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})
// export default createAppContainer(Navigation.SearchStackNavigator)
export default createAppContainer(Navigation.MovieTabNavigator)
