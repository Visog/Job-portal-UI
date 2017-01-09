	var app = angular.module("ExperienceDetails", []);

	//Controller Part
	app
			.controller(
					"ExperienceDetailsController",
					function($scope, $http) {

						$scope.ExperienceDetails = [];
						$scope.ExperienceDetailsForm = {
							// id : -1,
							userid: "",
							companyName : "",
							employmenttypeid : "",
							durationfrom : "",
							durationto:"",
							designation: "",
							jobprofile:"",
							
						};

						// Now load the data from server
						_refreshExperienceDetailsData();

						// HTTP POST/PUT methods for add/edit address
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submitExperienceDetails = function() {

							var method = "";
							var url = "";
				
							if ($scope.ExperienceDetailsForm.id == -1
									|| $scope.ExperienceDetailsForm.id == undefined) {
								// Id is absent in form data, it is create new address
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/ExperienceDetails/';
								$http
										.post(
												url,
												{
													"userid" : $scope.ExperienceDetailsForm.userid,
													"companyName" : $scope.ExperienceDetailsForm.companyName,
													"employmenttypeid" : $scope.ExperienceDetailsForm.employmenttypeid,
													"durationfrom" : $scope.ExperienceDetailsForm.durationfrom,
													"durationto" : $scope.ExperienceDetailsForm.durationto,
													"designation" : $scope.ExperienceDetailsForm.designation,
													"jobprofile" : $scope.ExperienceDetailsForm.jobprofile,
													
													
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit address
								// operation
								id = $scope.ExperienceDetailsForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/ExperienceDetails/'
										+ id;
								$http
										.put(
												url,
												{
													"userid" : $scope.ExperienceDetails.userid,
													"companyName" : $scope.addressType.companyName,
													"employmenttypeid" : $scope.ExperienceDetailsForm.employmenttypeid,
													"durationfrom" : $scope.ExperienceDetailsForm.durationfrom,
													"durationto" : $scope.ExperienceDetailsForm.durationto,
													"designation" : $scope.ExperienceDetailsForm.designation,
													"jobprofile" : $scope.ExperienceDetailsForm.jobprofile,
													
													
													
												}).then(_success, _error);
								$scope.ExperienceDetails.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.ExperienceDetailsForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete address by Id
						$scope.deleteCountry = function(country) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/ExperienceDetails/'
												+ country.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with address id
						$scope.editCountry = function(country) {

							$scope.ExperienceDetailsForm.userid = ExperienceDetails.userid;
							$scope.ExperienceDetailsForm.companyName = ExperienceDetails.companyName;
							$scope.ExperienceDetailsForm.employmenttypeid=ExperienceDetails.employmenttypeid;
							$scope.ExperienceDetailsForm.durationfrom=ExperienceDetails.durationfrom;
							$scope.ExperienceDetailsForm.durationto=ExperienceDetails.durationto;
							$scope.ExperienceDetailsForm.designation=ExperienceDetails.designation;
							$scope.ExperienceDetailsForm.jobprofile=ExperienceDetails.jobprofile;
							
							
						};

						/* Private Methods */
						// HTTP GET- get all countries collection
						function _refreshExperienceDetailsData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/ExperienceDetails/'
									}).then(function successCallback(response) {
								// alert(response.data.data)
								$scope.ExperienceDetails = response.data.data;
							}, function errorCallback(response) {
								console.log(response.statusText);
							});
						}

						function _success(response) {

							_refreshExperienceDetailsData();
							_clearFormData()
						}

						function _error(response) {

							console.log(response.statusText);
						}

						// Clear the form
						function _clearFormData() {
							// $scope.genderForm.id = -1;
							$scope.ExperienceDetailsForm.userid = "";
							$scope.ExperienceDetailsForm.companyName = "";
							$scope.ExperienceDetailsForm.employmenttypeid="";
							$scope.ExperienceDetailsForm.durationfrom="";
							$scope.ExperienceDetailsForm.durationto="";
							$scope.ExperienceDetailsForm.designation="";
							$scope.ExperienceDetailsForm.jobprofile="";

						}
						;
					});
