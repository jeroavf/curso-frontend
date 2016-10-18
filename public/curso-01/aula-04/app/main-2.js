(function (){
    'use strict';
    angular
            //Aplicativo
            .module('mpu', ['ngResource', 'ngRoute']);

})();

(function (){
    'use strict';
    angular
            .module('mpu')
            .controller('CadastroCtrl', function (){

                debugger;

                var operacao = 0;
                var valor1 = 0;
                var resultado = "Olá mundo";

                if (operacao === valor1) {
                    resultado = "Agora";
                } else {
                    resultado = "Depois";
                }

                resultado;
            });

})();

