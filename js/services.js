angular.module('starter.services', [])



.factory('Chats', function($http, $window) {
 
  var favoritos =  $window.localStorage && $window.localStorage.getItem('my-storage');

  return {
    verfavoritos: function() { 
      return JSON.parse(favoritos);
    },
    incluiFavoritos: function(itens){   
     if (favoritos == null) {
      var favoritosObject = itens;
     } else {
      var favoritosObject = JSON.parse(favoritos);
     }

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
      String.prototype.stripHTML = function() {return this.replace(/<.*?>/g, '');}
      var imagens =  itens[7].split(",");       
      var face1   =  itens[8].replace(/,/g, "/"); var face = face1.replace(/°/g, "?"); 
      var site1   =  itens[9].replace(/,/g, "/"); var site = site1.replace(/°/g, "?");

      var fones   =  itens[2].split("<BR>"); 
      var fonesN  =  fones[0].split("<br>"); 
 


      if (fonesN[0] == ""){ var fone2 = itens[3]; } else { var fone2 = fonesN[1]; }


      var nome    = itens[1];
                             var detalheContato = [
                                {
                                    "id": itens[0], 
                                    "strNome": nome.stripHTML(), 
                                    "strTelefone1": fonesN[0], 
                                    "strTelefone2": fone2, 
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
