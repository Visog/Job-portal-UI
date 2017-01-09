	var app = angular.module("PostJobSeeker", []);

	//Controller Part
	app
			.controller(
					"PostJobSeekerController",
					function($scope, $http) {

						$scope.postjobseeker = [];
						$scope.postjobseekerForm = {
							// id : -1,
							jobseekerid: "",
							employerid : "",
							postjobid : "",
							statusid : "",
							
							
						};

						// Now load the data from server
						_refreshpostjobseekerData();

						// HTTP POST/PUT methods for add/edit address
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submitpostjobseeker = function() {

							var method = "";
							var url = "";
				
							if ($scope.postjobseekerForm.id == -1
									|| $scope.postjobseekerForm.id == undefined) {
								// Id is absent in form data, it is create new address
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/postjobseeker/';
								$http
										.post(
												url,
												{
													"jobseekerid" : $scope.postjobseekerForm.jobseekerid,
													"employerid" : $scope.postjobseekerForm.employerid,
													"postjobid" : $scope.postjobseekerForm.postjobid,
													"statusid" : $scope.postjobseekerForm.statusid,
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit address
								// operation
								id = $scope.postjobseekerForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/postjobseeker/'
										+ id;
								$http
										.put(
												url,
												{
													"jobseekerid" : $scope.postjobseeker.jobseekerid,
													"employerid" : $scope.addressType.employerid,
													"postjobid" : $scope.postjobseekerForm.postjobid,
													"statusid" : $scope.postjobseekerForm.statusid,
												}).then(_success, _error);
								$scope.postjobseeker.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.postjobseekerForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete address by Id
						$scope.deleteCountry = function(country) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/postjobseeker/'
												+ country.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with address id
						$scope.editCountry = function(country) {

							$scope.postjobseekerForm.jobseekerid = postjobseeker.jobseekerid;
							$scope.postjobseekerForm.employerid = postjobseeker.employerid;
							$scope.postjobseekerForm.postjobid=postjobseeker.postjobid;
							$scope.postjobseekerForm.statusid=postjobseeker.statusid;
						};

						/* Private Methods */
						// HTTP GET- get all countries collection
						function _refreshpostjobseekerData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/postjobseeker/'
									}).then(function successCallback(response) {
								// alert(response.data.data)
								$scope.postjobseeker = response.data.data;
							}, function errorCallback(response) {
								console.log(response.statusText);
							});
						}

						function _success(response) {

							_refreshpostjobseekerData();
							_clearFormData()
						}

						function _error(response) {

							console.log(response.statusText);
						}

						// Clear the form
						function _clearFormData() {
							// $scope.genderForm.id = -1;
							$scope.postjobseekerForm.jobseekerid = "";
							$scope.postjobseekerForm.employerid = "";
							$scope.postjobseekerForm.postjobid="";
							$scope.postjobseekerForm.statusid="";
						}
						;
					});
