/**
 * Diretiva
 * @memberOf Diretiva
 * @namespace scrollAnimado
 * @desc Faz lorem ipsum...
 * @example
 * <div scroll-animado><\/div>
 */
(function (){
    'use strict';
    angular
            .module("mpu")
            .directive('scrollAnimado', Dir);
    
    function Dir(){
        return {
            bindToController: true,
            controller: function (){}, 
            controllerAs: 'scrollAnimado',
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