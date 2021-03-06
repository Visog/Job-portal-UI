
            var app = angular.module("FileTypeManagement", []);
         
            //Controller Part
            app.controller("FileTypeController", function($scope, $http) {
         
               
                $scope.filetype= [];
                $scope.FileTypeForm = {
                 id : -1,
                    extension : "",
                    description : ""
                };
         
                //Now load the data from server
                _refreshFileTypeData();
         
                //HTTP POST/PUT methods for add/edit file 
                // with the help of id, we are going to find out whether it is put or post operation
                
                $scope.submitFileType = function() {
         
                    var method = "";
                    var url = "";
                   // alert($scope.FileExtensionForm.id);
                    if ($scope.FileTypeForm.id == -1 || $scope.FileTypeForm.id == undefined) {
                        //Id is absent in form data, it is create new file operation
                        
                        method = "POST";
                        url = 'http://localhost:8080/visog-job-portal-api/master/fileType/';
                        $http.post(url, { "extension": $scope.fileTypeForm.extension, 
                        	"description" : $scope.fileTypeForm.description }).then( _success, _error ); 
                        
                    
                    } else {
                    	 
                        //Id is present in form data, it is edit file operation
                        id=$scope.fileTypeForm.id;
                        method = "PUT";
                        url = 'http://localhost:8080/visog-job-portal-api/master/fileType/'+ id;
                      $http.put(url, { "extension": $scope.fileTypeForm.extension, "description" : $scope.FileExtensionForm.description }).then( _success, _error );
                      $scope.fileTypeForm.id = -1;
                    }
 /*         
                    $http({
                        method : method,
                        url : url,
                        data : angular.toJson($scope.FileExtensionForm),
                        headers : {
                            'Content-Type' : 'application/json'
                        }
                    }).then( _success, _error ); */
                };
         
                //HTTP DELETE- delete file by Id
                $scope.deleteFileType = function(fileType) {
                    $http({
                        method : 'DELETE',
                        url : 'http://localhost:8080/visog-job-portal-api/master/fileType/' + fileType.id
                    }).then(_success, _error);		
                };
 
             // In case of edit, populate form fields and assign form.id with file id
                $scope.editFileType = function(fileType) {
                  
                    $scope.fileTypeForm.extension = file.extension;
                    $scope.fileTypeForm.description = file.description;
                    $scope.fileTypeForm.id = file.id;
                };
         
                /* Private Methods */
                //HTTP GET- get all countries collection
                function _refreshFileTypeData() {
                    $http({
                        method : 'GET',
                        url : 'http://localhost:8080/visog-job-portal-api/master/fileType/'
                    }).then(function successCallback(response) {
                    //	alert(response.data.data)
                        $scope.files = response.data.data;
                    }, function errorCallback(response) {
                        console.log(response.statusText);
                    });
                }
         
                function _success(response) {
                	if(response.data.statusCode=='300')
                		{
                	alert(response.data.message);
               			 } 
                    _refreshFileTypeData();
                    _clearFormData()
                }
         
                function _error(response) {
                	
                    console.log(response.statusText);
                }
         
                //Clear the form
                function _clearFormData() {
                    $scope.fileTypeForm.id = -1;
                    $scope.fileTypeForm.extension = "";
                    $scope.fileTypeForm.description = "";
                
                };
            });
       