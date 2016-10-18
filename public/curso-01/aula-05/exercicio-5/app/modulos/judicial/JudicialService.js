/**
 * Service
 * @memberOf Service
 * @namespace JudicialService
 * @desc Este Service contém todas as regras de negócio da aplicação
 * @example
 * //No Controller
 *  .controller('Controller', function (JudicialService){...
 */
(function (){
    'use strict';

    angular
            .module('mpu')
            .service('JudicialService', Service);

    function Service(){
        
        //-------------- DECLARAÇÕES
        
        return {
            foo: foo
        };

        //-------------- DETALHES DAS FUNÇÕES

        function foo(){
        }
    }
})();