
	var app = angular.module("Employer", []);

	//Controller Part
	app
			.controller(
					"EmployerController",
					function($scope, $http) {

						$scope.employer = [];
						$scope.employerForm = {
							// id : -1,
							firstname : "",
							middlename : "",
							lastname : "",
								dob : "",
								gender : "",
								email : "",
									alternateemail : "",
									password : "",
									confirmpassword : "",
										mobile : "",
										landline : ""
						};

						// Now load the data from server
						_refreshEmployerData();

						// HTTP POST/PUT methods for add/edit role
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submitEmployer = function() {

							var method = "";
							var url = "";
							// alert($scope.employerForm.id);
							if ($scope.employerForm.id == -1
									|| $scope.employerForm.id == undefined) {
								// Id is absent in form data, it is create new role
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/employer/';
								$http
										.post(
												url,
												{
													"firstname" : $scope.employerForm.firstname,
													"middlename" : $scope.employerForm.middlename,
													"lastname" : $scope.employerForm.lastname,
													"dob" : $scope.employerForm.dob,
													"gender" : $scope.employerForm.gender,
													"email" : $scope.employerForm.email,
													"alternateemail" : $scope.employerForm.alternateemail,
													"password" : $scope.employerForm.password,
													"confirmpassword" : $scope.employerForm.confirmpassword,
													"mobile" : $scope.employerForm.mobile,
													"landline" : $scope.employerForm.landline
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit role
								// operation
								id = $scope.employerForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/employer/'
										+ id;
								$http
										.put(
												url,
												{

													"firstname" : $scope.employerForm.firstname,
													"middlename" : $scope.employerForm.middlename,
													"lastname" : $scope.employerForm.lastname,
													"dob" : $scope.employerForm.dob,
													"gender" : $scope.employerForm.gender,
													"email" : $scope.employerForm.email,
													"alternateemail" : $scope.employerForm.alternateemail,
													"password" : $scope.employerForm.password,
													"confirmpassword" : $scope.employerForm.confirmpassword,
													"mobile" : $scope.employerForm.mobile,
													"landline" : $scope.employerForm.landline
												}).then(_success, _error);
								$scope.genderForm.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.genderForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete role by Id
						$scope.deleteEmployer = function(employer) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/employer/'
												+ employer.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with role id
						$scope.updateEmployer = function(employer) {

							$scope.employerForm.firstname = employer.firstname;
							$scope.employerForm.middlename = employer.middlename;
							$scope.employerForm.lastname = employer.lastname;
							$scope.employerForm.dob= employer.dob;
							$scope.employerForm.gender = employer.gender;
							$scope.employerForm.email = employer.email;
							$scope.employerForm.alternateemail = employer.alternateemail;
							$scope.employerForm.password = employer.password;
							$scope.employerForm.confirmpassword = employer.confirmpassword;
							$scope.employerForm.mobile = employer.mobile;
							$scope.employerForm.landline = employer.landline;
							
						};

						/* Private Methods */
						// HTTP GET- get all countries collection
						function _refreshGenderData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/employer/'
									}).then(function successCallback(response) {
								// alert(response.data.data)
								$scope.employer = response.data.data;
							}, function errorCallback(response) {
								console.log(response.statusText);
							});
						}

						function _success(response) {

							_refreshEmployerData();
							_clearFormData()
						}

						function _error(response) {

							console.log(response.statusText);
						}

						// Clear the form
						function _clearFormData() {
							// $scope.genderForm.id = -1;
							$scope.employerForm.firstname = "";
							$scope.employerForm.middlename = "";
							$scope.employerForm.lastname = "";
							$scope.employerForm.dob = "";
							$scope.employerForm.gender = "";
							$scope.employerForm.email = "";
							$scope.employerForm.alternateemail = "";
							$scope.employerForm.password = "";
							$scope.employerForm.confirmpassword = "";
							$scope.employerForm.mobile= "";
							$scope.employerForm.landline = "";
						}
						;
					});
