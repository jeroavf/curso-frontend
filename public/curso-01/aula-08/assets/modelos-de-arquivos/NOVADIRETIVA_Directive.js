/**
 * Diretiva
 * @memberOf Diretiva
 * @namespace NOVA
 * @desc Faz lorem ipsum...
 * @example
 * <div NOVA></div>
 */
(function (){
    'use strict';
    angular
            .module("APP")
            .directive('NOVA', Directive);
    
    function Directive(){
        
        //-------------- DECLARAÇÕES
        
        return {
            bindToController: true,
            controller: function (){}, 
            controllerAs: 'NOVA',
            restrict: "A",
            link: link
        };
        
        //-------------- DETALHES DAS FUNÇÕES

        function link(scope, element, attr){

            var vm = scope.NOVA;
            vm.varInput = "";

            vm.foo = foo;

            /////////

            function foo(){
            }
        }
    }
})();