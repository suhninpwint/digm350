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
        
    ],
    $scope.mainplaces = [
    {
        title: 'Baby Blues BBQ',
        img: 'img/#',
        bio: "Baby Blue's BBQ offers an array of exceptional meats and sides. Only a quick walk away from Drexel's campus. Be sure to check out the adjacent restaraunts around this gem of a place.",
        num: 1
    },
    {
        title: 'Cucina Zapata',
        img: 'img/#',
        bio: 'words words words words words',
        num: 2
    },
    {
        title: 'Happy Sunshine',
        img: 'img/#',
        bio: 'words words words words words',
        num: 3
    },
    {
        title: 'Wahoos',
        img: 'img/#',
        bio: 'words words words words words',
        num: 4
    },
    {
        title: "Trader Joe's",
        img: 'img/#',
        bio: 'words words words words words',
        num: 5
    },
    {
        title: 'Fresh Grocer',
        img: 'img/#',
        bio: 'words words words words words',
        num: 6
    }
    ],
    //function that returns a string which will be the class name 
    //increments the number depending on the length of the loop
  
    
     
}]);