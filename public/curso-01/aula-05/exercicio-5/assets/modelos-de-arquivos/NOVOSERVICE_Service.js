/**
 * Service
 * @memberOf Service
 * @namespace NOVOSERVICE
 * @desc Este Service contém todas as regras de negócio da aplicação
 * @example
 * //No Controller
 *  .controller('Controller', function (NOVOSERVICE){...
 */
(function (){
    'use strict';

    angular
            .module('APP')
            .factory('NOVOSERVICE', Service);

    function Service(){
        
        //-------------- DECLARAÇÕES
        
        var bar = "";
        var service = {
            foo: foo
        };
        return service ;

        //-------------- DETALHES DAS FUNÇÕES

        function foo(){
        }
    }
})();