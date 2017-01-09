
var app = angular.module("EducationDetails", []);
	//Controller Part
	app
			.controller(
					"EducationDetailsController",
					function($scope, $http) {

						$scope.educationdetails = [];
						$scope.educationdetailsForm = {
							// id : -1,
							user : "",
							educationtype:"",
							courses : "",
							specialization : "",
							university:"",
							durationfrom:"",
							durationto:""
						};

						// Now load the data from server
						_refreshEducationDetailsData();

						// HTTP POST/PUT methods for add/edit role
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submiteducationdetails = function() {

							var method = "";
							var url = "";
							// alert($scope.educationdetailsForm.id);
							if ($scope.educationdetailsForm.id == -1
									|| $scope.educationdetailsForm.id == undefined) {
								// Id is absent in form data, it is create new role
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/educationdetails/';
								$http
										.post(
												url,
												{
													"user" : $scope.educationdetailsForm.user,
													"educationtype" : $scope.educationdetailsForm.educatintype,
													"courses" : $scope.educationdetailsForm.courses,
													"specialization" : $scope.educationdetailsForm.specialization,
													"university" : $scope.educationdetailsForm.university,
													"durationfrom" : $scope.educationdetailsForm.durationfrom,
													"durationto" : $scope.educationdetailsForm.durationto
													
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit role
								// operation
								id = $scope.educationdetailsForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/tranaction/educationdetails/'
										+ id;
								$http
										.put(
												url,
												{
													"user" : $scope.educationdetailsForm.user,
													"educationtype" : $scope.educationdetailsForm.educatintype,
													"courses" : $scope.educationdetailsForm.courses,
													"specialization" : $scope.educationdetailsForm.specialization,
													"university" : $scope.educationdetailsForm.university,
													"durationfrom" : $scope.educationdetailsForm.durationfrom,
													"durationto" : $scope.educationdetailsForm.durationto
												}).then(_success, _error);
								$scope.educationdetailsForm.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.genderForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete role by Id
						$scope.deleteEducationDetails = function(educationdetails) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/educationdetails/'
												+ educationdetails.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with role id
						$scope.editEducationDetails = function(educationdetails) {

							$scope.educationdetailsForm.user = educationdetails.user;
							$scope.educationdetailsForm.educationtype = educationdetails.educationtype;
							$scope.educationdetailsForm.courses = educationdetails.courses;
							$scope.educationdetailsForm.specialization =educationdetails.specialization;
							$scope.educationdetailsForm.university = educationdetails.university;
							$scope.educationdetailsForm.durationfrom = educationdetails.durationfrom;
							$scope.educationdetailsForm.durationto =educationdetails.durationto;
						};

						/* Private Methods */
						// HTTP GET- get all countries collection
						function _refreshEducationDetailsData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/educationdetails/'
									}).then(function successCallback(response) {
								// alert(response.data.data)
								$scope.educationdetails = response.data.data;
							}, function errorCallback(response) {
								console.log(response.statusText);
							});
						}

						function _success(response) {

							_refreshEducationDetailsData();
							_clearFormData()
						}

						function _error(response) {

							console.log(response.statusText);
						}

						// Clear the form
						function _clearFormData() {
							// $scope.genderForm.id = -1;
							$scope.educationdetailsForm.user = "";
							$scope.educationdetailsForm.educationtype= "";
							$scope.educationdetailsForm.courses= "";
							$scope.educationdetailsForm.specialization = "";
							$scope.educationdetailsForm.university= "";
							$scope.educationdetailsForm.durationfrom= "";
							$scope.educationdetailsForm.durationto= "";

						}
						;
					});
