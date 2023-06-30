
const myApp = angular.module("myApp", ["ngRoute"]);

// ?The configuration for the website
myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: './src/views/home.html',
            controller: 'headerCtrl',
            activePage: 'home'
        })
        .when('/products', {
            templateUrl: './src/views/products.html',
            controller: 'headerCtrl',
            activePage: 'products'
        })
        .when('/about', {
            templateUrl: './src/views/about.html',
            controller: 'headerCtrl',
            activePage: 'about'
        })
        .when('/gallery', {
            templateUrl: './src/views/gallery.html',
            controller: 'headerCtrl',
            activePage: 'gallery'
        })
        .otherwise('/home');
}]);

// ?The controller for the overall website
myApp.controller(
    'mainCtrl',
    ['$scope', function ($scope) {

        $scope.homeLinks = ['about', 'best', 'more', 'news'];

        $scope.productLinks = ['basic', 'blended', 'ethnic', 'unique'];

        $scope.aboutLinks = ['intro', 'services', 'more'];

        $scope.galleryLinks = ['people', 'spices', 'places'];

        // function performSmoothScroll(target) {
        //     lenis.scrollTo(target);
        // }

        // $scope.scrollToLink = function (link, page) {
        //     var target = '#!' + page + '#' + link;
        //     console.log(target);
        //     console.log(typeof target);
        //     // lenis.scrollTo(target);
        //     performSmoothScroll(target);
        // };

        // $scope.scrollToHeader = function (page) {
        //     var target = '#!' + page + '#header';
        //     performSmoothScroll(target);
        // };

    }]
);

// ?The controller for the home page
myApp.controller(
    'homeCtrl',
    ['$scope', function ($scope) {
        $scope.imageSrc = 'src/images/products/basic-seasoning-box.webp';
    }]
);

// ?The controller for the product page
myApp.controller(
    'productCtrl',
    ['$scope', '$http', function ($scope, $http) {

        // *Getting the products data
        $http.get('data/categories.json')
            .then(function (response) {
                $scope.categories = response.data;
                console.log("🚀 ~ file: app.js:83 ~ $scope.categories:", $scope.categories)
                console.log("name");
            });
    }]
);

// ?The controller for the header
myApp.controller(
    'headerCtrl',
    ['$scope', '$route', '$window', function ($scope, $route, $window) {
        $scope.$route = $route;

        $scope.mobileView = false;

        // *Getting the device width
        function getDeviceWidth () {
            $scope.deviceWidth = $window.innerWidth;
        }
        
        getDeviceWidth();

        // *Determining the device view
        function getView() {
            // previous: 768
            if ($scope.deviceWidth <= 1024) {
                $scope.mobileView = true;
            } else {
                $scope.mobileView = false;
            }
        }

        getView();

        // *Watch for window resize events to update the width dynamically
        angular.element($window).on('resize', function() {
            $scope.$apply(function () {
                getDeviceWidth();
                getView();
            });
        });
    }]
);

// ?The controller for the mobile navigation
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

// ?The controller for the bottom navigation
// myApp.controller(
//     'bottomNavCtrl',
//     ['$scope', '$http', function ($scope, $http) {

//         // Getting the bottom navigation data
//         $http.get('data/bottom-nav.json')
//             .then(function (response) {
//                 console.log("This is the response from the bottom navigation data");
//                 console.log(response);
//                 $scope.nav = response.data;
//                 console.log($scope.nav);
                
                

//                 $scope.homeLinks = $scope.nav[0].links;
//                 console.log($scope.homeLinks);
//             });
//     }]
// );

// ?The controller for the footer
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

// ?The bottom navigation directive
myApp.directive(
    'bottomNavigation',
    function () {
        return {
            restrict: 'EA',
            templateUrl: 'src/components/bottom-nav.html',
            scope: {
                page: '=',
                links: '='
            }
            // link: function (scope, elem, attrs) {
                
            // }
        }
    }
);

