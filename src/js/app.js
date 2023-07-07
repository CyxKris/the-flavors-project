
const myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

// ?The configuration for the website
myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    // $locationProvider.html5Mode(true);

    // if (window.history && window.history.pushState) {
    //     $locationProvider.html5Mode({
    //         enabled: true,
    //         requireBase: true,
    //         rewriteLinks: false
    //     });
    // }
    // else {
    //     $locationProvider.html5Mode(false);
    // }

    $routeProvider
        .when('/', {
            templateUrl: '/src/views/home.html',
            controller: 'headerCtrl',
            activePage: 'home'
        })
        .when('/home', {
            templateUrl: '/src/views/home.html',
            controller: 'headerCtrl',
            activePage: 'home'
        })
        .when('/products', {
            templateUrl: '/src/views/products.html',
            controller: 'headerCtrl',
            activePage: 'products'
        })
        .when('/about', {
            templateUrl: '/src/views/about.html',
            controller: 'headerCtrl',
            activePage: 'about'
        })
        .when('/gallery', {
            templateUrl: '/src/views/gallery.html',
            controller: 'headerCtrl',
            activePage: 'gallery'
        })
        .when('/sitemap', {
            templateUrl: '/src/views/sitemap.html',
            controller: 'mainCtrl',
            activePage: 'sitemap'
        })
        .otherwise('/home');
}]);

// ?The controller for the overall website
myApp.controller(
    'mainCtrl',
    ['$scope', '$document', function ($scope, $document) {

        $scope.homeLinks = ['about', 'more', 'best', 'reviews', 'new', 'join'];

        $scope.homeLinks2 = [
            {
                'name': 'about',
                'url': '#home#about'
            },
            {
                'name': 'more',
                'url': '#home#more'
            },
            {
                'name': 'best',
                'url': '#/home#best'
            },
            {
                'name': 'reviews',
                'url': '#/home#testimonials'
            },
            {
                'name': 'new',
                'url': '#/home#new-arrivals'
            },
            {
                'name': 'join',
                'url': '#home#news'
            }
        ];

        $scope.productLinks = ['basic', 'blended', 'ethnic', 'unique'];

        $scope.productLinks2 = [
            {
                'name': 'basic',
                'url': '#basic'
            },
            {
                'name': 'blended',
                'url': '#/products#blended'
            },
            {
                'name': 'ethnic',
                'url': '#/products#ethnic'
            },
            {
                'name': 'unique',
                'url': '#/products#unique'
            }
        ];

        $scope.aboutLinks = ['who', 'what', 'mission', 'join'];

        $scope.aboutLinks2 = [
            {
                'name': 'who',
                'url': '#who'
            },
            {
                'name': 'what',
                'url': '#what'
            },
            {
                'name': 'mission',
                'url': '#more'
            },
            {
                'name': 'join',
                'url': '#join'
            }
        ];

        $scope.galleryLinks = ['spices', 'people'];

        $scope.galleryLinks2 = [
            {
                'name': 'spices',
                'url': '#products'
            },
            {
                'name': 'people',
                'url': '#other'
            }
        ];

        const theStuff = document.querySelector('.counter');

    }]
);

// ?The controller for the home page
myApp.controller(
    'homeCtrl',
    ['$scope', '$http', function ($scope, $http) {

        $http
            .get('/data/best-products.json')
            .then(function (response) {
                $scope.bestProducts = response.data;
            });
        
        $http
            .get('/data/testimonials.json')
            .then(function (response) {
                $scope.testimonials = response.data;
            });
    }]
);

// ?The controller for the product page
myApp.controller(
    'productCtrl',
    ['$scope', '$http', function ($scope, $http) {

        // Getting the categories data
        $http.get('/data/categories.json')
            .then(function (response) {
                $scope.categories = response.data;
            });
        
        // Getting the product data
        $http
            .get('/data/products.json')
            .then(function (response) {
                $scope.products = response.data;
            });
        
    }]
);

// ?The controller for the product reviews
myApp.controller(
    'reviewCtrl',
    ['$scope', '$http', function ($scope, $http) {
        // Getting the reviews data
        $http
            .get('/data/reviews.json')
            .then(function (response) {
                $scope.reviews = response.data;
                console.log($scope.reviews);
            });

        $scope.postReview = function () {

            const reviewData = {
                'name': $scope.name,
                'review': $scope.review
            };

            // Pushing the review data to the reviews array.
            $scope.reviews.push(reviewData);
            console.log($scope.reviews);

            // Clearing the form
            $scope.name = '';
            $scope.review = '';
        }
    }]
)

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
        }
    }]
);


// ?The controller for the footer
myApp.controller(
    'footerCtrl',
    ['$scope', '$http', function ($scope, $http) {
        $scope.footerLogo = '/src/images/flavors-logo-with-icon-white.svg';

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
            templateUrl: '/src/components/bottom-nav.html',
            scope: {
                page: '=',
            }
        }
    }
);

// ?The best products directive
myApp.directive(
    'bestProduct',
    function () {
        return {
            restrict: 'EA',
            templateUrl: '/src/components/best-product.html',
            scope: {
                name: '=',
                image: '=',
                blob: '=',
                rating: '=',
                link: '='
            }
        }
    }
);

// ?The Products Modal directive
myApp.directive(
    'productsModal',
    function () {
        return {
            restrict: 'EA',
            templateUrl: '/src/components/product-modal.html',
            scope: {
                selectedItem: '='
            }
        }
    }
);

