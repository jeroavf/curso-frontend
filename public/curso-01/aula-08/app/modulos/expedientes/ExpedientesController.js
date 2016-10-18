/**
 * Controller
 * @memberOf Controller
 * @namespace ExpedientesController
 * @desc Este controller contém todas as regras de negócio da aplicação
 * @example
 * //No HTML
 * <div ng-controller="ExpedientesController as exp"></div>
 */
(function (){
    'use strict';
    angular
            .module("mpf")
            .controller('ExpedientesController', Ctrl);

    function Ctrl(ExpedientesService, $window){
        var vm = this;

        //-------------- DECLARAÇÕES

        //variáveis
        vm.listaExpedientes = [];
        vm.respostaFormulario = {sucesso: "", erro: ""};

        //métodos
        vm.cadastrar = cadastrar;
        vm.etiquetaInvalida = etiquetaInvalida;

        main();


        //-------------- DETALHES DAS FUNÇÕES

        function main(){
            if ($window.location.hash === "#/expedientes/listar")
                listar();
        }

        function listar(){
            var lista = ExpedientesService.listar().$promise;
            lista.then(function (dados){
                vm.listaExpedientes = preencheEspacoVazioNaTabela(dados);
            }, function (dado){
                console.log("Sem dados!");
            });
        }
        
        function preencheEspacoVazioNaTabela(dados){
            angular.forEach(dados, function(val, key){
                if ( !dados[key].assunto )
                    dados[key].assunto = "---";
            });
            return dados;
        }

        function cadastrar(expediente){
            var resposta = ExpedientesService.incluir(expediente).$promise;
            resposta.then(function (){
                vm.respostaFormulario.sucesso = "Incluído(a) com sucesso!";
            }, function (dado){
                vm.respostaFormulario.erro = "Erro ao incluir! Motivo: " + dado.statusText;
            });
        }

        function etiquetaInvalida(valor){
            valor = parseInt(valor);
            if ( isNaN(valor) )
                return true;
            else
                return false;
        }
    }
})();