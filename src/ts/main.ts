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
            restangular.setBaseUrl("https://foodtracker-api.herokuapp.com/api/");
            var headers: any = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Accept, X-Requested-With'
            };

            var token = window.localStorage.getItem("token");

            if(token){
                headers['Authorization'] = 'Bearer ' + token;
            }

            restangular.setDefaultHeaders(headers);
        }


    }
}