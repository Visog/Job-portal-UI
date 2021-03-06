	var app = angular.module("Education_Type", []);

	//Controller Part
	app
			.controller(
					"EducationTypeController",
					function($scope, $http) {

						$scope.EducationType = [];
						$scope.EducationTypeForm = {
							// id : -1,
							name : "",
							description : "",
							
						};

						// Now load the data from server
						_refreshEducation_TypeData();

						// HTTP POST/PUT methods for add/edit role
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submitEducation_Type = function() {

							var method = "";
							var url = "";
				
							if ($scope.EducationTypeForm.id == -1
									|| $scope.EducationTypeForm.id == undefined) {
								// Id is absent in form data, it is create new role
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/master/Education_Type/';
								$http
										.post(
												url,
												{
													"name" : $scope.EducationTypeForm.name,
													"description" : $scope.EducationTypeForm.description
													
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit role
								// operation
								id = $scope.EducationTypeForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/master/Education_Type/'
										+ id;
								$http
										.put(
												url,
												{
													"name" : $scope.EducationType.name,
													"description" : $scope.EducationType.description
													
												}).then(_success, _error);
								$scope.AddressType.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.Education_TypeForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete role by Id
						$scope.deleteEducationType = function(educationtype) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/master/Education_Type/'
												+ educationtype.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with role id
						$scope.editEducationType = function(educationtype) {

							$scope.EducationTypeForm.name = EducationType.name;
							$scope.EducationTypeForm.description = EducationType.description;
							
						};

						/* Private Methods */
						// HTTP GET- get all EducationType collection
						function _refreshEducationTypeData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/master/Education_Type/'
									}).then(function successCallback(response) {
								// alert(response.data.data)
								$scope.EducationType = response.data.data;
							}, function errorCallback(response) {
								console.log(response.statusText);
							});
						}

						function _success(response) {

							_refreshEducationTypeData();
							_clearFormData()
						}

						function _error(response) {

							console.log(response.statusText);
						}

						// Clear the form
						function _clearFormData() {
							// $scope.genderForm.id = -1;
							$scope.EducationTypeForm.name = "";
		  					$scope.EducationTypeForm.description = "";
						

						}
						;
					});
