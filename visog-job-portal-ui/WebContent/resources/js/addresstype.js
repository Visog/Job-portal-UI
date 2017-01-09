	var app = angular.module("Address_Type", []);
  
	//Controller Part
	app
			.controller(
					"AddressTypeController",
					function($scope, $http) {

						$scope.AddressType = [];
						$scope.AddressTypeForm = {
							// id : -1,
							name : "",
							description : "",
							
						};

						// Now load the data from server
						_refreshAddress_TypeData();

						// HTTP POST/PUT methods for add/edit role
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submitAddress_Type = function() {

							var method = "";
							var url = "";
				
							if ($scope.AddressTypeForm.id == -1
									|| $scope.AddressTypeForm.id == undefined) {
								// Id is absent in form data, it is create new role
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/master/Address_Type/';
								$http
										.post(
												url,
												{
													"name" : $scope.AddressTypeForm.name,
													"description" : $scope.AddressTypeForm.description
													
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit role
								// operation
								id = $scope.AddressTypeForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/master/Address_Type/'
										+ id;
								$http
										.put(
												url,
												{
													"name" : $scope.AddressType.name,
													"description" : $scope.addressType.description
													
												}).then(_success, _error);
								$scope.AddressType.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.Address_TypeForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete role by Id
						$scope.deleteAddressType = function(addresstype) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/master/Address_Type/'
												+ addresstype.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with role id
						$scope.editAddressType = function(addresstype) {

							$scope.AddressTypeForm.name = AddressType.name;
							$scope.AddressTypeForm.description = AddressType.description;
							
						};

						/* Private Methods */
						// HTTP GET- get all countries collection
						function _refreshAddressTypeData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/master/Address_Type/'
									}).then(function successCallback(response) {
								// alert(response.data.data)
								$scope.AddressType = response.data.data;
							}, function errorCallback(response) {
								console.log(response.statusText);
							});
						}

						function _success(response) {

							_refreshAddressTypeData();
							_clearFormData()
						}

						function _error(response) {

							console.log(response.statusText);
						}

						// Clear the form
						function _clearFormData() {
							// $scope.genderForm.id = -1;
							$scope.AddressTypeForm.name = "";
							$scope.AddressTypeForm.description = "";
						

						}
						;
					});
