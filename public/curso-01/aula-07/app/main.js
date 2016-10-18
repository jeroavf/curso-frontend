(function (){
    'use strict';
    angular
            //Aplicativo
            .module('centroSocial', ['ngResource','ngRoute'])

            //CONFIGURAÇÃO DE ROTAS (Url)
            .config(function ($routeProvider){

                $routeProvider.when('/pacientes/listar', {
                    controller: 'PacientesController',
                    templateUrl: 'app/modulos/pacientes/listar-pacientes.html'
                });
                
                $routeProvider.when('/pacientes/incluir', {
                    controller: 'PacientesController',
                    templateUrl: 'app/modulos/pacientes/editar-pacientes.html'
                });
                
                $routeProvider.when('/pacientes/alterar/:id', {
                    controller: 'PacientesController',
                    templateUrl: 'app/modulos/pacientes/editar-pacientes.html'
                });

                $routeProvider.otherwise({redirectTo: '/pacientes/listar'});
                
            });

})();