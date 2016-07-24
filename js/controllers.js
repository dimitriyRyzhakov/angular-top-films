var filmsApp = angular.module('filmsControllers', []);



filmsApp.controller('MainList', function($scope, $rootScope, $location, ngDialog){

    $scope.open = function (img) {
        ngDialog.open({
            template: '<p><img src='+img+' /></p>',
            plain: true
        });
    };

    $scope.addText = function(status){
        return status ? "Remove from favorites" : "Add to favorites";
    };


    localStorage.setItem("bar", "test test");
    $scope.visibility = true;


    function changeUrl(url){
        $location.path(url);
    }

    $scope.showMain = changeUrl.bind(this, '/films-list');
    $scope.showFavorites = changeUrl.bind(this, '/favorites');
    $scope.showChart = changeUrl.bind(this, '/chart');


});

function jsonList($scope, films){
    films.loadMain(function (cache) {
        $scope.films = cache;
    });
}

filmsApp.controller('FilmsList', function($scope, films) {
    jsonList($scope, films);
});

filmsApp.controller('FavouritesList', function($scope, films){
    jsonList($scope, films);
});

filmsApp.controller('ChartList', function($scope, films){
    $scope.chartData = [];

    films.loadMain(function(cache){
        $scope.films = cache;
        angular.forEach($scope.films, function(value, key){
            $scope.chartData.push([value.title, +value.year]);
        });
        $scope.chartData.sort(function(a, b)
        {
            if (a[1] == b[1]) { return 0; }
            if (a[1] > b[1])
            {
                return 1;
            }
            else
            {
                return -1;
            }
        });
    });

    $scope.chartData.push(['Film', 'year']);

    $scope.chartObject = {
        "type": "LineChart",
        "displayed": false,
        "data": $scope.chartData,
        "options": {
            "title": "Films",
            "isStacked": "true",
            "fill": 50,
            "displayExactValues": true,
            "vAxis": {
                "title": "Years",
                "gridlines": {
                    "count": 20
                }
            },
            "hAxis": {
                "title": "Films"
            },
            "tooltip": {
                "isHtml": false
            }
        },
        "formatters": {},
        "view": {}
    }
});
