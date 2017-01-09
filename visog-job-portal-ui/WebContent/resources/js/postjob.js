
	var app = angular.module("PostJobManagement", []);
	//Controller Part
	app
			.controller(
					"PostJobController",
					function($scope, $http) {

						$scope.postJob = [];
						$scope.postJobForm = {
							// id : -1,
								user : "",
								jobtitle : "",
								jobdescription : "",
								annualpackagefrom : "",
								annualpackageto : "",
								currency : "",
								effecteddatefrom : "",
								effecteddateto : "",
								status : "",
								minexperience : "",
								phoneno : "",
								walkin : "",
								
						};

						// Now load the data from server
						_refreshPostJobData();

						// HTTP POST/PUT methods for add/edit role
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submitPostJob = function() {

							var method = "";
							var url = "";
							// alert($scope.genderForm.id);
							if ($scope.PostJobForm.id == -1
									|| $scope.PostJobForm.id == undefined) {
								// Id is absent in form data, it is create new role
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/postJob/';
								$http
										.post(
												url,
												{
													"user" : $scope.postJobForm.user,
													"jobtitle" : $scope.postJobForm.jobtitle,
													"jobdescription" : $scope.postJobForm.jobdescription,
													"annualpackagefrom" : $scope.postJobForm.annualpackagefrom,
													"annualpackageto" : $scope.postJobForm.annualpackageto,
													"currency" : $scope.postJobForm.currency,
													"effecteddatefrom" : $scope.postJobForm.effecteddatefrom,
													"effecteddateto" : $scope.postJobForm.effecteddateto,
													"status" : $scope.postJobForm.status,
													"minexperience" : $scope.postJobForm.minexperience,
													"phoneno" : $scope.postJobForm.phoneno,
													"walkin" : $scope.postJobForm.walkin
													
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit role
								// operation
								id = $scope.postJobForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/postJob/'
										+ id;
								$http
										.put(
												url,
												{  	"user" : $scope.postJobForm.user,
													"jobtitle" : $scope.postJobForm.jobtitle,
													"jobdescription" : $scope.postJobForm.jobdescription,
													"annualpackagefrom" : $scope.postJobForm.annualpackagefrom,
													"annualpackageto" : $scope.postJobForm.annualpackageto,
													"currency" : $scope.postJobForm.currency,
													"effecteddatefrom" : $scope.postJobForm.effecteddatefrom,
													"effecteddateto" : $scope.postJobForm.effecteddateto,
													"status" : $scope.postJobForm.status,
													"minexperience" : $scope.postJobForm.minexperience,
													"phoneno" : $scope.postJobForm.phoneno,
													"walkin" : $scope.postJobForm.walkin
												}).then(_success, _error);
								$scope.postJobForm.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.genderForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete role by Id
						$scope.deletePostJob = function(postJob) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/postJob/'
												+ country.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with role id
						$scope.editPostJob = function(postJob) {

							$scope.postJobForm.user = jobseeker.user;
							$scope.postJobForm.jobtitle = jobseeker.jobtitle;
							$scope.postJobForm.jobdescription = jobseeker.jobdescription;
							$scope.postJobForm.annualpackagefrom = jobseeker.annualpackagefrom;
							$scope.postJobForm.annualpackageto = jobseeker.annualpackageto;
							$scope.postJobForm.currency = jobseeker.currency;
							$scope.postJobForm.effecteddatefrom = jobseeker.effecteddatefrom;
							$scope.postJobForm.effecteddateto = jobseeker.effecteddateto;
							$scope.postJobForm.status = jobseeker.status;
							$scope.postJobForm.minexperience = jobseeker.minexperience;
							$scope.postJobForm.phoneno = jobseeker.phoneno;
							$scope.postJobForm.walkin = jobseeker.walkin;
							$scope.postJobForm.id =jobseekers.id;
							
						};

						/* Private Methods */
						// HTTP GET- get all files collection
						function _refreshPostJobData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/postJob/'
									}).then(function successCallback(response) {
								// alert(response.data.data)
								$scope.files = response.data.data;
							}, function errorCallback(response) {
								console.log(response.statusText);
							});
						}

						function _success(response) {

							_refreshJobSeekerData();
							_clearFormData()
						}

						function _error(response) {

							console.log(response.statusText);
						}

						// Clear the form
						function _clearFormData() {
							// $scope.genderForm.id = -1;
							$scope.postJobForm.user = "";
							$scope.postJobForm.jobtitle = "";
							$scope.postJobForm.jobdescription = "";
							$scope.postJobForm.annualpackagefrom = "";
							$scope.postJobForm.annualpackageto = "";
							$scope.postJobForm.currency = "";
							$scope.postJobForm.effecteddatefrom = "";
							$scope.postJobForm.effecteddateto = "";
							$scope.postJobForm.status = "";
							$scope.postJobForm.minexperience = "";
							$scope.postJobForm.phoneno = "";
							$scope.postJobForm.walkin = "";

						}
						;
					});