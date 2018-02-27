app.controller('MainController', ['$scope', function($scope) {
    
    $scope.apptitle = 'Drexel Interactive Guide',
    $scope.categories = [
    {
            title: 'Food'
    },
    {
            title: 'Historical'
    },
    {
            title: 'Housing'
    },
    {
            title: 'Places to Explore'
    },
    {
            title: 'Campus Events'
    },
    {
            title: 'Greek Life'
    },
    {
            title: 'Convenience'
    }
        
    ]
    $scope.mainplaces = [
    {
        title: 'Baby Blues BBQ',
        img: 'img/#',
        bio: "Baby Blue's BBQ offers an array of exceptional meats and sides. Only a quick walk away from Drexel's campus. Be sure to check out the adjacent restaraunts around this gem of a place."
    },
    {
        title: 'Cucina Zapata',
        img: 'img/#',
        bio: 'words words words words words'
    },
    {
        title: 'Happy Sunshine',
        img: 'img/#',
        bio: 'words words words words words'
    },
    {
        title: 'Wahoos',
        img: 'img/#',
        bio: 'words words words words words'
    },
    {
        title: "Trader Joe's",
        img: 'img/#',
        bio: 'words words words words words'
    },
    {
        title: 'Fresh Grocer',
        img: 'img/#',
        bio: 'words words words words words'
    }
    ]
     
}]);