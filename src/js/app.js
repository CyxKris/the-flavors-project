
const myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: './src/views/home.html',
            controller: 'headerCtrl'
        })
        .when('/products', {
            templateUrl: './src/views/products.html',
            controller: 'headerCtrl'
    }).otherwise('/home');
}]);

// The controller for the overall website
myApp.controller(
    'mainCtrl',
    ['$scope', function ($scope) {
        
    }]
);

// The controller for the home page
myApp.controller(
    'homeCtrl',
    ['$scope', function ($scope) {
        $scope.imageSrc = 'src/images/products/basic-seasoning-box.webp';
    }]
);

// The controller for the header
myApp.controller(
    'headerCtrl',
    ['$scope', '$window', '$route', function ($scope, $window, $route) {
        $scope.route = $route;

        $scope.mobileView = false;

        // Getting the device width
        function getDeviceWidth () {
            $scope.deviceWidth = $window.innerWidth;
        }
        
        getDeviceWidth();

        // Determining the device view
        function getView() {
            if ($scope.deviceWidth <= 768) {
                $scope.mobileView = true;
            } else {
                $scope.mobileView = false;
            }
        }

        getView();

        // Watch for window resize events to update the width dynamically
        angular.element($window).on('resize', function() {
            $scope.$apply(function () {
                getDeviceWidth();
                getView();
            });
        });
    }]
);

// The controller for the mobile navigation
myApp.controller(
    'mobileCtrl',
    ['$scope', function ($scope) {
        const mobileNav = document.querySelector('#mobile-nav');
        const body = document.body;

        $scope.toggleMenu = function () {
            mobileNav.classList.toggle('show');
            body.classList.toggle('no-scroll');
            console.log('toggle menu is working');
        }
    }]
);

// The controller for the footer
myApp.controller(
    'footerCtrl',
    ['$scope', '$http', function ($scope, $http) {
        $scope.footerLogo = 'src/images/flavors-logo-with-icon-white.svg';

        // ?Getting user's location
        const getLocation = () => {

            // The options
            let locationOptions = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            // *The success function
            function locationSuccess(position) {
                let latitude = position.coords.latitude.toString();
                let longitude = position.coords.longitude.toString();
                var coordinates = [latitude, longitude];

                getAddress(coordinates);
            }

            // !The error function
            function locationError(error) {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        alert("You denied access to Geolocation 🥺");
                        break;
                    
                    case error.POSITION_UNAVAILABLE:
                        alert("Your position is not available 🤷");
                        break;
                    
                    case error.TIMEOUT:
                        alert("The request took too long. Timeout Error ⌛");
                        break;
                    
                    case error.UNKNOWN_ERROR:
                        alert("An unknown error occurred 🤷");
                        break;
                    
                    default:
                        alert("An unknown error occurred 🤷");
                };
            };

            if (navigator.geolocation) {
                // navigator.geolocation.watchPosition(locationSuccess, locationError);
                navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
            };
        };

        // Step 2: Get city name
        function getAddress(coordinates) {

            var lat = coordinates[0];
            var lng = coordinates[1];

            $http.get(`https://eu1.locationiq.com/v1/reverse?key=pk.f1cec518709cd90d4b291dd3f3d9652d&lat=${coordinates[0]}&lon=${coordinates[1]}&format=json`)
                .then(function (response) {

                    var theAddress = response.data.address;

                    $scope.country = theAddress.country;
                    $scope.state = theAddress.state;
                    $scope.city = theAddress.city;

                });
        }

        getLocation();
    }]
);


myApp.directive(
    'bottomNavigation',
    function () {
        return {
            restrict: 'EA',
            templateUrl: 'src/components/bottom-nav.html'
        }
    }
);
