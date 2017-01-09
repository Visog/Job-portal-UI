	var app = angular.module("ProjectDetails", []);

	//Controller Part
	app
			.controller(
					"ProjectDetailsController",
					function($scope, $http) {

						$scope.ProjectDetails = [];
						$scope.ProjectDetailsForm = {
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
						_refreshProjectDetailsData();

						// HTTP POST/PUT methods for add/edit address
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submitProjectDetails = function() {

							var method = "";
							var url = "";
				
							if ($scope.ProjectDetailsForm.id == -1
									|| $scope.ProjectDetailsForm.id == undefined) {
								// Id is absent in form data, it is create new address
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/ProjectDetails/';
								$http
										.post(
												url,
												{
													"userid" : $scope.ProjectDetailsForm.userid,
													"jobresponsibilities" : $scope.ProjectDetailsForm.jobresponsibilities,
													"projectdetails" : $scope.ProjectDetailsForm.projectdetails,
													"projecttitle" : $scope.ProjectDetailsForm.projecttitle,
													"employmenttypeid" : $scope.ProjectDetailsForm.employmenttypeid,
													"durationfrom" : $scope.ProjectDetailsForm.durationfrom,
													"durationto" : $scope.ProjectDetailsForm.durationto,
													"teamSize" : $scope.ProjectDetailsForm.teamSize,
													"technologiesused" : $scope.ProjectDetailsForm.technologiesused,
													
													
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit address
								// operation
								id = $scope.ProjectDetailsForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/ProjectDetails/'
										+ id;
								$http
										.put(
												url,
												{
													"userid" : $scope.ProjectDetails.userid,
													"jobresponsibilities" : $scope.addressType.jobresponsibilities,
													"projectdetails" : $scope.ProjectDetailsForm.projectdetails,
													"projecttitle" : $scope.ProjectDetailsForm.projecttitle,
													"employmenttypeid" : $scope.ProjectDetailsForm.employmenttypeid,
													"durationfrom" : $scope.ProjectDetailsForm.durationfrom,
													"durationto" : $scope.ProjectDetailsForm.durationto,
													"teamSize" : $scope.ProjectDetailsForm.teamSize,
													"technologiesused" : $scope.ProjectDetailsForm.technologiesused,
													
													
													
												}).then(_success, _error);
								$scope.ProjectDetails.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.ProjectDetailsForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete address by Id
						$scope.deleteCountry = function(country) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/ProjectDetails/'
												+ country.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with address id
						$scope.editCountry = function(country) {

							$scope.ProjectDetailsForm.userid = ProjectDetails.userid;
							$scope.ProjectDetailsForm.jobresponsibilities = ProjectDetails.jobresponsibilities;
							$scope.ProjectDetailsForm.projectdetails=ProjectDetails.projectdetails;
						    $scope.ProjectDetailsForm.projecttitle=ProjectDetails.projecttitle;
							$scope.ProjectDetailsForm.employmenttypeid=ProjectDetails.employmenttypeid;
							$scope.ProjectDetailsForm.durationfrom=ProjectDetails.durationfrom;
							$scope.ProjectDetailsForm.durationto=ProjectDetails.durationto;
							$scope.ProjectDetailsForm.teamSize=ProjectDetails.teamSize;
							$scope.ProjectDetailsForm.technologiesused=ProjectDetails.technologiesused;
							
							
						};

						/* Private Methods */
						// HTTP GET- get all countries collection
						function _refreshProjectDetailsData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/ProjectDetails/'
									}).then(function successCallback(response) {
								// alert(response.data.data)
								$scope.ProjectDetails = response.data.data;
							}, function errorCallback(response) {
								console.log(response.statusText);
							});
						}

						function _success(response) {

							_refreshProjectDetailsData();
							_clearFormData()
						}

						function _error(response) {

							console.log(response.statusText);
						}

						// Clear the form
						function _clearFormData() {
							// $scope.genderForm.id = -1;
							$scope.ProjectDetailsForm.userid = "";
							$scope.ProjectDetailsForm.jobresponsibilities = "";
							$scope.ProjectDetailsForm.projectdetails="";
						    $scope.ProjectDetailsForm.projecttitle="";
							$scope.ProjectDetailsForm.employmenttypeid="";
							$scope.ProjectDetailsForm.durationfrom="";
							$scope.ProjectDetailsForm.durationto="";
							$scope.ProjectDetailsForm.teamSize="";
							$scope.ProjectDetailsForm.technologiesused="";

						}
						;
					});
