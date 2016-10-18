var AppCentroSocial = angular.module("centroSocial");

AppCentroSocial.factory('PacientesDataService', function ($resource){

    var url = "http://localhost:2403/pacientes";
    var pacientesREST = $resource(url);

    //CRUD
    return {
        //Create
        incluir: function (dados){
            return pacientesREST.save(dados, function (resposta){
                return resposta;
            }, function (erro){
                return erro;
            });
        },
        //Read
        listar: function (){
            return pacientesREST.query(function (resposta){
                return resposta;
            }, function (erro){
                return erro;
            });
        },
        //Update
        alterar: function (dados){
            return pacientesREST.save(dados, function (resposta){
                return resposta;
            }, function (erro){
                return erro;
            });
        },
        //Delete
        excluir: function (id){
            return pacientesREST.delete(id, function (resposta){
                return resposta;
            }, function (erro){
                return erro;
            });
        },
        getById: function (id){
            return pacientesREST.get(id, function (resposta){
                return resposta;
            }, function (erro){
                return erro;
            });
        }
    };

});
