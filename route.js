/* |------------------------------------------------------------------------------------Kommentar(1)
* var mainApp = angular.module("mainApp", ['ngRoute']);
* Der folgende Aufruf verwendet mit dem Aufruf ['ngRoute'] das Skript “angular-route.min.js“,
* um Ruten über angular.js definieren zu könne. 
 * Ruten sind wie Wegweiser, sie ordnen einem link eine
* den vollständigen Pfad zu einer Datei zu. 
 */
var mainApp = angular.module("mainApp", ['ngRoute','ngMaterial', 'ngMessages', 'material.svgAssetsCache']);
 
/* |------------------------------------------------------------------------------------Kommentar(2)
* mainApp.config(['$routeProvider', function ($routeProvider)
* Der Route Provider ist für die Definierung der Ruten zuständig.
* hier wird entschieden zu welchem href(link) verweis, welche Html Datei 
 * in den Body bzw. <div ng-view></div> geladen wird.
* Außerdem lassen sich an dieser Stelle, Controller zu den jeweiligen Klassen
* zuordnen.
*
* Die Controller müssen entweder wie in Kommentar(3) inline Implementiert oder
* die Schnittstellen können, wie in Kommentar(4) angegeben werden.
*/
mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
 
    when('/dashboard', {
        templateUrl: 'SpaVS/Views/dashboard.html',
        controller: 'dashboardController'
    }).
 
    when('/auftragdetails', {
        templateUrl: 'SpaVS/Views/auftragdetails.html',
        controller: 'auftragdetailsController'
    }).

    when('/auftragerstellen', {
        templateUrl: 'SpaVS/Views/auftragerstellen.html',
        controller: 'auftragerstellenController'
    }).

    when('/mitarbeiteruebersicht', {
        templateUrl: 'SpaVS/Views/mitarbeiteruebersicht.html',
        controller: 'mitarbeiteruebersichtController'
    }).

    when('/mitarbeiterdetails', {
        templateUrl: 'SpaVS/Views/mitarbeiterdetails.html',
        controller: 'mitarbeiterdetailsController'
    }).

    when('/auftragerstellenDialog', {
        templateUrl: 'SpaVS/Views/auftragerstellenDialog.html',
        controller: 'mitarbeiterdetailsController'
    }).
 
    otherwise({
        redirectTo: '/dashboard'
    });
}]);
        
//Dialog Funktionen
mainApp.controller('AppCtrl', function($scope, $mdDialog, $mdToast) {
  $scope.status = '  ';
  $scope.customFullscreen = false;

   var last = {
      bottom: false,
      top: true,
      left: false,
      right: true
    };

  $scope.toastPosition = angular.extend({},last);

  $scope.getToastPosition = function() {

    return Object.keys($scope.toastPosition)
      .filter(function(pos) { return $scope.toastPosition[pos]; })
      .join(' ');
  };


  $scope.showSimpleToast = function() {
    var pinTo = $scope.getToastPosition();

    $mdToast.show(
      $mdToast.simple()
        .textContent('Simple Toast!')
        .position(pinTo )
        .hideDelay(3000)
    );
  };

  $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };

  $scope.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Would you like to delete your debt?')
          .textContent('All of the banks have agreed to forgive you your debts.')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Please do it!')
          .cancel('Sounds like a scam');

    $mdDialog.show(confirm).then(function() {
      $scope.status = 'You decided to get rid of your debt.';
    }, function() {
      $scope.status = 'You decided to keep your debt.';
    });
  };

  $scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
      .title('What would you name your dog?')
      .textContent('Bowser is a common name.')
      .placeholder('Dog name')
      .ariaLabel('Dog name')
      .initialValue('Buddy')
      .targetEvent(ev)
      .ok('Okay!')
      .cancel('I\'m a cat person');

    $mdDialog.show(confirm).then(function(result) {
      $scope.status = 'You decided to name your dog ' + result + '.';
    }, function() {
      $scope.status = 'You didn\'t name your dog.';
    });
  };

  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'SpaVS/Views/auftragerstellenDialog.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the Burii  "' + answer + '".';
      showSimpleToast();
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };



  $scope.showPrerenderedDialog = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      contentElement: '#myDialog',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    });
  };

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }
});

 
/* |------------------------------------------------------------------------------------Kommentar(3)
* Def bzw. Deklaration und Implementierung eines Cotrollers innerhalb einer datei
*/
/*
         mainApp.controller('dashboardController', function($scope) {
            $scope.message = "Hier kommt der inhalt der Hauptseite hin!";
         });
*/
 
/* |------------------------------------------------------------------------------------Kommentar(4)
* mainApp.controller('dashboardController', dashboardController);
* Deklaration eines Cotrollers 
 * 
 * Die Implementierung kann innerhalb einer anderen Datei erfolgen, nach den 
 * Schema Trennung von Schnittstellen und Implementierung.
* Bezeichnung der Datei irrelevant. Ist aber besser wenn = Controller Name
* Einbringung des Controllers muss vor der Einbindung der Schnittstelle erfolgen
*/
mainApp.controller('dashboardController', dashboardController);
 
/* |------------------------------------------------------------------------------------Kommentar(5)
* mainApp.controller('auftragController', auftragController);
* Zur Beschreibung siehe Kommentar(4)
*/
mainApp.controller('auftragdetailsController', auftragdetailsController);
mainApp.controller('auftragerstellenController', auftragerstellenController);
mainApp.controller('mitarbeiteruebersichtController', mitarbeiteruebersichtController);
mainApp.controller('mitarbeiterdetailsController', mitarbeiterdetailsController);