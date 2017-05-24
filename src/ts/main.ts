module Tracker{    
    /**
     * This class is the closest thing we have to a main method.
     * It is the code which needs to run to kickstart the application.
     * It is executed after all of the service have been configured and the injector has been created.
     */
    export class Main{
        static $inject = [
            'Restangular'
        ];

        constructor(
            private restangular: Restangular.IService
        ) {            
            restangular.setBaseUrl("http://localhost:8080/api/");
            restangular.setDefaultHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Accept, X-Requested-With'
            });
        }


    }
}