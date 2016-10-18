(function (){
    'use strict';
    angular
            //Aplicativo
            .module('mpu', ['ngRoute'])
            
            //Config: é executando ANTES de carregar os componentes da App
            .config(function ($routeProvider){

                //CONFIGURAÇÃO DE ROTAS (Url)
                $routeProvider.when('/judicial', {
                    controller: "JudicialController",
                    templateUrl: 'app/modulos/judicial/CadastrarView.html'
                });

                $routeProvider.otherwise({redirectTo: '/judicial'});
            });

})();