
	var app = angular.module("FilesManagement", []);
	//Controller Part
	app
			.controller(
					"FilesController",
					function($scope, $http) {

						$scope.files = [];
						$scope.filesForm = {
							// id : -1,
							filepath : "",
							filetype : "",
							associatedtype : "",
							associated : ""
						};

						// Now load the data from server
						_refreshFilesData();

						// HTTP POST/PUT methods for add/edit role
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submitFiles = function() {

							var method = "";
							var url = "";
							// alert($scope.genderForm.id);
							if ($scope.FilesForm.id == -1
									|| $scope.FilesForm.id == undefined) {
								// Id is absent in form data, it is create new role
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/files/';
								$http
										.post(
												url,
												{
													"filepath" : $scope.filesForm.filepath,
													"filetype" : $scope.filesForm.filetype,
													"associatedtype" : $scope.filesForm.associatedtype,
													"associated" : $scope.filesForm.associated
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit role
								// operation
								id = $scope.filesForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/files/'
										+ id;
								$http
										.put(
												url,
												{
													"filepath" : $scope.filesForm.filepath,
													"filetype" : $scope.filesForm.filetype,
													"associatedtype" : $scope.filesForm.associatedtype,
													"associated" : $scope.filesForm.associated
												}).then(_success, _error);
								$scope.filesForm.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.genderForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete role by Id
						$scope.deleteFiles = function(files) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/files/'
												+ country.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with role id
						$scope.editFiles = function(files) {

							$scope.filesForm.filepath = files.filepath;
							$scope.filesForm.filetype = files.filetype;
							$scope.filesForm.associatedtype = files.associatedtype;
							$scope.filesForm.associated = files.associated;
							$scope.filesForm.id =files.id;
						};

						/* Private Methods */
						// HTTP GET- get all files collection
						function _refreshFilesData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/files/'
									}).then(function successCallback(response) {
								// alert(response.data.data)
								$scope.files = response.data.data;
							}, function errorCallback(response) {
								console.log(response.statusText);
							});
						}

						function _success(response) {

							_refreshCountryData();
							_clearFormData()
						}

						function _error(response) {

							console.log(response.statusText);
						}

						// Clear the form
						function _clearFormData() {
							// $scope.genderForm.id = -1;
							$scope.filesForm.filepath = "";
							$scope.filesForm.filetype = "";
							$scope.filesForm.associatedtype = "";
							$scope.filesForm.associated = "";

						}
						;
					});