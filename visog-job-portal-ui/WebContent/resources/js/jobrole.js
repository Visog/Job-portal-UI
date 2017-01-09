  	var app = angular.module("JOB ROLEManagement", []);

	//Controller Part
	app
			.controller(
					"JobRoleController",
					function($scope, $http) {

						$scope.JobRole = [];
						$scope.JobRoleForm = {
							// id : -1,
							name : "",
							description : "",
							
						};

						// Now load the data from server
						_refreshJobRoleData();

						// HTTP POST/PUT methods for add/edit role
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submitJobRole = function() {

							var method = "";
							var url = "";
				
							if ($scope.JobRoleForm.id == -1
									|| $scope.JobRoleForm.id == undefined) {
								// Id is absent in form data, it is create new role
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/master/jobRole/';
								$http
										.post(
												url,
												{
													"name" : $scope.jobRoleForm.name,
													"description" : $scope.jobRoleForm.description
													
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit role
								// operation
								id = $scope.jobRoleForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/master/jobRole/'
										+ id;
								$http
										.put(
												url,
												{
													"name" : $scope.jobRoleForm.name,
													"description" : $scope.jobRoleForm.description
													
												}).then(_success, _error);
								$scope.jobRole.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.Address_TypeForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete role by Id
						$scope.deleteJobRole = function(jobRole) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/master/jobRole/'
												+ Domains.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with role id
						$scope.editJobRole = function(jobRole) {

							$scope.jobRoleForm.name = jobRole.name;
							$scope.jobRoleForm.description = jobRole.description;
							
						};

						/* Private Methods */
						// HTTP GET- get all courses collection
						function _refreshJobRoleData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/master/jobRole/'
									}).then(function successCallback(response) {
								// alert(response.data.data)
								$scope.JobRole = response.data.data;
							}, function errorCallback(response) {
								console.log(response.statusText);
							});
						}

						function _success(response) {

							_refreshJobRoleData();
							_clearFormData()
						}

						function _error(response) {

							console.log(response.statusText);
						}

						// Clear the form
						function _clearFormData() {
							// $scope.genderForm.id = -1;
							$scope.jobRoleForm.name = "";
							$scope.jobRoleForm.description = "";
						

						}
						;
					});
