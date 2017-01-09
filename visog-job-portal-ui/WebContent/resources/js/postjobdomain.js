var app = angular.module("Post_Job_Domains", []);

// Controller Part
app
		.controller(
				"PostJobDomainsController",
				function($scope, $http) {

					$scope.PostJobDomains = [];
					$scope.PostJobDomainsForm = {
						// id : -1,
						postjobid : "",
						domainid : "",

					};

					// Now load the data from server
					_refreshCoursesData();

					// HTTP POST/PUT methods for add/edit role
					// with the help of id, we are going to find out whether it
					// is put or post operation

					$scope.submitCourses = function() {

						var method = "";
						var url = "";

						if ($scope.CoursesForm.id == -1
								|| $scope.CoursesForm.id == undefined) {
							// Id is absent in form data, it is create new role
							// operation

							method = "POST";
							url = 'http://localhost:8080/visog-job-portal-api/master/Courses/';
							$http.post(url, {
								"postjobid" : $scope.PostJobDomainsForm.postjobid,
								"domainid" : $scope.PostJobDomainsForm.domainid

							}).then(_success, _error);

						} else {

							// Id is present in form data, it is edit role
							// operation
							id = $scope.PostJobDomainsForm.id;
							method = "PUT";
							url = 'http://localhost:8080/visog-job-portal-api/master/PostJobDomains/'
									+ id;
							$http.put(url, {
								"name" : $scope.PostJobDomains.postjobid,
								"description" : $scope.PostJobDomains.domainid

							}).then(_success, _error);
							$scope.PostJobDomains.id = -1;
						}
						/*
						 * $http({ method : method, url : url, data :
						 * angular.toJson($scope.Address_TypeForm), headers : {
						 * 'Content-Type' : 'application/json' } }).then(
						 * _success, _error );
						 */
					};

					// HTTP DELETE- delete role by Id
					$scope.deletePostJobDomains = function(PostJobDomains) {
						$http(
								{
									method : 'DELETE',
									url : 'http://localhost:8080/visog-job-portal-api/master/PostJobDomains/'
											+ PostJobDomains.id
								}).then(_success, _error);
					};

					// In case of edit, populate form fields and assign form.id
					// with role id
					$scope.editPostJobDomains = function(postJobDomains) {

						$scope.PostJobDomainsForm.postjobid = PostJobDomains.postjobid;
						$scope.PostJobDomainsForm.domainid = PostJobDomains.domainid;

					};

					/* Private Methods */
					// HTTP GET- get all courses collection
					function _refreshPostJobDomainsData() {
						$http(
								{
									method : 'GET',
									url : 'http://localhost:8080/visog-job-portal-api/master/PostJobDomains/'
								}).then(function successCallback(response) {
							// alert(response.data.data)
							$scope.PostJobDomains = response.data.data;
						}, function errorCallback(response) {
							console.log(response.statusText);
						});
					}  

					function _success(response) {

						_refreshPostJobDomainsData();
						_clearFormData()
					}

					function _error(response) {

						console.log(response.statusText);
					}

					// Clear the form
					function _clearFormData() {
						// $scope.genderForm.id = -1;
						$scope.PostJobDomainsForm.postjobid = "";
						$scope.PostJobDomainsForm.domainid = "";

					}
					;
				});
