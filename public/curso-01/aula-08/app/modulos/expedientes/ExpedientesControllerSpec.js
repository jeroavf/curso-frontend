
describe("ExpedientesController", function (){
    var exp, backend, $window;

    //Carregar App
    beforeEach(module('mpf'));

    //Antes de executar o teste
    beforeEach(inject(function ($controller, _$httpBackend_, _$window_){
        exp = $controller("ExpedientesController");
        
        $window = _$window_;
        $window.location.hash = "#/expedientes/listar";
        
        backend = _$httpBackend_;
    }));

    it("Deve permitir cadastar apenas quando a Etiqueta for valida", function (){
        var valEtiqueta = "Abc";
        var retorno = exp.etiquetaInvalida(valEtiqueta);
        expect(retorno).toBeTruthy();
    });

    it("Deve carregar a coluna Assunto com 3 tracos quando ela vier vazia", function (){
        
        var mockConsultaExpedientes = [{ id: 0, etiqueta: 111 }];
        backend.when("GET", "http://localhost:2403/expedientes").respond(mockConsultaExpedientes);
        backend.flush();
        
        expect(exp.listaExpedientes[0].assunto).toEqual("---");
    });

});