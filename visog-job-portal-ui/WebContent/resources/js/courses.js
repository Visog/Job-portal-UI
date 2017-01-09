  	var app = angular.module("Courses", []);

	//Controller Part
	app
			.controller(
					"CoursesController",
					function($scope, $http) {

						$scope.Courses = [];
						$scope.CoursesForm = {
							// id : -1,
							name : "",
							description : "",
							
						};

						// Now load the data from server
						_refreshCoursesData();

						// HTTP POST/PUT methods for add/edit role
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submitCourses = function() {

							var method = "";
							var url = "";
				
							if ($scope.CoursesForm.id == -1
									|| $scope.CoursesForm.id == undefined) {
								// Id is absent in form data, it is create new role
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/master/Courses/';
								$http
										.post(
												url,
												{
													"name" : $scope.CoursesForm.name,
													"description" : $scope.CoursesForm.description
													
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit role
								// operation
								id = $scope.CoursesForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/master/Courses/'
										+ id;
								$http
										.put(
												url,
												{
													"name" : $scope.Courses.name,
													"description" : $scope.Courses.description
													
												}).then(_success, _error);
								$scope.Courses.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.Address_TypeForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete role by Id
						$scope.deleteCourses = function(Courses) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/master/Courses/'
												+ Courses.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with role id
						$scope.editCourses = function(courses) {

							$scope.CoursesForm.name = Courses.name;
							$scope.CoursesForm.description = Courses.description;
							
						};

						/* Private Methods */
						// HTTP GET- get all courses collection
						function _refreshCoursesData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/master/Courses/'
									}).then(function successCallback(response) {
								// alert(response.data.data)
								$scope.Courses = response.data.data;
							}, function errorCallback(response) {
								console.log(response.statusText);
							});
						}

						function _success(response) {

							_refreshCoursesData();
							_clearFormData()
						}

						function _error(response) {

							console.log(response.statusText);
						}

						// Clear the form
						function _clearFormData() {
							// $scope.genderForm.id = -1;
							$scope.CoursesForm.name = "";
							$scope.CoursesForm.description = "";
						

						}
						;
					});
