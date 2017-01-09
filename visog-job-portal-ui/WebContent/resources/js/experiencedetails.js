	var app = angular.module("ExperienceDetails", []);

	//Controller Part
	app
			.controller(
					"ExperienceDetailsController",
					function($scope, $http) {

						$scope.experiencedetails = [];
						$scope.experiencedetailsForm = {
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
						_refreshexperiencedetailsData();

						// HTTP POST/PUT methods for add/edit address
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submitexperiencedetails = function() {

							var method = "";
							var url = "";
				
							if ($scope.experiencedetailsForm.id == -1
									|| $scope.experiencedetailsForm.id == undefined) {
								// Id is absent in form data, it is create new address
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/experiencedetails/';
								$http
										.post(
												url,
												{
													"userid" : $scope.experiencedetailsForm.userid,
													"companyName" : $scope.experiencedetailsForm.companyName,
													"employmenttypeid" : $scope.experiencedetailsForm.employmenttypeid,
													"durationfrom" : $scope.experiencedetailsForm.durationfrom,
													"durationto" : $scope.experiencedetailsForm.durationto,
													"designation" : $scope.experiencedetailsForm.designation,
													"jobprofile" : $scope.experiencedetailsForm.jobprofile,
													
													
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit address
								// operation
								id = $scope.experiencedetailsForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/experiencedetails/'
										+ id;
								$http
										.put(
												url,
												{
													"userid" : $scope.experiencedetails.userid,
													"companyName" : $scope.addressType.companyName,
													"employmenttypeid" : $scope.experiencedetailsForm.employmenttypeid,
													"durationfrom" : $scope.experiencedetailsForm.durationfrom,
													"durationto" : $scope.experiencedetailsForm.durationto,
													"designation" : $scope.experiencedetailsForm.designation,
													"jobprofile" : $scope.experiencedetailsForm.jobprofile,
													
													
													
												}).then(_success, _error);
								$scope.experiencedetails.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.experiencedetailsForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete address by Id
						$scope.deleteCountry = function(country) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/experiencedetails/'
												+ country.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with address id
						$scope.editCountry = function(country) {

							$scope.experiencedetailsForm.userid = experiencedetails.userid;
							$scope.experiencedetailsForm.companyName = experiencedetails.companyName;
							$scope.experiencedetailsForm.employmenttypeid=experiencedetails.employmenttypeid;
							$scope.experiencedetailsForm.durationfrom=experiencedetails.durationfrom;
							$scope.experiencedetailsForm.durationto=experiencedetails.durationto;
							$scope.experiencedetailsForm.designation=experiencedetails.designation;
							$scope.experiencedetailsForm.jobprofile=experiencedetails.jobprofile;
							
							
						};

						/* Private Methods */
						// HTTP GET- get all countries collection
						function _refreshexperiencedetailsData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/experiencedetails/'
									}).then(function successCallback(response) {
								// alert(response.data.data)
								$scope.experiencedetails = response.data.data;
							}, function errorCallback(response) {
								console.log(response.statusText);
							});
						}

						function _success(response) {

							_refreshexperiencedetailsData();
							_clearFormData()
						}

						function _error(response) {

							console.log(response.statusText);
						}

						// Clear the form
						function _clearFormData() {
							// $scope.genderForm.id = -1;
							$scope.experiencedetailsForm.userid = "";
							$scope.experiencedetailsForm.companyName = "";
							$scope.experiencedetailsForm.employmenttypeid="";
							$scope.experiencedetailsForm.durationfrom="";
							$scope.experiencedetailsForm.durationto="";
							$scope.experiencedetailsForm.designation="";
							$scope.experiencedetailsForm.jobprofile="";

						}
						;
					});
