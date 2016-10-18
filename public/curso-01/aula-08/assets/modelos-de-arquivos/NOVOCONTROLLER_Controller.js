/**
 * Controller
 * @memberOf Controller
 * @namespace NOVOController
 * @desc Este controller contém todas as regras de negócio da aplicação
 * @example
 * //No HTML
 * <div ng-controller="NOVOController as NOVO"></div>
 */
(function (){
    'use strict';
    angular
            .module("APP")
            .controller('NOVOController', Ctrl);

    function Ctrl(){
        var vm = this;

        //-------------- DECLARAÇÕES

        //variáveis
        vm.varInput = "";

        //métodos
        vm.foo = foo;

        //-------------- DETALHES DAS FUNÇÕES

        function foo(){
        }
    }
})();