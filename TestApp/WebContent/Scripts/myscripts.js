
var myApp=angular.module('myModule',[]);

myApp.controller('mycontroller',function($scope)
			{
		$scope.message="This is my angular js app";
		});



myApp.controller('myCtrl', function($scope) {
    $scope.message= "John";
  
});


myApp.controller('empController', function($scope) {
var employee={
		
		name: "Naveen",
        email:"nreddy@nisum.com",
        dob:"11/12/1987",
        	logo: "Images/nisumlogo.png"

		
};
$scope.employee=employee;
  
});



myApp.controller('emplistcontroller', function($scope) {
	var employees=[{
			
			name: "Naveen",
	        email:"nreddy@nisum.com",
	        dob:new Date("december,11,1987"),
	        gender:"male",
	        salary:23456.890,
	        	logo: "Images/nisumlogo.png"

			
	},{
		
		name: "Srikanth",
        email:"srikanth@nisum.com",
        dob:new Date("January,1,1986"),
        gender:"male",
        salary:32456.890,
        	logo: "Images/nisumlogo.png"

		
},{
	
	name: "Srini",
    email:"srini@nisum.com",
    dob:new Date("september,11,1984"),
    gender:"male",
    salary:53456,
    	logo: "Images/nisumlogo.png"

	
}];
	$scope.employees=employees;
	$scope.rowLimit=3;
	$scope.sortcolumn=name;
	  
	});

myApp.controller("technologycontroller",function($scope){
	
	var technologies=[
	                  {name:"JAVA",likes:0,dislikes:0},
	                  {name:"SQL",likes:0,dislikes:0},
	                  {name:"ANGULARJS",likes:0,dislikes:0},
	                  {name:"JQUERY",likes:0,dislikes:0},
	                  
	                  ];
	
	$scope.technologies=technologies;
	
	$scope.incrementlikes=function(technology)
	{
		technology.likes++;
	};
	
	$scope.incrementdislikes=function(technology)
	{
		technology.dislikes++;
	};
}
		

);