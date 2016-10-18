/**
 * Service
 * @memberOf Service
 * @namespace NOVOService
 * @desc Este Service contém todas as regras de negócio da aplicação
 * @example
 * //No Controller
 *  .controller('Controller', function (NOVOService){...
 */
(function (){
    'use strict';

    angular
            .module('APP')
            .factory('NOVOService', Service);

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