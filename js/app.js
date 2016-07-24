var filmsApp = angular.module('films', ['ngDialog', 'googlechart', 'ngRoute', 'filmsControllers', 'filmsFactories', 'filmsDirectives']);


//  Routing Page
filmsApp.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/films-list',{
        templateUrl: '/top-films/tpl/films-list.html',
        controller: 'FilmsList'
    });
    $routeProvider.when('/favorites',{
        templateUrl: '/top-films/tpl/favorites.html',
        controller: 'FavouritesList'
    });
    $routeProvider.when('/chart',{
        templateUrl: '/top-films/tpl/chart.html',
        controller: 'ChartList'
    });
    $routeProvider.otherwise({
        redirectTo: '/index.html'
    });

});



