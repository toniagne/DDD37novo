angular.module('starter.services', [])



.factory('Chats', function($http, $window) {
 
  var favoritos =  $window.localStorage && $window.localStorage.getItem('my-storage');
  return {
    all: function() {
      return chats;
    },
    incluiFavoritos: function(itens){
     var favoritosObject = [];
      favoritosObject = JSON.parse(favoritos);
     var arrFavoritos = [];
     var resultado = favoritosObject.push(itens[0])
    

     localStorage["names"] = JSON.stringify(favoritosObject);      
     $window.localStorage && $window.localStorage.setItem('my-storage', localStorage["names"]);
    },
      banners: function(cidade){
      var banners =  $http.get('http://www.ddd37.com.br/app/listagens/banners/', {params: {cidade: cidade}});
      console.log(banners.$$state);
    },
     get: function(chatId) {
      var itens = chatId.split("*"); 

      var imagens =  itens[7].split(",");       
      var face1   =  itens[8].replace(/,/g, "/"); var face = face1.replace(/°/g, "?"); 
      var site1   =  itens[9].replace(/,/g, "/"); var site = site1.replace(/°/g, "?");
                             var detalheContato = [
                                {
                                    "id": itens[0], 
                                    "strNome": itens[1], 
                                    "strTelefone1": itens[2], 
                                    "strTelefone2": itens[3], 
                                    "strTelefone3": itens[4], 
                                    "strEndereco":  itens[5], 
                                    "fotoInterna": itens[6], 
                                    "pic": itens[7],
                                    "imagens": imagens,
                                    "face": face,
                                    "site": site,
                                    "email": ""
                                  },
                             ];         
                        return detalheContato[0];    
                      },
  };
});
