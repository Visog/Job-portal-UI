var app = angular.module("EmployerJobseekerManagement", []);
	//Controller Part
	app
			.controller(
					"EmployerJobseekerController",
					function($scope, $http) {

						$scope.employerjobseeker = [];
						$scope.employerjobseekerForm = {
							// id : -1,
							employer : "",
							jobseeker : "",
							status : "",
							actiondone : ""
						};

						// Now load the data from server
						_refreshEmployerJobseekerData();

						// HTTP POST/PUT methods for add/edit role
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submitEmployerJobseeker = function() {

							var method = "";
							var url = "";
							// alert($scope.genderForm.id);
							if ($scope.employerjobseekerForm.id == -1
									|| $scope.employerjobseekerForm.id == undefined) {
								// Id is absent in form data, it is create new role
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/employerjobseeker/';
								$http
										.post(
												url,
												{
													"employer" : $scope.employerjobseekerForm.employer,
													"jobseeker" : $scope.employerjobseekerForm.jobseeker,
													"status" : $scope.employerjobseekerForm.status,
													"actiondone" : $scope.employerjobseekerForm.actiondone
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit role
								// operation
								id = $scope.employerjobseekerForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/employerjobseeker/'
										+ id;
								$http
										.put(
												url,
												{

													"employer" : $scope.employerjobseekerForm.employer,
													"jobseeker" : $scope.employerjobseekerForm.jobseeker,
													"status" : $scope.employerjobseekerForm.status,
													"actiondone" : $scope.employerjobseekerForm.actiondone
												}).then(_success, _error);
								$scope.employerjobseekerForm.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.genderForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete role by Id
						$scope.deleteEmployerJobseeker = function(employerjobseeker) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/employerjobseeker/'
												+ employerjobseeker.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with role id
						$scope.editEmployerJobseeker = function(employerjobseeker) {

							$scope.employerjobseekerForm.employer = employerjobseeker.employer;
							$scope.employerjobseekerForm.jobseeker = employerjobseeker.jobseeker;
							$scope.employerjobseekerForm.status = employerjobseeker.actiondone;
							$scope.employerjobseekerForm.actiondone = employerjobseeker.actiondone;
							$scope.employerjobseekerForm.id =employerjobseeker.id;
						};

						/* Private Methods */
						// HTTP GET- get all countries collection
						function _refreshEmployerJobseekerData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/employerjobseeker/'
									}).then(function successCallback(response) {
								// alert(response.data.data)
								$scope.employerjobseekers = response.data.data;
							}, function errorCallback(response) {
								console.log(response.statusText);
							});
						}

						function _success(response) {

							_refreshEmployerJobseekerData();
							_clearFormData()
						}

						function _error(response) {

							console.log(response.statusText);
						}

						// Clear the form
						function _clearFormData() {
							// $scope.genderForm.id = -1;
							$scope.employerjobseekerForm.employer = "";
							$scope.employerjobseekerForm.jobseeker = "";
							$scope.employerjobseekerForm.status = "";
							$scope.employerjobseekerForm.actiondone = "";

						}
						;
					});