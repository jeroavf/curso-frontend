/**
 * Controller
 * @memberOf Controller
 * @namespace JudicialController
 * @desc Este controller contém todas as regras de negócio da aplicação
 * @example
 * //No HTML
 * <div ng-controller="JudicialController as jud"></div>
 */
(function (){
    'use strict';
    angular
            .module("mpu")
            .controller('JudicialController', Ctrl);

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