angular.module('testGenerator', [
        'exerciseDB',
        'ngRoute',
    ])

    .factory('util', [function () {
        return {
            randomNumberByBase: function(base){
                return (Math.ceil(Math.random()*100) % (base || 10));
            },
            getQueryParams: function(url){
                var qs = url.split('?')[1];
                var qsObj = {};
                var qsParams = qs.split('&');
                for(var k=0 ; k<qsParams.length; k++){
                    var keyValue = qsParams[k].split('=');
                    qsObj[keyValue[0]] = keyValue[1];
                }
                return qsObj;
            },
            getUniqueRandomNumbers: function(base, count){
                var randNumbers = [];
                count = count || 2;
                //Generate 2 unique random number greter than Zero
                var k = 0;
                while(true){
                    var randomNumber = this.randomNumberByBase(base);
                    if(randomNumber !== 0 && $.inArray(randomNumber, randNumbers)){
                        randNumbers.push(randomNumber);
                        k += 1;
                        if(k === count)
                            break;
                    }
                }
                return randNumbers;
            }
        };
    }])

    .factory('iconFactory', ['util', function (util) {
        var icons = [
            'icon-apple',
            'icon-phone',
            'icon-key',
            'icon-locked',
            'icon-umbrella',
            'icon-cube',
            'icon-home',
            'icon-spades',
            'icon-smiley3',
            'icon-star3',
            'icon-bowling'
        ];
        return function(){
            return{
                getRandomIcons: function(){
                    var randIndex = util.randomNumberByBase(icons.length);
                    return icons[randIndex-1];
                }
            };
        };
    }])

    .filter('getNumberAsArray', function(){
        return function(counter){
            var arr=[];
            for(i=0; i<counter;i++){
                arr.push(i);
            }
            return arr;
        };
    })

    .factory('numberListGeneratorFAC', [function () {
        return {
            getNumbersByLimit: function(x,y){
                var _arr = [];
                for(var k=x; k<=y; k++){
                    _arr.push(k);
                }
                return _arr;
            }
        };
    }])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/test/:moduleName/:testId', {
            templateUrl: '/testpreview.html',
            controller: 'testGenerationCtrl'
        });
    }])

    .controller('indexCtrl', ['$scope', 'exerciseDbFAC','$window',
        function ($scope, exerciseDbFAC, $window) {
        $scope.exerciseDB = exerciseDbFAC();
    }])

    .controller('testGenerationCtrl', ['$scope', '$routeParams', 'exerciseDbFAC', 'iconFactory','numberListGeneratorFAC','util',
        function ($scope, $routeParams, exerciseDbFAC, iconFactory, numberListGeneratorFAC, util) {
            var params = angular.copy($routeParams);
            var exercises = exerciseDbFAC()[params.moduleName];

            angular.forEach(exercises, function(exercise){
                if(exercise.id == params.testId){
                    $scope.test = angular.copy(exercise);
                    $scope.test.module = params.moduleName;
                    $scope.$parent.test = angular.copy($scope.test);
                }
            });

            //TEST CONFIG
            var TOTAL_EXERCISES = 10;
            var TOTAL_MISSING_NUMBERS = 8;
            var MIN_NUMBER = 1;
            var MAX_NUMBER = 20;

            var getNumberSeries = function(){
                var numberSeries = [];
                for(var j=0; j<TOTAL_EXERCISES; j++){
                    var numberArray = numberListGeneratorFAC.getNumbersByLimit(MIN_NUMBER, MAX_NUMBER);
                    for(var k=0; k<TOTAL_MISSING_NUMBERS; k++){
                        var randIndex = util.randomNumberByBase(MAX_NUMBER);
                        if(randIndex === MIN_NUMBER-1 || randIndex === MAX_NUMBER-1){
                            k--;
                            continue;
                        }
                        numberArray[randIndex] = '';
                    }
                    numberSeries.push($scope.test.id === 1 ? numberArray : numberArray.reverse());
                }
                return numberSeries;
            };

            switch($scope.test.id){
                case 1:
                    //ascending number
                case 2:
                    //Descending number
                    $scope.test.data = getNumberSeries();
                    break;
                case 4:
                    //Count and write
                    for(var k=0; k<TOTAL_EXERCISES; k++){
                        $scope.test.data = $scope.test.data || [];
                        $scope.test.data.push({
                            icon_first: iconFactory().getRandomIcons(),
                            count_first: util.randomNumberByBase(MAX_NUMBER) + 1,
                        });
                    }
                    break;
                case 5:
                    //Less/Greater Number comparision
                    for(var j = 0; j<TOTAL_EXERCISES; j++){
                        var randNumbers = util.getUniqueRandomNumbers(MAX_NUMBER, 4);
                        $scope.test.data = $scope.test.data || [];
                        $scope.test.data.push({
                            number1: randNumbers[0],
                            number2: randNumbers[1],
                            number3: randNumbers[2],
                            number4: randNumbers[3]
                        });
                    }
                    break;
                case 6:
                    //Less/Greater, Count and Compare images
                    for(var j = 0; j<TOTAL_EXERCISES; j++){
                        var randNumbers = util.getUniqueRandomNumbers(MAX_NUMBER, 2);
                        var randomIcon = iconFactory().getRandomIcons();
                        $scope.test.data = $scope.test.data || [];
                        $scope.test.data.push({
                            icon_first: randomIcon,
                            count_first: randNumbers[0],
                            icon_second: randomIcon,
                            count_second: randNumbers[1]
                        });
                    }
            }
        }
    ]);