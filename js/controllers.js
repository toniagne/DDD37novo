angular.module('starter.controllers', ['ionic', 'angular-carousel'])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('Pesquisas', function($scope) {})

.controller('Configuracoes', function($scope, $ionicLoading, $ionicPopup, $http, $window, Chats) {
  $scope.submit = function(contactform, formData) {
    $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
            if (contactform.$valid) {             
                $http({
                    method  : 'POST',
                    url     : 'http://www.ddd37.com.br//app.mobile/enviaemail/index.php?telefone='+formData['telefone']+'&email='+formData['email']+'&assunto='+formData['assunto']+'&texto='+formData['mensagem']+'&nome='+formData['nome'],
                    data    : $scope.formData,  //param method from jQuery //set the headers so angular passing info as form data (not request payload)
                }).success(function(data){
                      $ionicLoading.hide(); 
                      return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Sua mensagem foi enviada com sucesso !<br><br> Em breve entraremos em contato.'
                     });
                    
                }).error(function(data){
                  $ionicLoading.hide(); 
                  return $ionicPopup.alert({
                       title: 'ERRO.',
                       template: 'Houve um erro no envio, verifique sua conexão, ou tente novamente.'
                     });
                });
            } else {
                return $ionicPopup.alert({
                       title: 'ERRO.',
                       template: 'Houve um erro no envio, verifique sua conexão, ou tente novamente.'
                     });
            }
        } 

  //$scope.post = JSON.parse($window.localStorage['my-storage']);  

})

.controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
  $scope.goAway = function() {
    var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
    card.swipe();
  };
})  
        
.controller('Fastfood', function($scope, $stateParams, $http, $ionicPopup, $ionicLoading) { 
       $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
      
         $http.get('http://www.ddd37.com.br/app/listagens/fastfood/', {params: {cidade: "Lagoa da Prata"}})
            .error(function(data){
                $ionicLoading.hide();
               console.log(data);
            })
            .success(function(data){
                $ionicLoading.hide();
                $scope.registros = data;
            });
})  

.controller('Orgaospublicos', function($scope, $stateParams, $http, $ionicPopup, $ionicLoading) { 
       $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
      
        $http.get('http://www.ddd37.com.br/app/listagens/orgaospublicos')
            .error(function(data){
                $ionicLoading.hide();
               console.log(data);
            })
            .success(function(data){
                $ionicLoading.hide();
                $scope.registros = data;
            });
}) 

.controller('Aciasam', function($scope, $stateParams, $http, $ionicPopup, $ionicLoading) { 
       $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
      
        $http.get('http://www.ddd37.com.br/app/listagens/aciasam/')
            .error(function(data){
                $ionicLoading.hide();
               console.log(data);
            })
            .success(function(data){
                $ionicLoading.hide();
                $scope.registros = data;
            });
}) 
 

.controller('PesquisasCidade', function($scope, $stateParams, $http, $ionicPopup, $ionicLoading, Chats) {
  $scope.apagaitem = false;
   $('.sky-carousel').carousel({
              itemWidth: 260,
              itemHeight: 260,
              distance: 12,
              selectedItemDistance: 75,
              selectedItemZoomFactor: 1,
              unselectedItemZoomFactor: 0.5,
              unselectedItemAlpha: 0.6,
              motionStartDistance: 210,
              topMargin: 115,
              gradientStartPoint: 0.35,
              gradientOverlayColor: "#ebebeb",
              gradientOverlaySize: 190,
              selectByClick: true
            });


  	 $scope.cidadeSelecionada = $stateParams.cidadeSel;   
  	 $http.get('http://www.ddd37.com.br/app/listagens/banners/', {params: {cidade: $stateParams.cidadeSel}})
                 .then(        
                  function(res){
                    $scope.BannersCidade  = res.data;              
                  }); 

     $scope.mudastring = function(term){
          return term.replace('/', " "); 
     }

     $scope.limpapesquisa = function(text){ 
       $scope.apagaitem = false;
       $scope.registros = "";
     } 

     $scope.pesquisar = function(text){
       $scope.apagaitem = true;

            function removeAcento(strToReplace) {
                str_acento = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
                str_sem_acento = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
                var nova = "";
                for (var i = 0; i < strToReplace.length; i++) {
                    if (str_acento.indexOf(strToReplace.charAt(i)) != -1) {
                        nova += str_sem_acento.substr(str_acento.search(strToReplace.substr(i, 1)), 1);
                    } else {
                        nova += strToReplace.substr(i, 1);
                    }
                }
                return nova;
            }
        
       var termousado = removeAcento(text.replace('ç', "c"));        

     	 $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
     	
         $http.get('http://www.ddd372345.com.br/app/listagens/geral', 
          {params: {cidade: $stateParams.cidadeSel, termo: termousado}})               
                  .success(function(data){
                      $ionicLoading.hide();
                      $scope.registros = data;
                  })

                  .error(function(data){
                    $scope.tipolista = "offline";
                    console.log('leitura offline'); 
                    $http.get('data/lista-samonte.json')
                      .error(function(data){
                          
                      })
                      .success(function(data){
                          $scope.tipolista = "online";
                          $ionicLoading.hide();
                          $scope.registros = data;
                      });
 
                     
                  });
        }

})

