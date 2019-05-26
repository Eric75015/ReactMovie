"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_1 = require("react-native");
var react_navigation_1 = require("react-navigation");
var Search_1 = require("../Component/Search");
var FilmDetail_1 = require("../Component/FilmDetail");
var Favorites_1 = require("../Component/Favorites");
// const SearchStackNavigator = createStackNavigator({
//   Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
//     screen: Search,
//     navigationOptions: {
//       title: 'Rechercher'
//     }
//   }
// })
var Navigation = /** @class */ (function () {
    function Navigation() {
    }
    Navigation.SearchStackNavigator = react_navigation_1.createStackNavigator({
        Search: {
            screen: Search_1["default"],
            navigationOptions: {
                title: 'Rechercher'
            }
        },
        FilmDetail: {
            screen: FilmDetail_1["default"]
        }
    });
    Navigation.FavoritesStackNavigator = react_navigation_1.createStackNavigator({
        Favorites: {
            screen: Favorites_1["default"],
            navigationOptions: {
                title: 'Favorites'
            }
        },
        FilmDetail: {
            screen: FilmDetail_1["default"]
        }
    });
    Navigation.MovieTabNavigator = react_navigation_1.createBottomTabNavigator({
        Search: {
            screen: Navigation.SearchStackNavigator,
            navigationOptions: {
                tabBarIcon: function () {
                    return <react_native_1.Image source={require('../assets/ic_search.png')} style={styles.icon}/>;
                }
            }
        },
        Favorites: {
            screen: Navigation.FavoritesStackNavigator,
            navigationOptions: {
                tabBarIcon: function () {
                    return <react_native_1.Image source={require('../assets/ic_favorite.png')} style={styles.icon}/>;
                }
            }
        }
    }, {
        tabBarOptions: {
            activeBackgroundColor: '#DDDDDD',
            inactiveBackgroundColor: '#FFFFFF',
            showLabel: false,
            showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
        }
    });
    return Navigation;
}());
var styles = react_native_1.StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
});
// export default createAppContainer(Navigation.SearchStackNavigator)
exports["default"] = react_navigation_1.createAppContainer(Navigation.MovieTabNavigator);
