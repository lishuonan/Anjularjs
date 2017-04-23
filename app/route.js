// Ìí¼Ó·þÎñ
 app.config(['$routeProvider',function($routeProvider){
				  $routeProvider
				  .when('/',{templateUrl: 'view/dynamic.html'})
				  .when('/message',{templateUrl: 'view/message.html'})
				  .when('/introduction',{templateUrl: 'view/introduction.html'})
				  .otherwise({redirectTo:'/'});
				}])