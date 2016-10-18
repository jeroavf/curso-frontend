/**
 * Filtro
 * @memberOf Filtro
 * @namespace CamelCase
 * @desc Transforma um texto em...
 * @example
 * {{ varTexto | NOVOFILTRO }}
 * $filter('NOVOFILTRO')(varTexto)
 */
(function (){
    'use strict';
    angular
            .module('APP')
            .filter("NOVOFILTRO", Filter);

    function Filter(){
        return function (data){
            ///
        };
    };

})();