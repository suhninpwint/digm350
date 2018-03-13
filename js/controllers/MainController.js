var className = 'seq-step';
var num = 1;
var numString = '';
var fullName = '';

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
        bio: 'Baby Blues BBQ offers an array of exceptional meats and sides. Only a quick walk away from Drexels campus. Be sure to check out the adjacent restaraunts around this gem of a place',
        num: '1'
    },
    {
        title: 'Cucina Zapata',
        img: 'img/#',
        bio: 'words words words words words',
        num: '2'
    },
    {
        title: 'Happy Sunshine',
        img: 'img/#',
        bio: 'words words words words words',
        num: '3'
    },
    {
        title: 'Wahoos',
        img: 'img/#',
        bio: 'words words words words words',
        num: '4'
    },
    {
        title: "Trader Joe's",
        img: 'img/#',
        bio: 'words words words words words',
        num: '5'
    },
    {
        title: 'Fresh Grocer',
        img: 'img/#',
        bio: 'words words words words words',
        num: '6'
    }
    ],
    $scope.placesID = function(){

        for(i=1; i< $scope.mainplaces.length; i++){
            numSting = num.toString();
            fullName = className + numString;
            num++;
            return fullName;
        }
        
    }
}]);