.controller('Abertura', function($scope, $sce, $location) {
   setTimeout(function () 
       {          
            $location.path('/tab/dash');     
       }, 1000);

})

.controller('Inicial', function($scope, $sce, $window) {

  $scope.linkModelFunc = function (url){ 
    $window.open(url,'_blank', "location=1,status=1,scrollbars=1");
  }
   
})
   
.controller('Curtaeganhe', function($scope, $stateParams, $http, $ionicPopup, $ionicLoading) { 
       $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
      
         $http.get('http://www.ddd37.com.br/app/listagens/promocoes')
            .error(function(data){
                $ionicLoading.hide();
               console.log(data);
            })
            .success(function(data){
                $ionicLoading.hide();
                $scope.registros = data;
            });
})  

.controller('Uteis', function($scope, $stateParams, $http, $ionicPopup, $ionicLoading) { 
       $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
      
         $http.get('http://www.ddd37.com.br/app/listagens/uteis/', {params: {cidade: $stateParams.cidadeSel}})
            .error(function(data){
                $ionicLoading.hide();
               console.log(data);
            })
            .success(function(data){
                $ionicLoading.hide();
                $scope.uteis = data;
            });
})  

.controller('Categorias', function($scope, $stateParams, $http, $ionicPopup, $ionicLoading) { 

      $scope.cidade = $stateParams.cidadeSel;
       $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
      
         $http.get('http://www.ddd37.com.br/app/listagens/categorias/', {params: {cidade: $stateParams.cidadeSel}})
            .error(function(data){
                $ionicLoading.hide();
               console.log(data);
            })
            .success(function(data){
                $ionicLoading.hide();
                $scope.categorias = data;
            });
}) 
.controller('CategoriasCadastros', function($scope, $stateParams, $http, $ionicPopup, $ionicLoading) { 

      var itens   =   $stateParams.cidadeSel.split("*"); 
       $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
      
        $http.get('http://www.ddd37.com.br/app/listagens/geral/', {params: {categoria: itens[0], cidade: itens[1]}}) 

            .error(function(data){
                $ionicLoading.hide();
               console.log(data);
            })
            .success(function(data){
                $ionicLoading.hide();
                $scope.registros = data;
            });
}) 


.controller('Emergencia', function($scope, $stateParams, $http, $ionicPopup, $ionicLoading) { 
       $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
      
         $http.get('http://www.ddd37.com.br/app/listagens/emergencia/', {params: {cidade: $stateParams.cidadeSel}})
            .error(function(data){
                $ionicLoading.hide();
               console.log(data);
            })
            .success(function(data){
                $ionicLoading.hide();
                $scope.emergencia = data;
            });
})  

.controller('Eventos', function($scope, $stateParams, $http, $ionicPopup, $ionicLoading) { 
       $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });

       $scope.mudastring = function(term){

          return term.replace('/', " "); 
        }
      
         $http.get('http://www.ddd37.com.br/app/listagens/eventos/')
            .error(function(data){
                $ionicLoading.hide();
               console.log(data);
            })
            .success(function(data){
                $ionicLoading.hide();
                $scope.registros = data;
            });
})  

.controller('Classificados', function($scope) {})

.controller('CardCtrl', function($scope, TDCardDelegate) {
  $scope.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE');
    $scope.addCard();
  };
  $scope.cardSwipedRight = function(index) {
    console.log('RIGHT SWIPE');
    $scope.addCard();
  };
})

.controller('VerDetalhes', function($scope, $stateParams, $ionicPopup, Chats, $window, $ionicSlideBoxDelegate) { 
 
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  $scope.linkModelFunc = function (url){ 
   return $window.open("https://"+url, '_system', 'location=yes');
  }



  $scope.abreImagem = function(content){
    console.log('teste');
    return $ionicPopup.show({
                       template: '<img src="'+content+'" width="100%">',
                       buttons: [
                        { text: 'Fechar' }
                       ]
                     });
  }


     $scope.favoritar = function (data){
      var itens   =   data.split("*"); 
      var arrObjetos = [{strNome:itens[1], strEndereco:itens[2], strTelefone1:itens[3], strTelefone2:itens[4], strTelefone3:itens[5], pic:itens[6]}];
       Chats.incluiFavoritos(arrObjetos);    
          
    return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Você incluiu <b>'+itens[1]+'</b> na sua lista de favoritos.<br><br> Para você visualizar sua lista de favoritos, acesso o menu suspenso e toque em FAVORITOS.'
                     });
    }
  $scope.chat = Chats.get($stateParams.contato);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }

 


});
