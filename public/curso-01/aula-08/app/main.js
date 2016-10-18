(function (){
    'use strict';
    angular
            //Aplicativo
            .module('mpf', ['ngResource','ngRoute'])

            //CONFIGURAÇÃO DE ROTAS (Url)
            .config(function ($routeProvider){

                $routeProvider.when('/expedientes/listar', {
                    templateUrl: 'app/modulos/expedientes/ListagemView.html'
                });

                $routeProvider.when('/expedientes/cadastrar', {
                    templateUrl: 'app/modulos/expedientes/CadastroView.html'
                });

                $routeProvider.otherwise({redirectTo: '/expedientes/listar'});
                
            });

})();