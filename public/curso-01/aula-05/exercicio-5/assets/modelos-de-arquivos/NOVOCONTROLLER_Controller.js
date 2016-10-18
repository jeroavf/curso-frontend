/**
 * Controller
 * @memberOf Controller
 * @namespace NOVOCONTROLLER
 * @desc Este controller contém todas as regras de negócio da aplicação
 * @example
 * //No HTML
 * <div ng-controller="NOVOCONTROLLER as novocontrollerCtrl"></div>
 */
(function (){
    'use strict';
    angular
            .module("APP")
            .controller('NOVOCONTROLLER', Ctrl);

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