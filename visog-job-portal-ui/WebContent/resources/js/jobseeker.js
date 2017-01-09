
	var app = angular.module("JobSeekerManagement", []);
	//Controller Part
	app
			.controller(
					"JobSeekerController",
					function($scope, $http) {

						$scope.jobseeker = [];
						$scope.jobseekerForm = {
							// id : -1,
								resumeheadline : "",
								domain : "",
								companyname : "",
								user : "",
								keyskills : "",
								workexperienceyears : "",
								workexperiencemonths : "",
								hobbiesandinterest : "",
								jobrole : "",
								otherjobrole : "",
								industry : "",
								profilesummery : "",
								employmenttype : ""
								
						};

						// Now load the data from server
						_refreshJobSeekerData();

						// HTTP POST/PUT methods for add/edit role
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submitJobSeeker = function() {

							var method = "";
							var url = "";
							// alert($scope.genderForm.id);
							if ($scope.JobSeekerForm.id == -1
									|| $scope.JobSeekerForm.id == undefined) {
								// Id is absent in form data, it is create new role
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/jobseeker/';
								$http
										.post(
												url,
												{
													"resumeheadline" : $scope.jobseekerForm.resumeheadline,
													"domain" : $scope.jobseekerForm.domain,
													"companyname" : $scope.jobseekerForm.companyname,
													"user" : $scope.jobseekerForm.user,
													"keyskills" : $scope.jobseekerForm.keyskills,
													"workexperienceyears" : $scope.jobseekerForm.workexperienceyears,
													"workexperiencemonths" : $scope.jobseekerForm.workexperiencemonths,
													"hobbiesandinterest" : $scope.jobseekerForm.hobbiesandinterest,
													"jobrole" : $scope.jobseekerForm.jobrole,
													"otherjobrole" : $scope.jobseekerForm.otherjobrole,
													"industry" : $scope.jobseekerForm.industry,
													"profilesummery" : $scope.jobseekerForm.profilesummery,
													"employmenttype" : $scope.jobseekerForm.employmenttype
													
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit role
								// operation
								id = $scope.jobseekerForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/jobseeker/'
										+ id;
								$http
										.put(
												url,
												{
													"resumeheadline" : $scope.jobseekerForm.resumeheadline,
													"domain" : $scope.jobseekerForm.domain,
													"companyname" : $scope.jobseekerForm.companyname,
													"user" : $scope.jobseekerForm.user,
													"keyskills" : $scope.jobseekerForm.keyskills,
													"workexperienceyears" : $scope.jobseekerForm.workexperienceyears,
													"workexperiencemonths" : $scope.jobseekerForm.workexperiencemonths,
													"hobbiesandinterest" : $scope.jobseekerForm.hobbiesandinterest,
													"jobrole" : $scope.jobseekerForm.jobrole,
													"otherjobrole" : $scope.jobseekerForm.otherjobrole,
													"industry" : $scope.jobseekerForm.industry,
													"profilesummery" : $scope.jobseekerForm.profilesummery,
													"employmenttype" : $scope.jobseekerForm.employmenttype
												}).then(_success, _error);
								$scope.jobseekerForm.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.genderForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete role by Id
						$scope.deleteJobSeeker = function(jobseeker) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/jobseeker/'
												+ country.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with role id
						$scope.editJobSeeker = function(jobseeker) {

							$scope.jobseekerForm.resumeheadline = jobseeker.resumeheadline;
							$scope.jobseekerForm.domain = jobseeker.domain;
							$scope.jobseekerForm.companyname = jobseeker.companyname;
							$scope.jobseekerForm.user = jobseeker.user;
							$scope.jobseekerForm.keyskills = jobseeker.keyskills;
							$scope.jobseekerForm.workexperienceyears = jobseeker.workexperienceyears;
							$scope.jobseekerForm.workexperiencemonths = jobseeker.workexperiencemonths;
							$scope.jobseekerForm.hobbiesandinterest = jobseeker.hobbiesandinterest;
							$scope.jobseekerForm.jobrole = jobseeker.jobrole;
							$scope.jobseekerForm.otherjobrole = jobseeker.otherjobrole;
							$scope.jobseekerForm.industry = jobseeker.industry;
							$scope.jobseekerForm.profilesummery = jobseeker.profilesummery;
							$scope.jobseekerForm.employmenttype = jobseeker.employmenttype;
							$scope.jobseekerForm.id =jobseeker.id;
							
						};

						/* Private Methods */
						// HTTP GET- get all files collection
						function _refreshJobSeekerData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/jobseeker/'
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
							$scope.jobseekerForm.resumeheadline = "";
							$scope.jobseekerForm.domain = "";
							$scope.jobseekerForm.companyname = "";
							$scope.jobseekerForm.user = "";
							$scope.jobseekerForm.keyskills = "";
							$scope.jobseekerForm.workexperienceyears = "";
							$scope.jobseekerForm.workexperiencemonths = "";
							$scope.jobseekerForm.hobbiesandinterest = "";
							$scope.jobseekerForm.jobrole = "";
							$scope.jobseekerForm.otherjobrole = "";
							$scope.jobseekerForm.industry = "";
							$scope.jobseekerForm.profilesummery = "";
							$scope.jobseekerForm.employmenttype = "";

						}
						;
					});