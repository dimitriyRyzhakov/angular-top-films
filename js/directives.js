var filmsApp = angular.module('filmsDirectives', []);
filmsApp.directive('addFavorite', function(){
    return {
        restrict: "A",
        link: function(scope, element, attributes){
            element.on('change', function(){
                var idFavorite = attributes.addFavorite;
                localStorage.setItem(scope.films[idFavorite].idIMDB, scope.films[idFavorite].status);
            });
        }
    }
});


