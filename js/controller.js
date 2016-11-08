var app = angular.module('kpi-app', []);

app.controller('kpi-controller', function($scope){
    $scope.data = kpiData;
    $scope.result = 0;
    $scope.calcWorth = function(){
        var converter = $scope.toyear/$scope.fromyear;
        $scope.result = Math.floor($scope.kronor*converter*100)/100;
    }
})