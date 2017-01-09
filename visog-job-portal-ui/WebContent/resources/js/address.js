	var app = angular.module("Address", []);

	//Controller Part
	app
			.controller(
					"AddressController",
					function($scope, $http) {

						$scope.Address = [];
						$scope.AddressForm = {
							// id : -1,
							addressLine1: "",
							addressLine2 : "",
							countryId : "",
							stateId : "",
							zipcode : "",
							associatedtype : "",
							associatedId: "",
							adddressTypeId : "",
							
						};

						// Now load the data from server
						_refreshAddressData();

						// HTTP POST/PUT methods for add/edit address
						// with the help of id, we are going to find out whether it
						// is put or post operation

						$scope.submitAddress = function() {

							var method = "";
							var url = "";
				
							if ($scope.AddressForm.id == -1
									|| $scope.AddressForm.id == undefined) {
								// Id is absent in form data, it is create new address
								// operation

								method = "POST";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/Address/';
								$http
										.post(
												url,
												{
													"addressline1" : $scope.AddressForm.addressline1,
													"addressline2" : $scope.AddressForm.addressline2,
													"countryid" : $scope.AddressForm.countryid,
													"stateid" : $scope.AddressForm.stateid,
													"zipcode" : $scope.AddressForm.zipcode,
													"associatedtype" : $scope.AddressForm.associatedtype,
													"associatedid" : $scope.AddressForm.associatedid,
													"addresstypeid" : $scope.AddressForm.addresstypeid,
													
												}).then(_success, _error);

							} else {

								// Id is present in form data, it is edit address
								// operation
								id = $scope.AddressForm.id;
								method = "PUT";
								url = 'http://localhost:8080/visog-job-portal-api/transaction/Address/'
										+ id;
								$http
										.put(
												url,
												{
													"addressline1" : $scope.Address.addressline1,
													"addressline2" : $scope.addressType.addressline2,
													"countryid" : $scope.AddressForm.countryid,
													"stateid" : $scope.AddressForm.stateid,
													"zipcode" : $scope.AddressForm.zipcode,
													"associatedtype" : $scope.AddressForm.associatedtype,
													"associatedid" : $scope.AddressForm.associatedid,
													"addresstypeid" : $scope.AddressForm.addresstypeid,
													
													
												}).then(_success, _error);
								$scope.Address.id = -1;
							}
							/*
							 * $http({ method : method, url : url, data :
							 * angular.toJson($scope.AddressForm), headers : {
							 * 'Content-Type' : 'application/json' } }).then(
							 * _success, _error );
							 */
						};

						// HTTP DELETE- delete address by Id
						$scope.deleteCountry = function(country) {
							$http(
									{
										method : 'DELETE',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/Address/'
												+ country.id
									}).then(_success, _error);
						};

						// In case of edit, populate form fields and assign form.id
						// with address id
						$scope.editCountry = function(country) {

							$scope.AddressForm.addressline1 = Address.addressline1;
							$scope.AddressForm.addressline2 = Address.addressline2;
							$scope.AddressForm.countryid=Address.countryid;
						    $scope.AddressForm.stateid=Address.stateid;
							$scope.AddressForm.zipcode=Address.zipcode;
							$scope.AddressForm.associatedtype=Address.associatedtype;
							$scope.AddressForm.associatedid=Address.associatedid;
							$scope.AddressForm.addresstypeid=Address.addresstypeid;
							
							
						};

						/* Private Methods */
						// HTTP GET- get all countries collection
						function _refreshAddressData() {
							$http(
									{
										method : 'GET',
										url : 'http://localhost:8080/visog-job-portal-api/transaction/Address/'
									}).then(function successCallback(response) {
								// alert(response.data.data)
								$scope.Address = response.data.data;
							}, function errorCallback(response) {
								console.log(response.statusText);
							});
						}

						function _success(response) {

							_refreshAddressData();
							_clearFormData()
						}

						function _error(response) {

							console.log(response.statusText);
						}

						// Clear the form
						function _clearFormData() {
							// $scope.genderForm.id = -1;
							$scope.AddressForm.addressline1 = "";
							$scope.AddressForm.addressline2 = "";
							$scope.AddressForm.countryid="";
						    $scope.AddressForm.stateid="";
							$scope.AddressForm.zipcode="";
							$scope.AddressForm.associatedtype="";
							$scope.AddressForm.associatedid="";
							$scope.AddressForm.addresstypeid="";
						

						}
						;
					});
