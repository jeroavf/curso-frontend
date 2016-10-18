/**
 * Diretiva
 * @memberOf Diretiva
 * @namespace NOVADIRETIVA
 * @desc Faz lorem ipsum...
 * @example
 * <div NOVA-DIRETIVA></div>
 */
(function (){
    'use strict';
    angular
            .module("APP")
            .directive('NOVADIRETIVA', Directive);
    
    function Directive(){
        return {
            bindToController: true,
            controller: function (){}, 
            controllerAs: 'NOVADIRETIVA',
            restrict: "A",
            link: link
        };

        function link(scope, element, attr){
            var vm = scope.debug;

            vm.varInput = "";

            vm.foo = foo;

            /////////

            function foo(){
            }
        }
    }
})();