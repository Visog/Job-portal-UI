
var app = angular.module("Users", []);
	//Controller Part
	app
			.controller(
					"UsersController",
					function($scope, $http) {

						$scope.users = [];
						$scope.usersForm = {
							// id : -1,
							
							firstname:"",
							middlename : "",
							lastname : "",
							roleid:"",
							email:"",
							alternativeemail:"",
								genderid:"",
								password:"",
								dob:"",
								phoneno:"",
								landline:"",
						};

						// Now load the data from server
						_refreshUsersData();

						// HTTP POST/PUT methods for add/edit role
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submitusers = function() {

							var method = "";
							var url = "";
							// alert($scope.usersForm.id);
							if ($scope.usersForm.id == -1
									|| $scope.usersForm.id == undefined) {
								// Id is absent in form data, it is create new role
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/users/';
								$http
										.post(
												url,
												{
													
													"firstname" : $scope.usersForm.educatintype,
													"middlename" : $scope.usersForm.middlename,
													"lastname" : $scope.usersForm.lastname,
													"roleid" : $scope.usersForm.roleid,
													"email" : $scope.usersForm.email,
													"alternativeemail" : $scope.usersForm.alternativeemail,
													"genderid":$scope.usersForm.genderid,
													"dob":$scope.usersForm.dob,
													"password":$scope.usersForm.password,
													"phoneno":$scope.usersForm.phoneno,
													"landline":$scope.usersForm.landline
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit role
								// operation
								id = $scope.usersForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/tranaction/users/'
										+ id;
								$http
										.put(
												url,
												{
													"user" : $scope.usersForm.user,
													"firstname" : $scope.usersForm.educatintype,
													"middlename" : $scope.usersForm.middlename,
													"lastname" : $scope.usersForm.lastname,
													"roleid" : $scope.usersForm.roleid,
													"email" : $scope.usersForm.email,
													"alternativeemail" : $scope.usersForm.alternativeemail,
													"genderid":$scope.usersForm.genderid,
													"dob":$scope.usersForm.dob,
													"password":$scope.usersForm.password,
													"phoneno":$scope.usersForm.phoneno,
													"landline":$scope.usersForm.landline
												}).then(_success, _error);
								$scope.usersForm.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.genderForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete role by Id
						$scope.deleteUsers = function(users) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/users/'
												+ users.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with role id
						$scope.editUsers = function(users) {

							$scope.usersForm.user = users.user;
							$scope.usersForm.firstname = users.firstname;
							$scope.usersForm.middlename = users.middlename;
							$scope.usersForm.lastname =users.lastname;
							$scope.usersForm.roleid = users.roleid;
							$scope.usersForm.email = users.email;
							$scope.usersForm.alternativeemail =users.alternativeemail;
							$scope.usersForm.genderid=users.genderid;
							$scope.usersForm.dob=users.dob;
							$scope.usersForm.password=users.password;
							$scope.usersForm.phoneno=users.phoneno;
							$scope.usersForm.landline=users.landline;
						};

						/* Private Methods */
						// HTTP GET- get all countries collection
						function _refreshUsersData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/users/'
									}).then(function successCallback(response) {
								// alert(response.data.data)
								$scope.users = response.data.data;
							}, function errorCallback(response) {
								console.log(response.statusText);
							});
						}

						function _success(response) {

							_refreshUsersData();
							_clearFormData()
						}

						function _error(response) {

							console.log(response.statusText);
						}

						// Clear the form
						function _clearFormData() {
							// $scope.genderForm.id = -1;
							$scope.usersForm.user = "";
							$scope.usersForm.firstname= "";
							$scope.usersForm.middlename= "";
							$scope.usersForm.lastname = "";
							$scope.usersForm.roleid= "";
							$scope.usersForm.email= "";
							$scope.usersForm.alternativeemail= "";
							$scope.usersForm.genderid="";
							$scope.usersForm.dob="";
							$scope.usersForm.password="";
							$scope.usersForm.phoneno="";
							$scope.usersForm.landline="";

						}
						;
					});
