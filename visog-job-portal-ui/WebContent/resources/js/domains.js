  	var app = angular.module("Domains", []);

	//Controller Part
	app
			.controller(
					"DomainController",
					function($scope, $http) {

						$scope.Domains = [];
						$scope.DomainsForm = {
							// id : -1,
							name : "",
							description : "",
							
						};

						// Now load the data from server
						_refreshDomainsData();

						// HTTP POST/PUT methods for add/edit role
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submitDomains = function() {

							var method = "";
							var url = "";
				
							if ($scope.DomainsForm.id == -1
									|| $scope.DomainsForm.id == undefined) {
								// Id is absent in form data, it is create new role
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/master/Domains/';
								$http
										.post(
												url,
												{
													"name" : $scope.DomainsForm.name,
													"description" : $scope.DomainsForm.description
													
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit role
								// operation
								id = $scope.DomainsForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/master/Domains/'
										+ id;
								$http
										.put(
												url,
												{
													"name" : $scope.Domains.name,
													"description" : $scope.Domains.description
													
												}).then(_success, _error);
								$scope.Domains.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.Address_TypeForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete role by Id
						$scope.deleteDomains = function(Domains) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/master/Domains/'
												+ Domains.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with role id
						$scope.editDomains = function(domains) {

							$scope.DomainsForm.name = Domains.name;
							$scope.DomainsForm.description = Domains.description;
							
						};

						/* Private Methods */
						// HTTP GET- get all courses collection
						function _refreshDomainsData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/master/Domains/'
									}).then(function successCallback(response) {
								// alert(response.data.data)
								$scope.Domains = response.data.data;
							}, function errorCallback(response) {
								console.log(response.statusText);
							});
						}

						function _success(response) {

							_refreshDomainsData();
							_clearFormData()
						}

						function _error(response) {

							console.log(response.statusText);
						}

						// Clear the form
						function _clearFormData() {
							// $scope.genderForm.id = -1;
							$scope.DomainsForm.name = "";
							$scope.DomainsForm.description = "";
						

						}
						;
					});
