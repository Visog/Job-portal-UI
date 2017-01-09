	var app = angular.module("ProjectDetails", []);

	//Controller Part
	app
			.controller(
					"ProjectDetailsController",
					function($scope, $http) {

						$scope.projectdetails = [];
						$scope.projectdetailsForm = {
							// id : -1,
							userid: "",
							jobresponsibilities : "",
							countryId : "",
							stateId : "",
							employmenttypeid : "",
							durationfrom : "",
							associatedId: "",
							adddressTypeId : "",
							technologiesused:"",
							
						};

						// Now load the data from server
						_refreshprojectdetailsData();

						// HTTP POST/PUT methods for add/edit address
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submitprojectdetails = function() {

							var method = "";
							var url = "";
				
							if ($scope.projectdetailsForm.id == -1
									|| $scope.projectdetailsForm.id == undefined) {
								// Id is absent in form data, it is create new address
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/projectdetails/';
								$http
										.post(
												url,
												{
													"userid" : $scope.projectdetailsForm.userid,
													"jobresponsibilities" : $scope.projectdetailsForm.jobresponsibilities,
													"projectdetails" : $scope.projectdetailsForm.projectdetails,
													"projecttitle" : $scope.projectdetailsForm.projecttitle,
													"employmenttypeid" : $scope.projectdetailsForm.employmenttypeid,
													"durationfrom" : $scope.projectdetailsForm.durationfrom,
													"durationto" : $scope.projectdetailsForm.durationto,
													"teamSize" : $scope.projectdetailsForm.teamSize,
													"technologiesused" : $scope.projectdetailsForm.technologiesused,
													
													
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit address
								// operation
								id = $scope.projectdetailsForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/projectdetails/'
										+ id;
								$http
										.put(
												url,
												{
													"userid" : $scope.projectdetails.userid,
													"jobresponsibilities" : $scope.addressType.jobresponsibilities,
													"projectdetails" : $scope.projectdetailsForm.projectdetails,
													"projecttitle" : $scope.projectdetailsForm.projecttitle,
													"employmenttypeid" : $scope.projectdetailsForm.employmenttypeid,
													"durationfrom" : $scope.projectdetailsForm.durationfrom,
													"durationto" : $scope.projectdetailsForm.durationto,
													"teamSize" : $scope.projectdetailsForm.teamSize,
													"technologiesused" : $scope.projectdetailsForm.technologiesused,
													
													
													
												}).then(_success, _error);
								$scope.projectdetails.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.projectdetailsForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete address by Id
						$scope.deleteCountry = function(country) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/projectdetails/'
												+ country.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with address id
						$scope.editCountry = function(country) {

							$scope.projectdetailsForm.userid = projectdetails.userid;
							$scope.projectdetailsForm.jobresponsibilities = projectdetails.jobresponsibilities;
							$scope.projectdetailsForm.projectdetails=projectdetails.projectdetails;
						    $scope.projectdetailsForm.projecttitle=projectdetails.projecttitle;
							$scope.projectdetailsForm.employmenttypeid=projectdetails.employmenttypeid;
							$scope.projectdetailsForm.durationfrom=projectdetails.durationfrom;
							$scope.projectdetailsForm.durationto=projectdetails.durationto;
							$scope.projectdetailsForm.teamSize=projectdetails.teamSize;
							$scope.projectdetailsForm.technologiesused=projectdetails.technologiesused;
							
							
						};

						/* Private Methods */
						// HTTP GET- get all countries collection
						function _refreshprojectdetailsData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/projectdetails/'
									}).then(function successCallback(response) {
								// alert(response.data.data)
								$scope.projectdetails = response.data.data;
							}, function errorCallback(response) {
								console.log(response.statusText);
							});
						}

						function _success(response) {

							_refreshprojectdetailsData();
							_clearFormData()
						}

						function _error(response) {

							console.log(response.statusText);
						}

						// Clear the form
						function _clearFormData() {
							// $scope.genderForm.id = -1;
							$scope.projectdetailsForm.userid = "";
							$scope.projectdetailsForm.jobresponsibilities = "";
							$scope.projectdetailsForm.projectdetails="";
						    $scope.projectdetailsForm.projecttitle="";
							$scope.projectdetailsForm.employmenttypeid="";
							$scope.projectdetailsForm.durationfrom="";
							$scope.projectdetailsForm.durationto="";
							$scope.projectdetailsForm.teamSize="";
							$scope.projectdetailsForm.technologiesused="";

						}
						;
					});
