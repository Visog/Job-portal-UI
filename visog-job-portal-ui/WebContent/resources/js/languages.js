	var app = angular.module("LanguagesManagement", []);

	//Controller Part
	app
			.controller(
					"LanguagesController",
					function($scope, $http) {

						$scope.languages = [];
						$scope.languageForm = {
							// id : -1,
							name : "",
							code : "",
							
					
						};

						// Now load the data from server
						_refreshLanguagesData();

						// HTTP POST/PUT methods for add/edit role
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submitLanguages = function() {

							var method = "";
							var url = "";
							// alert($scope.genderForm.id);
							if ($scope.languageForm.id == -1
									|| $scope.languageForm.id == undefined) {
								// Id is absent in form data, it is create new role
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/master/language/';
								$http
										.post(
												url,
												{
													"name" : $scope.languageForm.name,
													"code" : $scope.languageForm.code,
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit role
								// operation
								id = $scope.languageForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/master/language/'
										+ id;
								$http
										.put(
												url,
												{
													"name" : $scope.languageForm.name,
													"code" : $scope.languageForm.code,
												}).then(_success, _error);
								$scope.languageForm.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.genderForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete role by Id
						$scope.deleteLanguages = function(language) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/master/language/'
												+ language.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with role id
						$scope.editLanguages = function(language) {

							$scope.languageForm.name = language.name;
							$scope.languageForm.code = language.code;
							
							$scope.languageForm.id =language.id;
						};

						/* Private Methods */
						// HTTP GET- get all languages collection
						function _refreshLanguagesData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/master/language/'
									}).then(function successCallback(response) {
								// alert(response.data.data)
								$scope.languages = response.data.data;
							}, function errorCallback(response) {
								console.log(response.statusText);
							});
						}

						function _success(response) {

							_refreshLanguagesData();
							_clearFormData()
						}

						function _error(response) {

							console.log(response.statusText);
						}

						// Clear the form
						function _clearFormData() {
							// $scope.genderForm.id = -1;
							$scope.languageForm.name = "";
							$scope.languageForm.code = "";
						

						}
						;
					});
