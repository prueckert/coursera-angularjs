(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch = "";
  $scope.lunchMsg="";

  $scope.checkLunch = function () {
    console.log($scope.lunch);
    if ($scope.lunch == "") {
      $scope.lunchMsg = "Please enter data first";
      return;
    }
    var lunchItems = $scope.lunchMsg.split(",");
    $scope.lunchMsg = lunchItems.length > 3 ? "Too much!" : "Enjoy!";
  };
}

})();
