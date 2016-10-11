/* |------------------------------------------------------------------------------------Kommentar(1)
* var mainApp = angular.module("mainApp", ['ngRoute']);
* Der folgende Aufruf verwendet mit dem Aufruf ['ngRoute'] das Skript “angular-route.min.js“,
* um Ruten über angular.js definieren zu könne. 
 * Ruten sind wie Wegweiser, sie ordnen einem link eine
* den vollständigen Pfad zu einer Datei zu. 
 */
var mainApp = angular.module("mainApp", ['ngRoute']);
 
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
 
    otherwise({
        redirectTo: '/dashboard'
    });
}]);
 
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