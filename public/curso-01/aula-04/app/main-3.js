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

                var jsonPessoa = {
                    "nome": "JUCIE OLIVEIRA MARCIEL",
                    "telefones": [
                        "61-1111111",
                        "61-2222222",
                        "61-33333333"
                    ],
                    "pessoasRelacionadas": {
                        "nome": "Jéssica",
                        "area": "criminal"
                    },
                    "enderecos": [{
                            "bairro": "Águas Claras",
                            "estado": "Distrito Federal"
                        }, {
                            "bairro": "Sobradinho",
                            "estado": "Distrito Federal"
                        }, {
                            "bairro": "Ceilândia",
                            "estado": "Distrito Federal"
                        }
                    ]
                };
                
                console.log("jsonPessoa", jsonPessoa);
                
            });

})();

