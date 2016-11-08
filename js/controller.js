var app = angular.module('kpi-app', []);

app.controller('kpi-controller', function($scope){
    $scope.data = kpiData;
})