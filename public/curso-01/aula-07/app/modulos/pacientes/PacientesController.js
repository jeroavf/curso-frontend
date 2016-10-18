/**
 * Controller
 * @memberOf Controller
 * @namespace PacientesController
 * @desc Este controller contém todas as regras de negócio da aplicação
 * @example
 * //No HTML
 * <div ng-controller="PacientesController as novocontrollerCtrl"></div>
 */
(function (){
    'use strict';
    angular
            .module("centroSocial")
            .controller('PacientesController', Ctrl);


    function Ctrl($scope, $routeParams, PacientesDataService){

        //============  Declarações =====================

        $scope.paciente = {};
        $scope.dadosTabela = [];
        $scope.respostaFormulario = "";
        $scope.respostaTabela = "";
        $scope.incluir = incluir;
        $scope.listar = listar;
        $scope.alterar = alterar;
        $scope.excluir = excluir;
        $scope.isTelaDeAlteracao = isTelaDeAlteracao;
        $scope.confirmarExclusao = confirmarExclusao;
        init();
        //============  Detalhes das funções =====================

        function init(){

            //Tela de alteração
            if (isTelaDeAlteracao()) {
                var idUrl = isTelaDeAlteracao();
                getById(idUrl);
            }
            //Tela de listagem
            else {
                listar();
            }
        }

        //Se tem ID na URL, então é tela de Alteração
        function isTelaDeAlteracao(){
            if ($routeParams.id) {
                return $routeParams.id;
            }
        }

        function confirmarExclusao(paciente){
            $scope.paciente = paciente;
        }

        //-------- SERVIÇOS REST

        function listar(){

            var lista = PacientesDataService.listar().$promise;
            lista.then(function (dados){
                $scope.dadosTabela = dados;
            });
        }

        function incluir(){
            var dadosPaciente = $scope.paciente;
            var resposta = PacientesDataService.incluir(dadosPaciente).$promise;
            resposta.then(function (paciente){
                $scope.respostaFormulario = "Paciente '" + paciente.nome + "' incluído(a) com sucesso!";
            });
        }

        function alterar(){
            var dadosPaciente = $scope.paciente;
            var resposta = PacientesDataService.alterar(dadosPaciente).$promise;
            resposta.then(function (paciente){
                $scope.respostaFormulario = "Paciente '" + paciente.nome + "' alterado(a) com sucesso!";
            });
        }

        function getById(idPaciente){
            var parametros = {id: idPaciente};
            var resposta = PacientesDataService.getById(parametros).$promise;
            resposta.then(function (pacienteBd){
                $scope.paciente = pacienteBd;
            });
        }

        function excluir(paciente){
            var parametros = {id: paciente.id};
            var resposta = PacientesDataService.excluir(parametros).$promise;
            resposta.then(function (){
                $scope.respostaTabela = "Paciente '" + paciente.nome + "' excluido(a) com sucesso!";
                listar();
            });
        }
    }
})();