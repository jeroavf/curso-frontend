/**
 * Diretiva
 * @memberOf Diretiva
 * @namespace menuAtivo
 * @desc Faz lorem ipsum...
 * @example
 * <ul class="nav navbar-nav" menu-ativo>
 <li><a></a></li>....
 */
(function (){
    'use strict';
    angular
            .module("mpf")
            .directive('menuAtivo', Directive);

    function Directive(){

        //-------------- DECLARAÇÕES

        return {
            bindToController: true,
            controller: function (){},
            controllerAs: 'menuAtivo',
            restrict: "A",
            link: link
        };

        //-------------- DETALHES DAS FUNÇÕES

        function link(scope, element, attr){

            var menuUrl = element.find("a");
            var urlRoute = window.location.hash;
            var classeAtivo = "active";
            
            init();
            
            /////////

            function init(){
                angular.forEach(menuUrl, function (v, k){
                    var aHref = angular.element(v);
                    var link = aHref.attr("href");
                    if (link === urlRoute)
                        aHref.parent().addClass(classeAtivo);
                })
            }
        }
    }
})();