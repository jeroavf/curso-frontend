/**
 * Service
 * @memberOf Service
 * @namespace ExpedientesService
 * @desc Este Service contém todas as regras de negócio da aplicação
 * @example
 * //No Controller
 *  .controller('Controller', function (ExpedientesSERVICE){...
 */
(function (){
    'use strict';

    angular
            .module('mpf')
            .factory('ExpedientesService', Service);

    function Service($resource){

        //-------------- DECLARAÇÕES

        var expedientesREST = $resource("http://localhost:2403/expedientes");

        var service = {
            listar: listar,
            incluir: incluir
        };
        return service;

        //-------------- DETALHES DAS FUNÇÕES

        //Read
        function listar(){
            return expedientesREST.query();
        }

        //Create
        function incluir(dados){
            return expedientesREST.save(dados);
        }
    }

})();