var app = angular.module("LanguageKnownManagement", []);
	//Controller Part
	app
			.controller(
					"LanguageKnownController",
					function($scope, $http) {

						$scope.languageknown = [];
						$scope.languageknownForm = {
							// id : -1,
							user : "",
							language : "",
							read : "",
							write : "",
							speak : "",
							proficencylevel : ""
						};

						// Now load the data from server
						_refreshLanguageKnownData();

						// HTTP POST/PUT methods for add/edit role
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submitLanguageKnown = function() {

							var method = "";
							var url = "";
							// alert($scope.genderForm.id);
							if ($scope.LanguageKnownForm.id == -1
									|| $scope.LanguageKnownForm.id == undefined) {
								// Id is absent in form data, it is create new role
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/languageknown/';
								$http
										.post(
												url,
												{
													"user" : $scope.languageknownForm.user,
													"language" : $scope.languageknownForm.language,
													"read" : $scope.languageknownForm.read,
													"write" : $scope.languageknownForm.write,
													"speak" : $scope.languageknownForm.speak,
													"proficencylevel" : $scope.languageknownForm.proficencylevel
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit role
								// operation
								id = $scope.languageknownForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/languageknown/'
										+ id;
								$http
										.put(
												url,
												{
													"user" : $scope.languageknownForm.user,
													"language" : $scope.languageknownForm.language,
													"read" : $scope.languageknownForm.read,
													"write" : $scope.languageknownForm.write,
													"speak" : $scope.languageknownForm.speak,
													"proficencylevel" : $scope.languageknownForm.proficencylevel
												}).then(_success, _error);
								$scope.languageknownForm.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.genderForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete role by Id
						$scope.deleteLanguageKnown = function(languageknown) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/languageknown/'
												+ languageknown.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with role id
						$scope.editLanguageKnown = function(languageknown) {

							$scope.languageknownForm.user = languageknown.user;
							$scope.languageknownForm.language = languageknown.language;
							$scope.languageknownForm.read = languageknown.read;
							$scope.languageknownForm.write = languageknown.write;
							$scope.languageknownForm.speak = languageknown.speak;
							$scope.languageknownForm.proficencylevel = languageknown.proficencylevel;
							$scope.languageknownForm.id =files.id;
						};

						/* Private Methods */
						// HTTP GET- get all languageknown collection
						function _refreshLanguageKnownData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/languageknown/'
									}).then(function successCallback(response) {
								// alert(response.data.data)
								$scope.files = response.data.data;
							}, function errorCallback(response) {
								console.log(response.statusText);
							});
						}

						function _success(response) {

							_refreshLanguageKnownData();
							_clearFormData()
						}

						function _error(response) {

							console.log(response.statusText);
						}

						// Clear the form
						function _clearFormData() {
							// $scope.genderForm.id = -1;
							$scope.languageknownForm.user = "";
							$scope.languageknownForm.language = "";
							$scope.languageknownForm.read = "";
							$scope.languageknownForm.write = "";
							$scope.languageknownForm.speak = "";
							$scope.languageknownForm.proficencylevel = "";

						}
						;
					});